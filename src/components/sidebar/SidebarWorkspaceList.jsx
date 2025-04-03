import React from "react";
import { getAllWorkspaces } from "@/services/workspaceService";
import WorkspaceListItem from "./SidebarItem";

// Utility function to generate a random color in hexadecimal format
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const SidebarWorkspaceList = async () => {
  const workspaces = await getAllWorkspaces();
  // const workspaces = [];

  console.log(workspaces);
  return (
    <div>
      <ul className="gap-8 mt-4">
        {workspaces.length === 0 ? (
          <p className="mt-4 text-gray-400 px-4">No workspace found</p>
        ) : (
          workspaces.map((workspace) => {
            const randomColor = getRandomColor(); // Generate a random color for each workspace
            return (
              <WorkspaceListItem
                workspace={workspace}
                randomColor={randomColor}
                key={workspace.workspaceId}
              />
            );
          })
        )}
      </ul>
    </div>
  );
};

export default SidebarWorkspaceList;
