import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qualitative Research - I. Abstract",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
