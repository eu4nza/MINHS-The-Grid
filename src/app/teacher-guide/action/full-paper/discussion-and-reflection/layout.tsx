import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Completed Action Research Paper - VIII. Discussion of Results and Reflection",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
