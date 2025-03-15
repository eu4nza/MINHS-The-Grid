// footer.tsx
import { FaFacebook } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="max-w-screen py-2 flex justify-between items-center bg-white shadow-md md:shadow-lg px-6 md:px-32 relative z-10">
      <Link href="/" className="flex flex-row items-center gap-2">
        <Image
          src="/assets/logo/minhs_logo.webp"
          alt="MINHS Logo"
          width={50}
          height={50}
          priority
        />
        <div className="flex flex-col font-bold">
          <p>Munting Ilog Integrated</p>
          <p>National High School</p>
        </div>
      </Link>

      <a
        href="https://web.facebook.com/profile.php?id=100065310557489"
        target="_blank"
      >
        <FaFacebook />
      </a>
    </footer>
  );
}
