"use client";

import { useGetAllProductQuery } from "@/services/products";
import { Table } from "@mantine/core";
import React, { Suspense } from "react";
import { ListProduct } from "./ListProduct";

export function TableProducts() {
  const { isLoading, data } = useGetAllProductQuery<Record<string, any>>("");
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>ID</Table.Th>
          <Table.Th>Name</Table.Th>
          <Table.Th>Description</Table.Th>
          <Table.Th>Price</Table.Th>
          <Table.Th>Action</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {isLoading ? (
          <Table.Tr>
            <Table.Td colSpan={5}>Loading..</Table.Td>
          </Table.Tr>
        ) : (
          <Suspense fallback={null}>
            <ListProduct products={data} />
          </Suspense>
        )}
      </Table.Tbody>
    </Table>
  );
}
