import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Action Research Proposal Template - Action Research Questions",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
