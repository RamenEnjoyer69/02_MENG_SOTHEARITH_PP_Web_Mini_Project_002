import "../globals.css";
import Logo from "@/components/logo";
import Gradient from "./_components/gradient";

export default function AuthenticationLayout({ children }) {
  return (
    <main className="w-full h-screen">
      <Gradient>{children}</Gradient>
    </main>
  );
}
