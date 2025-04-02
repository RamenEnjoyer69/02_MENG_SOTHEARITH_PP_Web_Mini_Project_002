import { Topbar } from "@/components/Topbar";
import "../globals.css";
import Logo from "@/components/logo";
import { Sidebar } from "@/components/Sidebar";

export default function AuthenticationLayout({ children }) {
  return (
    <main className="h-screen overflow-hidden w-full font-inter flex">
      <div className="">
        <Sidebar />
      </div>
      <div className="w-full flex flex-col pb-4">
        <div className="">
          <Topbar />
        </div>
        <div className="rounded-3xl h-full border-gray-200 px-4 pt-6 ">
          {children}
        </div>
      </div>
    </main>
  );
}
