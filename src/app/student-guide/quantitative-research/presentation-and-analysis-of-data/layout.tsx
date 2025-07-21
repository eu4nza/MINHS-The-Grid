import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Quantitative Research - VI. Chapter IV: Presentation and Analysis of Data",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
