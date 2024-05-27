"use client";

import { useMantineColorScheme } from "@mantine/core";
import { IconCompassFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Home() {
  const { colorScheme } = useMantineColorScheme();

  return (
    <div className="flex w-full h-full absolute items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-6">
        {!colorScheme ? (
          <Image src={"/logowhite-1.png"} width={300} height={300} alt="logo" />
        ) : (
          <Image
            src={"/logoblue-1-1-300x76.png"}
            width={300}
            height={300}
            alt="logo"
          />
        )}
        <div className="flex items-center justify-center gap-1 hover:gap-3 transition-all">
          <IconCompassFilled />
          <Link href={"/products"} className="text-blue-400 hover:underline">
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
}
