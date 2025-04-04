"use client";
import React from "react";

const StatusSelector = () => {
  const handleStatusChange = async (newStatus) => {
    setSelectedStatus(newStatus);

    const formData = { status: newStatus };

    // await updateTaskAction(taskId, workspaceId, formData);
    console.log(
      "Received formData for status change:",
      taskId,
      workspaceId,
      formData
    );
  };

  return (
    <div>
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
    </div>
  );
};

export default StatusSelector;
