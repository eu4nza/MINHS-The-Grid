import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Completed Basic Research Paper - VII. Scope and Limitations",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
