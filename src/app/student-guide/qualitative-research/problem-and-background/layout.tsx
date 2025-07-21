import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Qualitative Research - III. Chapter I: The Problem and Its Background",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
