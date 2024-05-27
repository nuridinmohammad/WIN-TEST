import React from "react";
import dynamic from "next/dynamic";

const SigninWithDynamic = dynamic(
  () => import("../../../components/organisms/Signin"),
  { ssr: false }
);

export default async function page() {
  //   await new Promise((resolve) => setTimeout(resolve, 3000));
  //   throw new Error("Error");
  return (
    <>
      <SigninWithDynamic />
    </>
  );
}
