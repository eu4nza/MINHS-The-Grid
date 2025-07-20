// footer.tsx
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-2 flex justify-between items-center inset-shadow-sm px-8 lg:px-24">
      <Link href="/" className="flex flex-row items-center gap-2">
        <Image
          src="/assets/logo/minhs_logo.webp"
          alt="MINHS Logo"
          width={50}
          height={50}
          className="w-8 h-8 lg:w-12 lg:h-12"
          priority
        />
        <div className="flex flex-col font-bold">
          <p className="text-xs lg:text-base">Munting Ilog Integrated</p>
          <p className="text-xs lg:text-base">National High School</p>
        </div>
      </Link>

      <span className="flex flex-row items-center gap-2 text-xs lg:text-base">
        Visit us on:
        <a
          href="https://www.facebook.com/profile.php?id=100065310557489"
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
