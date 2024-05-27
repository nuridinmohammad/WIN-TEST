"use client";

import {
  Avatar,
  Paper,
  SegmentedControl,
  useMantineColorScheme,
} from "@mantine/core";
import Link from "next/link";
import React from "react";

export function Navbar() {
  const { setColorScheme, colorScheme } = useMantineColorScheme();

  return (
    <Paper shadow="md" p="md" className="w-full">
      <div className="flex items-center justify-between sm:px-4 md:px-8 lg:px-16">
        <div className="flex justify-start items-center gap-3">
          <Link href={"/"} className="cursor-pointer">
            Home
          </Link>
          <Link href={"/products"} className="cursor-pointer">
            Products
          </Link>
        </div>
        <div className="flex w-auto gap-3 justify-center items-center">
          <SegmentedControl
            value={colorScheme}
            onChange={(e: any) => setColorScheme(e.toLowerCase())}
            data={[
              { label: "Dark", value: "dark" },
              { label: "Light", value: "light" },
            ]}
          />
          <Link href={"/profile"} className="cursor-pointer">
            <Avatar color="indigo" />
          </Link>
        </div>
      </div>
    </Paper>
  );
}
