import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-start">
      <h1 className="mt-32 text-3xl font-bold">Uh Oh</h1>
      <p className="text-lg font-semibold">Something went wrong!</p>
      <Link href="/interview">Go back to interviews</Link>
    </div>
  );
}
