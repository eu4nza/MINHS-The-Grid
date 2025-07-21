import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Basic Research Proposal - VII. Annexes",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
