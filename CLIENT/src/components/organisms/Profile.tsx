"use client";

import { useCurrentQuery, useLogoutMutation } from "@/services/auth";
import { Text, Paper, Title, Avatar } from "@mantine/core";
import { IconGenderMale, IconMail, IconUser } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";

export function Profile() {
  const router = useRouter();
  const [logoutMutation] = useLogoutMutation();
  const [cookies, _, removeCookie] = useCookies([
    "access_token",
    "refresh_token",
  ]);
  const { isLoading, data, status, error } = useCurrentQuery(
    cookies.access_token as string
  );

  return (
    <>
      <div className="flex flex-col gap-6 justify-center items-center w-full">
        <Title>Profile</Title>
        <Avatar size={"xl"} />
        <Paper
          shadow="xs"
          withBorder
          p="xl"
          className="flex flex-col gap-3 w-full"
        >
          <span className="flex items-start gap-3">
            <IconUser />
            <Text>{isLoading ? "Loading" : data?.name}</Text>
          </span>
          <span className="flex items-start gap-3">
            <IconMail />
            <Text>{isLoading ? "Loading" : data?.email}</Text>
          </span>
          <span className="flex items-start gap-3">
            <IconGenderMale />
            <Text>{isLoading ? "Loading" : data?.gender}</Text>
          </span>
        </Paper>
        <Text
          role="button"
          className="text-red-400 font-semibold cursor-pointer"
          onClick={() => {
            removeCookie("access_token");
            removeCookie("refresh_token");
            logoutMutation(cookies as string).then((res) =>
              window.location.replace("/")
            );
          }}
        >
          Logout
        </Text>
      </div>
    </>
  );
}
