import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Plan - I. Executive Summary",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
