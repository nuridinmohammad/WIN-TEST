"use client";

import { useGetProductQuery } from "@/services/products";
import { Paper, Text, Title } from "@mantine/core";
import { useParams } from "next/navigation";
import React from "react";

export function PaperProduct() {
  const { id } = useParams();
  const { isLoading, data } = useGetProductQuery(Number(id));

  return (
    <div className="flex flex-col gap-6 justify-center items-start w-full">
      <Title>Detail product</Title>
      {isLoading ? (
        <>
          <p>Loading..</p>
        </>
      ) : (
        <Paper
          shadow="xs"
          withBorder
          p="xl"
          className="flex flex-col gap-3 w-full"
        >
          <span className="flex items-start gap-3">
            <Text className="font-semibold">Name product : </Text>
            <Text>{data?.name}</Text>
          </span>
          <span className="flex items-start gap-3">
            <Text className="font-semibold">Desc product : </Text>
            <Text>{data?.description}</Text>
          </span>
          <span className="flex items-start gap-3">
            <Text className="font-semibold">Price product : </Text>

            <Text>{data?.price}</Text>
          </span>
        </Paper>
      )}
    </div>
  );
}
