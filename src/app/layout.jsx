import "./globals.css";
import Logo from "@/components/logo";

export const metadata = {
  title: {
    template: "%s | RamenEnjoyer",
    default: "Listify | RamenEnjoyer",
  },
  description: "Homework 006 - Next.js",
};

export default function AuthenticationLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-charcoal overflow-hidden">{children}</body>
    </html>
  );
}
