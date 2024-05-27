import { signupRequestSchema } from "@/schema/auth";
import { useSignupMutation } from "@/services/auth";
import { SignupRequest } from "@/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, PasswordInput, Select, Stack, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/navigation";
import React from "react";
import { useCookies } from "react-cookie";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

export function FormSignup() {
  const [visible, { toggle }] = useDisclosure(false);
  const [signupMutation, { isLoading, isSuccess, error }] = useSignupMutation();
  const [_, setCookie] = useCookies();

  const onSubmit: SubmitHandler<SignupRequest> = async (data) => {
    await signupMutation(data)
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
  } = useForm<SignupRequest>({ resolver: zodResolver(signupRequestSchema) });

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
          name="name"
          control={control}
          render={({ field, formState }) => {
            return (
              <>
                <TextInput
                  {...register("name")}
                  label="Name"
                  type="text"
                  placeholder="Input your name"
                />
                <span className="text-red-400">{errors?.name?.message}</span>
              </>
            );
          }}
        />
        <Controller
          name="gender"
          control={control}
          render={({ field }) => {
            return (
              <>
                <Select
                  {...register("gender")}
                  label="Gender"
                  placeholder="Choice your gender"
                  data={["PRIA", "PEREMPUAN"]}
                  clearable
                  {...field}
                />
                <span className="text-red-400">{errors?.gender?.message}</span>
              </>
            );
          }}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => {
            return (
              <>
                <TextInput
                  {...register("email")}
                  name="email"
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
          render={({ field }) => {
            return (
              <>
                <PasswordInput
                  {...register("password")}
                  {...field}
                  label="Password"
                  placeholder="Input your password"
                  visible={visible}
                  onVisibilityChange={toggle}
                />
                <span className="text-red-400">
                  {errors?.password?.message}
                </span>
              </>
            );
          }}
        />
        <Button variant="filled" type="submit" disabled={isLoading}>
          {isLoading ? "Loading" : "Sign up"}
        </Button>
      </form>
    </>
  );
}
