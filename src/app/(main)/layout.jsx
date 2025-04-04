import { Topbar } from "@/components/Topbar";
import "../globals.css";
import Logo from "@/components/logo";
import { Sidebar } from "@/components/sidebar/Sidebar";

export default function AuthenticationLayout({ children }) {
  return (
    <main className="h-screen w-full font-inter flex">
      <div className="">
        <Sidebar />
      </div>
      <div className="w-full pb-4">
        <Topbar />
        <div className="rounded-3xl h-full border-gray-200 px-4 pt-4">
          {children}
        </div>
      </div>
    </main>
  );
}
