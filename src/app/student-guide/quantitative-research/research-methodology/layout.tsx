import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quantitative Research - V. Chapter III: Research Methodology",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
