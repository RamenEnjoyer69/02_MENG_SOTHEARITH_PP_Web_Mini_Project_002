"use server";

import { createWorkspace } from "@/services/workspaceService";

export const createWorkspaceAction = async (formData) => {
  try {
    const workspaceData = Object.fromEntries(formData.entries());
    await createWorkspace(workspaceData);
  } catch (error) {
    console.error("Error creating workspace:", error);
    return { error: "Failed to create workspace" };
  }
};
