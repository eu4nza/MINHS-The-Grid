import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 Not Found",
};

export default function NotFound() {
  return (
    <main
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/background/variant1_bg.webp')" }}
    >
      {/* Background overlay with opacity */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content wrapper */}
      <div className="relative flex flex-col gap-2 justify-center items-center h-screen w-full text-white">
        <span className="text-center font-bold text-8xl">404</span>
        <span className="text-center font-bold text-4xl"> Not Found</span>
        <Link href="/">
          <u className="text-2xl">Go to home page</u>
        </Link>
      </div>
    </main>
  );
}
