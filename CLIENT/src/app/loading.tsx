import { Loader } from "@mantine/core";

export default function Loading() {
  return (
    <Loader
      color="blue"
      className="absolute w-full h-full flex justify-center items-center"
    />
  );
}
