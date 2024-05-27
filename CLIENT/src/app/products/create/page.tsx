import { FormCreate } from "@/components/molecules/FormCreate";
import { Title } from "@mantine/core";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col justify-center items-start gap-10 w-full">
      <Title>Create product</Title>
      <FormCreate />
    </div>
  );
}
