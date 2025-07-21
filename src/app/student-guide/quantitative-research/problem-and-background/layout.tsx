import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Quantitative Research - III. Chapter I: The Problem and Its Background",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
