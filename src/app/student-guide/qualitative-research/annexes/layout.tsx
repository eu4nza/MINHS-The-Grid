import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qualitative Research - IX. Annexes",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
