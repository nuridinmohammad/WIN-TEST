"use client";

import { Alert, Title } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { FormSignin } from "../molecules/FormSignin";
import jwt, { JwtPayload } from "jsonwebtoken";
import { useCookies } from "react-cookie";
import { IconInfoCircle } from "@tabler/icons-react";

function Signin() {
  const [cookie] = useCookies(["access_token", "refresh_token"]);
  const decoded = jwt.decode(cookie.access_token) as JwtPayload;
  const isExpired = decoded?.exp! < Math.floor(Date.now() / 1000);

  return (
    <div className="flex flex-col gap-6">
      {isExpired ? (
        <Alert
          variant="light"
          color="orange"
          title="Token Expired"
          icon={<IconInfoCircle />}
        >
          Please login again.
        </Alert>
      ) : (
        ""
      )}
      <Title>Sign in</Title>
      <FormSignin />
      <span>
        {`Don't`} have an account yet?{" "}
        <Link href={"/signup"} className="text-slate-400">
          Sign up.
        </Link>
      </span>
    </div>
  );
}

export default Signin;
