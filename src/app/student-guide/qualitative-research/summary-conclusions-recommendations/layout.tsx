import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Qualitative Research - VII. Chapter V: Summary, Conclusions, and Recommendations",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
