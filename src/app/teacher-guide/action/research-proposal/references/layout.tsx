import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Action Research Proposal - V. References",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
