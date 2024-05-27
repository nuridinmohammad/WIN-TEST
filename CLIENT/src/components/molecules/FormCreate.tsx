"use client";

import { productSchema } from "@/schema/products";
import { useCreateProductMutation } from "@/services/products";
import { ProductRequest } from "@/types/products";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, NumberInput, TextInput, Textarea } from "@mantine/core";
import { IconCoin, IconPlus } from "@tabler/icons-react";
import React from "react";
import { Controller, useForm } from "react-hook-form";

export function FormCreate() {
  const {
    control,
    register,
    handleSubmit,
    reset,
    resetField,
    formState: { errors },
  } = useForm<ProductRequest>({ resolver: zodResolver(productSchema) });
  const [createProductMutation, { isLoading }] = useCreateProductMutation();
  const onSubmit = async (data: ProductRequest) => {
    await createProductMutation(data)
      .unwrap()
      .then((res) => {
        alert("Data has created");
        reset();
        resetField("price");
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  return (
    <>
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
                  value={Number(field.value)}
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

        <Button type="submit" rightSection={<IconPlus />} disabled={isLoading}>
          {isLoading ? "Creating.." : "Create"}
        </Button>
      </form>
    </>
  );
}
