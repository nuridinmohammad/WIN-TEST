import Link from "next/link";

export default function NotFound() {
  return (
    <div className="absolute w-full h-full flex flex-col gap-4 justify-center items-center">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="text-blue-400">
        Return Home
      </Link>
    </div>
  );
}
