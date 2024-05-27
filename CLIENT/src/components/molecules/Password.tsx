"use client";

import { useDisclosure } from "@mantine/hooks";
import { PasswordInput, Stack } from "@mantine/core";

export function Password() {
  const [visible, { toggle }] = useDisclosure(false);
  return (
    <Stack>
      <PasswordInput
        label="Password"
        placeholder="Input your password"
        visible={visible}
        onVisibilityChange={toggle}
      />
      <PasswordInput
        label="Confirm password"
        placeholder="Input your confirm password"
        visible={visible}
        onVisibilityChange={toggle}
      />
    </Stack>
  );
}
