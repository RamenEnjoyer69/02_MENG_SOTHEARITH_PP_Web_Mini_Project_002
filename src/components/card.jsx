"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, Ellipsis } from "lucide-react";
import React from "react";
import { MoreHorizontalCircle01Icon } from "hugeicons-react";
import { useState } from "react";
import { updateTaskStatusAction } from "@/actions/taskAction";

export default function CardComponent({
  taskId,
  workspaceId,
  name,
  desc,
  status,
  start,
  tag,
  end,
}) {
  const [selectedStatus, setSelectedStatus] = useState(status);
  const trimmedDate = end.split("T")[0];
  const getStatusColor = (status) => {
    const statusColors = {
      NOT_STARTED:
        "bg-watermelon-red border-watermelon-red text-watermelon-red",
      IN_PROGRESS: "bg-royal-blue border-royal-blue text-royal-blue",
      FINISHED:
        "bg-persian-green border-persian-green text-green-persian-green",
    };
    return statusColors[status] || "bg-gray-300 border-gray-300 text-gray-300"; // fallback color
  };

  const handleStatusChange = async (newStatus) => {
    setSelectedStatus(newStatus);

    const formData = { status: newStatus };

    await updateTaskStatusAction(taskId, workspaceId, formData);
  };

  return (
    <div className="border border-gray-300 rounded-xl">
      <div className="p-5">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold capitalize">{name}</h2>
          <MoreHorizontalCircle01Icon />
        </div>

        {/* task detials */}
        <p className="line-clamp-2 text-light-steel-blue my-2 h-12">{desc}</p>

        <div className="flex justify-between items-center mt-4">
          {/* tag */}
          <p className="bg-purple-100 text-purple-500 py-1.5 px-3 rounded-lg">
            {tag}
          </p>
          {/* status */}
          <div
            className={`rounded-full w-8 h-8 ${getStatusColor(status)}`}
          ></div>
        </div>
      </div>

      {/* progress */}
      <div className="flex justify-between items-center border-t border-t-gray-300 p-5">
        <Select value={selectedStatus} onValueChange={handleStatusChange}>
          <SelectTrigger
            className={`${getStatusColor(status).split(" ")[1]} ${
              getStatusColor(status).split(" ")[2]
            }`}
          >
            <SelectValue placeholder={status} />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="NOT_STARTED">NOT_STARTED</SelectItem>
            <SelectItem value="IN_PROGRESS">IN_PROGRESS</SelectItem>
            <SelectItem value="FINISHED">FINISHED</SelectItem>
          </SelectContent>
        </Select>

        {/* date */}
        <p className="flex gap-3 text-light-steel-blue">
          <Clock size={22} /> {trimmedDate}
        </p>
      </div>
    </div>
  );
}
