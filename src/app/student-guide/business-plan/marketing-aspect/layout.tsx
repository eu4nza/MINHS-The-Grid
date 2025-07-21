import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Plan - V. Marketing Aspect",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
