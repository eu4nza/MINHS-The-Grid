import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sample Research for Students",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
