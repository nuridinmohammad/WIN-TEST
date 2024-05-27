"use client";

import React from "react";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { SigninRequest } from "@/types/auth";
import { useSigninMutation } from "@/services/auth";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
import { signinRequestSchema } from "@/schema/auth";
import { zodResolver } from "@hookform/resolvers/zod";

export function FormSignin() {
  const [signinMutation, { error, isLoading }] = useSigninMutation();
  const router = useRouter();
  const [_, setCookie] = useCookies();

  const onSubmit: SubmitHandler<SigninRequest> = async (data) => {
    await signinMutation(data)
      .unwrap()
      .then((res) => {
        setCookie("access_token", res.access_token);
        setCookie("refresh_token", res.refresh_token);
        window.location.replace("/products");
      });
  };

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninRequest>({ resolver: zodResolver(signinRequestSchema) });

  return (
    <>
      {error &&
      "data" in error &&
      error.data &&
      typeof error.data === "object" &&
      "message" in error.data ? (
        <span className="text-red-400">{error?.data.message as string}</span>
      ) : null}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Controller
          name="email"
          control={control}
          render={({ field, formState }) => {
            return (
              <>
                <TextInput
                  {...register("email")}
                  label="Email"
                  type="email"
                  placeholder="Input your email"
                />

                <span className="text-red-400">{errors?.email?.message}</span>
              </>
            );
          }}
        />
        <Controller
          name="password"
          control={control}
          render={({ field, formState }) => {
            return (
              <>
                <PasswordInput
                  type="password"
                  label="Password"
                  placeholder="Input your password"
                  {...register("password")}
                />

                <span className="text-red-400">
                  {errors?.password?.message}
                </span>
              </>
            );
          }}
        />
        <Button variant="filled" disabled={isLoading} type="submit">
          {isLoading ? "Loading" : "Sign in"}
        </Button>
      </form>
    </>
  );
}
