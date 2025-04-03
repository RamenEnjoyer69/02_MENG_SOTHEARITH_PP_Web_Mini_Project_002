import React from "react";
import RegisterComponent from "../_components/register";
import Logo from "@/components/logo";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["700"],
});

export default function SignUpPage() {
  return (
    <main className={`${quicksand.className} w-1/4`}>
      <div className="space-y-10 w-full mx-auto bg-gray-300/10 backdrop-blur-3xl p-12 rounded-3xl border border-gray-500">
        <h1 className="font-bold text-4xl text-center">
          Sign Up to{" "}
          <span>
            List
            <span className="text-transparent bg-gradient-to-r from-purple-500 via-red-400 to-red-300 bg-clip-text">
              ify
            </span>
          </span>
        </h1>
        <RegisterComponent />
      </div>
    </main>
  );
}
