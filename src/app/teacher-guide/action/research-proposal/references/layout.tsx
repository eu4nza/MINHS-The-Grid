import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Action Research Proposal - V. References",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
