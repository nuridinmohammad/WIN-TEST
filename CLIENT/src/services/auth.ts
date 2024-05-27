// Need to use the React-specific entry point to import createApi
import {
  CurrentResponse,
  RefreshTokenResponse,
  SigninRequest,
  SigninResponse,
  SignupRequest,
  SignupResponse,
} from "@/types/auth";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "win-server-production.up.railway.app/api",
    // baseUrl: "http://localhost:5000/api",
  }),
  tagTypes: ["auth"],
  endpoints: (builder) => ({
    signup: builder.mutation<SignupResponse, SignupRequest>({
      query: (body) => ({
        url: "/auth/local/signup",
        method: "POST",
        body,
      }),
    }),
    signin: builder.mutation<SigninResponse, SigninRequest>({
      query: (body) => ({
        url: "/auth/local/signin",
        method: "POST",
        body,
      }),
    }),
    logout: builder.mutation<boolean, string>({
      query: (token) => ({
        url: "/auth/logout",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    current: builder.query<CurrentResponse, string>({
      query: (token) => ({
        url: "/auth/local/current",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    refreshToken: builder.mutation<RefreshTokenResponse, string>({
      query: (refresh_token) => ({
        url: "/auth/refresh-token",
        method: "POST",
        headers: {
          Authorization: `Bearer ${refresh_token}`,
        },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useSignupMutation,
  useSigninMutation,
  useLogoutMutation,
  useCurrentQuery,
  useRefreshTokenMutation,
} = authApi;
