import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Qualitative Research - IV. Chapter II: Review of Related Literature and Studies",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
