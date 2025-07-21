import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quantitative Research - VIII. References",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
