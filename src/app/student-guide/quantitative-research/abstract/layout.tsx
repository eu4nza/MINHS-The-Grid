import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quantitative Research - I. Abstract",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
