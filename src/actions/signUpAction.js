"use server";

import { signUpService } from "@/services/signUpService";
import { redirect } from "next/navigation";

export const signUpAction = async (formData) => {
  await signUpService(formData);
  redirect("/");
};
