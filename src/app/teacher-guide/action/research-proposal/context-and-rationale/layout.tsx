import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Action Research Proposal - I. Context and Rationale",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
