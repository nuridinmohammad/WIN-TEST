import { Box, Center, Container } from "@mantine/core";

export default function ProductsRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex w-full h-full absolute items-center justify-center">
      <Container size={"sm"} className="w-full">
        {children}
      </Container>
    </section>
  );
}
