import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Completed Action Research Paper - XI. Annexes",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
