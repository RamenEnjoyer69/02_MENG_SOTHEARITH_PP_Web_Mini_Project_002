import headerToken from "@/lib/headerToken";
import { Tag } from "lucide-react";

const BASE_URL = process.env.NEXT_PUBLIC_AUTH_BASE_URL;

export const getAllTasks = async ({ id }) => {
  const headers = await headerToken();

  const response = await fetch(`${BASE_URL}/tasks/workspace/${id}`, {
    headers,
    next: {
      tags: "task",
    },
  });

  const tasks = await response.json();

  return tasks.payload;
};
