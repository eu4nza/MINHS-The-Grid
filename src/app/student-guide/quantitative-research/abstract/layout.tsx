import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quantitative Research - I. Abstract",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
