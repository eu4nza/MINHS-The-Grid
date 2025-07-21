import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Completed Action Research Paper - VI. Proposed Innovation, Intervention, and Strategy",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
