import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Basic Research Proposal - I. Action and Rationale",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
