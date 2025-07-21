import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Qualitative Research - VII. Chapter V: Summary, Conclusions, and Recommendations",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
