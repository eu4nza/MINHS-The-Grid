import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Qualitative Research - VI. Chapter IV: Presentation and Analysis of Data",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
