"use client";

import { Title } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { FormSignup } from "../molecules/FormSignup";

function Signup() {
  return (
    <div className="flex flex-col gap-6">
      <Title>Sign up</Title>
      <FormSignup />
      <span>
        Have you an account yet?{" "}
        <Link href={"/signin"} className="text-slate-400">
          Sign in.
        </Link>
      </span>
    </div>
  );
}

export default Signup;
