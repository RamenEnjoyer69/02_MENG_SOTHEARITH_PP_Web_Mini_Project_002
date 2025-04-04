import headerToken from "@/lib/headerToken";
import { Tag } from "lucide-react";
import { revalidateTag } from "next/cache";

const BASE_URL = process.env.NEXT_PUBLIC_AUTH_BASE_URL;

export const getAllWorkspaces = async () => {
  const headers = await headerToken();

  const response = await fetch(`${BASE_URL}/workspaces`, {
    headers,
    next: {
      tags: "workspace",
    },
  });

  const workspaces = await response.json();

  return workspaces.payload;
};

export const getWorkSpaceById = async ({ id }) => {
  const headers = await headerToken();
  const response = await fetch(`${BASE_URL}/workspace/${id}`, {
    headers,
    next: {
      tags: "workspace",
    },
  });

  const workspace = await response.json();
  return workspace.payload;
};

export const createWorkspace = async (formData) => {
  const headers = await headerToken();

  // console.log("Headers:", headers);
  // console.log("FormData:", formData);

  const response = await fetch(`${BASE_URL}/workspace`, {
    method: "POST",
    headers,
    body: JSON.stringify(formData),
  });

  // console.log("Response: ", response);

  // if (!response.ok) {
  //   console.error("Error:", response.status, response.statusText);
  // }

  revalidateTag("workspace");
};

export const updateWorkspace = async ({ id, formData }) => {
  const headers = await headerToken();
  const response = await fetch(`${BASE_URL}/workspace/${id}`, {
    method: "PUT",
    headers,
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error("Failed to update workspace");
  }

  revalidateTag("workspace");
};
