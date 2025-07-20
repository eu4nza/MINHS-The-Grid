import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Completed Action Research Paper - IV. Context and Rationale",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
