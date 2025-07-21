import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quantitative Research - II. Acknowledgement",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
