"use client";

import { productSchema } from "@/schema/products";
import {
  useCreateProductMutation,
  useEditProductMutation,
  useGetProductQuery,
} from "@/services/products";
import { ProductRequest, ProductResponse } from "@/types/products";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, NumberInput, TextInput, Textarea, Title } from "@mantine/core";
import { IconCoin, IconEdit, IconPlus } from "@tabler/icons-react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

export function FormEdit() {
  const {
    control,
    register,
    handleSubmit,
    setValue,

    formState: { errors },
  } = useForm<ProductRequest>({ resolver: zodResolver(productSchema) });
  const router = useRouter();
  const [editProductMutation, { isLoading }] = useEditProductMutation();
  const { id } = useParams();
  const { data: product } = useGetProductQuery(Number(id));
  const [data, setData] = useState<ProductResponse>({
    name: "",
    id: 0,
    description: "",
    price: 0,
  });

  useEffect(() => {
    setData(product!);
    setValue("name", product?.name!);
    setValue("description", product?.description!);
    setValue("price", product?.price!);
  }, [product, setValue]);

  const onSubmit = async (data: ProductRequest) => {
    const finalData = {
      ...data,
      id: Number(id),
    };
    await editProductMutation(finalData)
      .unwrap()
      .then((res) => {
        alert("Data has updated");
        router.back();
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col justify-center items-start gap-8">
      <Title>Edit Product</Title>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full"
      >
        <Controller
          name="name"
          control={control}
          render={({}) => {
            return (
              <>
                <TextInput
                  {...register("name")}
                  value={data?.name}
                  onChange={(e) => {
                    setData({ ...data, name: e.target.value });
                  }}
                  name="name"
                  label="Name"
                  placeholder="Input name product"
                />
                <span className="text-red-400">{errors?.name?.message}</span>
              </>
            );
          }}
        />
        <Controller
          name="description"
          control={control}
          render={({}) => {
            return (
              <>
                <Textarea
                  {...register("description")}
                  value={data?.description}
                  onChange={(e) => {
                    setData({ ...data, description: e.target.value });
                  }}
                  name="description"
                  label="Description"
                  placeholder="Input description product"
                />
                <span className="text-red-400">
                  {errors?.description?.message}
                </span>
              </>
            );
          }}
        />
        <Controller
          name="price"
          control={control}
          render={({ field }) => {
            return (
              <>
                <NumberInput
                  //   {...register("price")}
                  min={0}
                  {...field}
                  name="price"
                  label="Price"
                  value={Number(data?.price)}
                  onChange={(e) => {
                    field.onChange(e);
                    setData({ ...data, price: e as number });
                  }}
                  placeholder="Input price product"
                  mt="md"
                  leftSection={<IconCoin />}
                  rightSectionPointerEvents="none"
                  hideControls
                />
                <span className="text-red-400">{errors?.price?.message}</span>
              </>
            );
          }}
        />

        <Button type="submit" rightSection={<IconEdit />} disabled={isLoading}>
          {isLoading ? "Updating.." : "Update"}
        </Button>
      </form>
    </div>
  );
}
