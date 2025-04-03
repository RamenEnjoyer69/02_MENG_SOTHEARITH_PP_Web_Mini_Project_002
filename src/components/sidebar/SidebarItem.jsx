"use client";
import React from "react";
import { MoreHorizontalCircle01Icon } from "hugeicons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import UpdateWorkspaceForm from "./UpdateWorkspaceForm";

const WorkspaceListItem = ({ workspace, randomColor }) => {
  const pathname = usePathname(); // get current path

  // if the current path is "/add-workspace"
  const isAddWorkspacePage = pathname === "/";

  return (
    <li
      className="text-lg flex items-center justify-between cursor-pointer hover:bg-gray-100 p-4 rounded-2xl transition"
      key={workspace.workspaceId}
    >
      <Link
        className="w-full"
        href={
          isAddWorkspacePage
            ? `workspace/${workspace.workspaceId}`
            : `${workspace.workspaceId}`
        }
      >
        <div className="flex items-center gap-4 w-full">
          <div
            className="rounded-full w-3 h-3"
            style={{ backgroundColor: randomColor }}
          ></div>
          <p>{workspace.workspaceName}</p>
        </div>
      </Link>

      <UpdateWorkspaceForm />
    </li>
  );
};

export default WorkspaceListItem;
