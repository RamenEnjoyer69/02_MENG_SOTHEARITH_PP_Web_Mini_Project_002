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
import { createWorkspaceAction } from "@/actions/createWorkspaceAction";

const WorkspaceForm = () => {
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <PlusSignSquareIcon />
        </PopoverTrigger>
        <PopoverContent className="w-80 bg-white rounded-lg shadow-xl border-gray-300">
          <form action={createWorkspaceAction} className="space-y-5 relative">
            <Label className="text-lg">Create New Workspace</Label>
            <Input
              type="text"
              name="workspaceName"
              placeholder="Please type your workspace name"
            />
            <Input
              type="submit"
              className="border-purple-600 text-purple-600 cursor-pointer hover:bg-purple-600 hover:text-white font-bold"
            />
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default WorkspaceForm;
