"use server";
import { signOut } from "@/auth";

// we will navigate them to login page after they sign out
export const signOutAction = async () => {
  await signOut({ redirectTo: "/login" });
};
