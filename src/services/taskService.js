import headerToken from "@/lib/headerToken";
import { Tag } from "lucide-react";
import { revalidateTag } from "next/cache";

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

export const createTask = async ({ id, formData }) => {
  const headers = await headerToken();

  const response = await fetch(`${BASE_URL}/task/workspace/${id}`, {
    method: "POST",
    headers,
    body: JSON.stringify(formData),
    next: {
      tags: ["task"],
    },
  });

  const result = await response.json();
  console.log("Task Created:", result);
  console.log("FormData:", JSON.stringify(formData));

  revalidateTag("task");
};
