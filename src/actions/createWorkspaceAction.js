"use server";

import { createWorkspace } from "@/services/workspaceService";

export const createWorkspaceAction = async (formData) => {
  const workspaceData = Object.fromEntries(formData.entries());
  await createWorkspace(workspaceData);
};
