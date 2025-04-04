"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Plus } from "lucide-react";
import { createTaskAction } from "@/actions/createTaskAction";
import { usePathname } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CreateTaskPopup() {
  const pathname = usePathname();
  const id = pathname.split("/").pop();
  const [endDate, setEndDate] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form submission

    const formData = new FormData(event.target);

    // Add the endDate to the formData manually
    if (endDate) {
      formData.append("endDate", endDate.toISOString());
    }

    await createTaskAction(id, formData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className=" p-[2px] rounded-[10px] bg-gradient-to-r from-purple-500 via-red-400 to-red-300">
          <div className="h-[38px] w-[165px] rounded-lg bg-white flex items-center justify-center">
            <Button
              variant="iris"
              className="px-6 py-3 rounded-lg border-2 font-bold flex items-center gap-2"
            >
              <Plus color="purple" />
              Add New Task
            </Button>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-md bg-white p-6 rounded-xl shadow-lg border border-gray-200 backdrop-blur-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-800">
            Create New Task
          </DialogTitle>
        </DialogHeader>

        <form className="space-y-4 flex flex-col " onSubmit={handleSubmit}>
          {/* Title Input */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700  mb-3">
              Title
            </label>
            <Input
              placeholder="Enter your task title"
              name="taskTitle"
              className="border-gray-300 focus:ring-2 focus:ring-blue-500 rounded-lg"
            />
          </div>

          {/* Tag Input */}
          <div className="flex flex-col w-full">
            <label className="text-sm font-semibold text-gray-700 mb-3">
              Tag
            </label>

            <Select
              name="tag"
              className="border-gray-300 focus:ring-2 focus:ring-blue-500 rounded-lg w-full"
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a tag" />
              </SelectTrigger>
              <SelectContent className={"bg-white"}>
                <SelectGroup>
                  <SelectLabel>Tags</SelectLabel>
                  <SelectItem value="DESIGN">Design</SelectItem>
                  <SelectItem value="HOMEWORK">Homework</SelectItem>
                  <SelectItem value="ASSIGNMENT">Assignment</SelectItem>
                  <SelectItem value="DEPLOYMENT">Deployment</SelectItem>
                  <SelectItem value="GIT">Git</SelectItem>
                  <SelectItem value="DATABASE">Database</SelectItem>
                  <SelectItem value="MINI_PROJECT">Mini Project</SelectItem>
                  <SelectItem value="DOCUMENTATION">Documentation</SelectItem>
                  <SelectItem value="FEATURE">Feature</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* End Date Picker */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700 mb-3">
              End Date
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start border-gray-300 bg-white rounded-lg hover:bg-gray-50 transition-all"
                >
                  {endDate ? endDate.toDateString() : "Pick a date"}
                  <CalendarIcon className="ml-auto h-5 w-5 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                align="start"
                className="p-0 bg-white shadow-lg rounded-lg"
              >
                <Calendar
                  mode="single"
                  selected={endDate}
                  onSelect={setEndDate}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Details Input */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700 mb-3">
              Details
            </label>
            <Input
              type="text"
              name="taskDetails"
              placeholder="Provide some details about your task (optional)"
              className="border-gray-300 focus:ring-2 focus:ring-blue-500 rounded-lg"
            />
          </div>

          <Button
            type="submit"
            className="w-[25%] mt-6 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all "
          >
            Create Task
          </Button>
        </form>

        {/* Create Button */}
      </DialogContent>
    </Dialog>
  );
}
