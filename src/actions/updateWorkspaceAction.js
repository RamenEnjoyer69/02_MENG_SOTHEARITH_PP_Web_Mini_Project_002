"use server";

import { updateWorkspace } from "@/services/workspaceService";

export const updateWorkspaceAction = async (formData, id) => {
  console.log("Here:", formData, id);
  await updateWorkspace(id, workspaceData);
};
