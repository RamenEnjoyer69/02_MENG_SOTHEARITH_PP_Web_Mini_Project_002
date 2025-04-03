"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusSignSquareIcon } from "hugeicons-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { updateWorkspaceAction } from "@/actions/updateWorkspaceAction";
import { MoreHorizontalCircle01Icon } from "hugeicons-react";
import { useFormState } from "react-dom";
import { usePathname } from "next/navigation";
import { useState } from "react";

const UpdateWorkspaceForm = () => {
  const pathname = usePathname(); // Get the current path
  const workspaceId = pathname.split("/").pop();
  const [workspaceName, setWorkspaceName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form behavior

    const formData = new FormData();
    formData.append("workspaceName", workspaceName);

    await updateWorkspaceAction(formData, workspaceId);
  };

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <MoreHorizontalCircle01Icon />
        </PopoverTrigger>
        <PopoverContent className="w-80 bg-white rounded-lg shadow-xl border-gray-300">
          <form onSubmit={handleSubmit} className="space-y-5 relative">
            <Label className="text-lg">Update Workspace</Label>
            <Input
              type="text"
              name="workspaceName"
              placeholder="Please type your workspace name"
              onChange={(e) => setWorkspaceName(e.target.value)}
            />
            <Input
              type="submit"
              className="border-persian-green text-persian-green cursor-pointer hover:bg-persian-green hover:text-white font-bold"
            />
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default UpdateWorkspaceForm;
