import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Completed Basic Research Paper - IX. Discussion of Results and Recommendation",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
