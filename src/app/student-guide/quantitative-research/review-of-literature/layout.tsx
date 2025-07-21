import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Quantitative Research - IV. Chapter II: Review of Related Literature and Studies",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
