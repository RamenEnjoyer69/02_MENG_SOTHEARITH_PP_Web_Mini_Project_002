"use server";
import { auth } from "@/auth";

export const getUserAction = async () => {
  const user = (await auth()).user;

  return user;
};
