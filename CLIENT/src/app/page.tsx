import { Home } from "@/components/organisms/Home";
import { IconCompassFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function page() {
  // await new Promise((resolve) => setTimeout(resolve, 500));
  return <Home />;
}

export default page;
