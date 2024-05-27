"use client";
import { Button, Title } from "@mantine/core";
import { IconPlus, IconShoppingBag } from "@tabler/icons-react";
import React from "react";
import { TableProducts } from "../molecules/TableProducts";
import Link from "next/link";

export default function Products() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div className="flex items-start justify-start gap-4">
          <IconShoppingBag size={35} />
          <Title>Products</Title>
        </div>
        <div className="flex items-center gap-3">
          <Link href={"/products/create"}>
            <Button rightSection={<IconPlus size={16} />}>Create</Button>
          </Link>
        </div>
      </div>
      <div className="flex w-full justify-center items-center gap-3">
        <TableProducts />
      </div>
    </div>
  );
}
