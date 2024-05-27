import { ProductRequest, ProductResponse } from "@/types/products";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Cookies } from "react-cookie";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://win-server.vercel.app/api",
    baseUrl: "http://localhost:5000/api",

    prepareHeaders: (headers) => {
      const token = new Cookies().get("access_token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["products"],

  endpoints: (builder) => ({
    getAllProduct: builder.query<ProductResponse[], any>({
      query: () => ({
        url: "/products",
        method: "GET",
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "products" as const, id })),
              { type: "products", id: "LIST" },
            ]
          : [{ type: "products", id: "LIST" }],
    }),
    createProduct: builder.mutation<ProductResponse, ProductRequest>({
      query: (body) => ({
        url: "/products",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "products", id: "LIST" }],
    }),
    editProduct: builder.mutation<ProductResponse, Partial<ProductRequest>>({
      query: (body) => {
        return {
          url: `/products/${body.id}`,
          method: "PATCH",
          body,
        };
      },
      invalidatesTags: [{ type: "products", id: "LIST" }],
    }),
    deleteProduct: builder.mutation<boolean, number>({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "products", id: "LIST" }],
    }),
    getProduct: builder.query<ProductResponse, number>({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),

      providesTags: [{ type: "products", id: "LIST" }],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllProductQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useGetProductQuery,
  useEditProductMutation,
} = productsApi;
