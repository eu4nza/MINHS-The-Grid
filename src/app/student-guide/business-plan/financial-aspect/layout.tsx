import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Plan - VIII. Financial Aspect",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
