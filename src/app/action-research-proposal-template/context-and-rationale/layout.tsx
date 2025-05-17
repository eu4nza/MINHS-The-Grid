import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Action Research Proposal Template - Context and Rationale",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
