"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { KeyRound, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function LoginComponent() {
  return (
    <form className="space-y-6 ">
      {/* email */}
      <div>
        <Label
          htmlFor="email"
          className="text-black flex gap-2 items-start mb-3 text-base"
        >
          <Mail size={20} /> Email
        </Label>

        <Input
          type="text"
          placeholder="Please type your email"
          className={`bg-transparent py-2.5 px-4 rounded-lg w-full text-black/90`}
        />
      </div>

      {/* password */}
      <div>
        <Label
          htmlFor="password"
          className="text-black flex gap-2 items-start mb-3 text-base"
        >
          <KeyRound size={20} /> Password
        </Label>

        <Input
          type="password"
          placeholder="Please type your password"
          className={`bg-transparent py-2.5 px-4 rounded-lg w-full text-black/90`}
        />
      </div>

      {/* sign in button */}
      <Button
        type="submit"
        className="text-base cursor-pointer bg-black text-white py-2.5 rounded-lg w-full font-bold"
      >
        Login
      </Button>

      {/* underline */}
      <div>
        <div className="border-b border-b-black"></div>
        <div className="capitalize text-right mt-4 font-normal">
          create new accont?{" "}
          <Link
            href={"/signup"}
            className="hover:text-purple-700 hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* sign in with google */}
      <div className="rounded-lg text-center">
        <Button className="flex gap-2 items-start justify-center w-full bg-ghost-white/80 text-charcoal shadow-none hover:bg-ghost-white/60">
          <img src="/Google Icon.svg" alt="google icon" /> Login with google
        </Button>
      </div>
    </form>
  );
}
