import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qualitative Research - II. Acknowledgement",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
