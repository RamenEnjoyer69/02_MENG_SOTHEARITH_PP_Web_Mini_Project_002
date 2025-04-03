"use server";

import { updateWorkspace } from "@/services/workspaceService";

export const updateWorkspaceAction = async (formData, id) => {
  const workspaceData = Object.fromEntries(formData.entries());

  //   console.log("Here:", workspaceData, id);
  await updateWorkspace(id, workspaceData);
};
