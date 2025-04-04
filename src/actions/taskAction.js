"use server";
import { createTask } from "@/services/taskService";

export const createTaskAction = async (id, formData) => {
  const taskData = Object.fromEntries(formData.entries());
  console.log("Received formData:", taskData);

  await createTask({ id, formData: taskData });
};

export const updateTaskStatusAction = async (taskId, workspaceId, formData) => {
  // const taskData = Object.fromEntries(formData.entries());
  console.log("Received formData:", formData);
  console.log("TaskID:", taskId);
  console.log("Workspace ID:", workspaceId);
  // await updateTask({ taskId, workspaceId, formData });
};
