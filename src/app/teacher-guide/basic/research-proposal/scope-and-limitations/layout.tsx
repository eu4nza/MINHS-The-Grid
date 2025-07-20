import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Basic Research Proposal - IV. Scope and Limitations",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
