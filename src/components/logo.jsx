import React from "react";
import { Quicksand } from "next/font/google";
import Link from "next/link";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Logo() {
  return (
    <>
      <Link href={"/"} className={`${quicksand.className} text-5xl `}>
        List
        <span className="text-transparent bg-gradient-to-r from-purple-500 via-red-400 to-red-300 bg-clip-text">
          ify
        </span>
      </Link>
    </>
  );
}
