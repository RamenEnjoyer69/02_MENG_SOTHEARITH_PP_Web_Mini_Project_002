"use server";
import { createTask } from "@/services/taskService";

export const createTaskAction = async (id, formData) => {
  const taskData = Object.fromEntries(formData.entries());
  console.log("Received formData:", taskData);

  await createTask({ id, formData: taskData });
};
