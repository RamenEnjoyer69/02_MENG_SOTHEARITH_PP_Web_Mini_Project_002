"use server";

import { updateWorkspace } from "@/services/workspaceService";

export const updateWorkspaceAction = async (formData, id) => {
  await updateWorkspace(id, workspaceData);
};
