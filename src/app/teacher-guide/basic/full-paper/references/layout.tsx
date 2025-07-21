import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Completed Basic Research Paper - XI. References",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
