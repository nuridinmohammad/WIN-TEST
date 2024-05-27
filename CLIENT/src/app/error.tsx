"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="absolute w-full h-full flex flex-col gap-4 justify-center items-center">
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()} className="text-blue-400">
        Try again
      </button>
    </div>
  );
}
