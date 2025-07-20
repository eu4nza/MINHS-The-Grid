import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Completed Action Research Paper - VII. Action Research Methods",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
