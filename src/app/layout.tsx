import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const aileronRegular = localFont({
  src: "./fonts/Aileron-Regular.woff",
  variable: "--font-aileron-regular",
  weight: "100 900",
});

const aileronBold = localFont({
  src: "./fonts/Aileron-Bold.woff",
  variable: "--font-aileron-bold",
  weight: "700 900", // Adjust based on actual font weight range
});

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "MINHS The Grid",
    template: "%s | MINHS The Grid",
  },
  description:
    "Guidelines for Research Instruction and Design for Munting Ilog Integrated National High School (MINHS).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${aileronRegular.variable} ${aileronBold.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
