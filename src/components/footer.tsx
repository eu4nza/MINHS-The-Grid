// footer.tsx
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="max-w-screen py-2 flex justify-between items-center shadow-md md:shadow-lg px-6 md:px-32 relative z-10">
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
      <span className="flex flex-row items-center gap-2">
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
