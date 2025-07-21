import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Completed Action Research Paper - IX. Action Plan",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
