import { useDeleteProductMutation } from "@/services/products";
import { ProductResponse } from "@/types/products";
import { Alert, Table, Tooltip } from "@mantine/core";
import { IconEdit, IconEye, IconTrash } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

export function ListProduct({ products }: { products: ProductResponse[] }) {
  const [deleteProductMutation] = useDeleteProductMutation();

  const deleteProduct = async (id: number) => {
    await deleteProductMutation(Number(id))
      .unwrap()
      .then((res) => {
        alert("Successfully delete data");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {products?.map((element, i) => (
        <Table.Tr key={i}>
          <Table.Td>{element.id}</Table.Td>
          <Table.Td>{element?.name}</Table.Td>
          <Table.Td>{element?.description}</Table.Td>
          <Table.Td>{element?.price}</Table.Td>
          <Table.Td className="flex justify-start items-center gap-2">
            <Tooltip
              arrowOffset={10}
              arrowSize={4}
              label="Edit"
              withArrow
              position="top"
            >
              <Link href={`products/${element.id}/edit`}>
                <IconEdit size={16} role="button" />
              </Link>
            </Tooltip>
            <Tooltip
              arrowOffset={10}
              arrowSize={4}
              label="Read"
              withArrow
              position="top"
            >
              <Link href={`products/detail/${element.id}`}>
                <IconEye size={16} role="button" />
              </Link>
            </Tooltip>
            <Tooltip
              arrowOffset={10}
              arrowSize={4}
              label="Delete"
              withArrow
              position="top"
            >
              <IconTrash
                size={16}
                role="button"
                onClick={() => deleteProduct(element.id)}
              />
            </Tooltip>
          </Table.Td>
        </Table.Tr>
      ))}
    </>
  );
}
