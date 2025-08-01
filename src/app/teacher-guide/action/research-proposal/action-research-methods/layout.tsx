import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Action Research Proposal - IV. Action Research Methods",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
