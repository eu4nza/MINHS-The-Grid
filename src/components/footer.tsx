// footer.tsx
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="max-w-screen py-2 flex justify-between items-center px-8 md:px-24 relative">
      <Link href="/" className="flex flex-row items-center gap-2">
        <Image
          src="/assets/logo/minhs_logo.webp"
          alt="MINHS Logo"
          width={50}
          height={50}
          className="w-8 h-8 md:w-12 md:h-12"
          priority
        />
        <div className="flex flex-col font-bold">
          <p className="text-xs md:text-base">Munting Ilog Integrated</p>
          <p className="text-xs md:text-base">National High School</p>
        </div>
      </Link>

      <span className="flex flex-row items-center gap-2 text-xs md:text-base">
        Visit us on:
        <a
          href="https://web.facebook.com/profile.php?id=100065310557489"
          target="_blank"
        >
          <Image
            src="/assets/media/Facebook_Logo_Primary.png"
            alt="Facebook Logo"
            width={20}
            height={20}
          />
        </a>
      </span>
    </footer>
  );
}
