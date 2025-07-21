import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Plan - IV. Environmental Analysis",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
