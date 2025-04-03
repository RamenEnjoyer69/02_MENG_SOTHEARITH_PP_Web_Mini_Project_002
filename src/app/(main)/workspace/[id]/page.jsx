import CardComponent from "@/components/card";
import { getAllTasks } from "@/services/taskService";
import { getWorkSpaceById } from "@/services/workspaceService";
import { FavouriteIcon } from "hugeicons-react";
import React from "react";

const page = async ({ params }) => {
  const { id } = await params;
  const tasks = await getAllTasks({ id });
  const workspace = await getWorkSpaceById({ id });

  // categorize them tasks by status
  const notStartedTasks = tasks.filter((task) => task.status === "NOT_STARTED");
  const inProgressTasks = tasks.filter((task) => task.status === "IN_PROGRESS");
  const completedTasks = tasks.filter((task) => task.status === "FINISHED");

  return (
    <div className="h-full">
      <div className="flex items-center justify-between mb-6">
        <p className="font-bold text-3xl">{workspace.workspaceName}</p>
        <button className="cursor-pointer">
          <FavouriteIcon size={32} fill="#f96666" color="#f96666" />
        </button>
      </div>
      <div className="gap-4 border border-gray-200 rounded-lg grid grid-cols-3 overflow-hidden h-[calc(100vh-150px)]">
        {/* Not Started Section */}
        <div className="flex flex-col p-4 gap-4 border-r border-gray-200 overflow-y-auto">
          <div className="sticky top-0 z-10 flex items-center justify-between bg-gradient-to-tr from-pink-400 to-red-300 text-white px-5 py-2 rounded-lg text-lg font-bold">
            Not Started
            <span className="w-11 h-11 grid place-items-center bg-white/30 rounded-full">
              {notStartedTasks?.length}
            </span>
          </div>
          <div className="space-y-4">
            {notStartedTasks?.map((task) => (
              <CardComponent
                key={task.taskId}
                name={task.taskTitle}
                start={task.startDate}
                end={task.endDate}
                tag={task.tag}
                status={task.status}
                desc={task.taskDetails}
              />
            ))}

            <CardComponent
              name={"hliguefues"}
              start={"hliguefues"}
              end={"hliguefues"}
              tag={"hliguefues"}
              status={"hliguefues"}
              desc={"hliguefues"}
            />
            <CardComponent
              name={"hliguefues"}
              start={"hliguefues"}
              end={"hliguefues"}
              tag={"hliguefues"}
              status={"hliguefues"}
              desc={"hliguefues"}
            />
            <CardComponent
              name={"hliguefues"}
              start={"hliguefues"}
              end={"hliguefues"}
              tag={"hliguefues"}
              status={"hliguefues"}
              desc={"hliguefues"}
            />
            <CardComponent
              name={"hliguefues"}
              start={"hliguefues"}
              end={"hliguefues"}
              tag={"hliguefues"}
              status={"hliguefues"}
              desc={"hliguefues"}
            />
          </div>
        </div>

        {/* In Progress Section */}
        <div className="flex flex-col gap-4 border-r border-gray-200 pr-4 py-4 overflow-y-auto">
          <div className="sticky top-0 z-10 flex items-center justify-between bg-gradient-to-tr from-purple-400 to-[#7fa7ff] text-white px-5 py-2 rounded-lg text-lg font-bold">
            In Progress
            <span className="w-11 h-11 grid place-items-center bg-white/30 rounded-full">
              {inProgressTasks?.length}
            </span>
          </div>
          <div className="space-y-4">
            {inProgressTasks?.map((task) => (
              <CardComponent
                key={task.taskId}
                name={task.taskTitle}
                start={task.startDate}
                end={task.endDate}
                tag={task.tag}
                status={task.status}
                desc={task.taskDetails}
              />
            ))}
          </div>
        </div>

        {/* Completed Section */}
        <div className="flex flex-col gap-4 border-gray-200 pr-4 py-4 overflow-y-auto">
          <div className="sticky top-0 z-10 flex items-center justify-between bg-gradient-to-tr from-teal-500 to-[#06d1c3] text-white px-5 py-2 rounded-lg text-lg font-bold">
            Completed
            <span className="w-11 h-11 grid place-items-center bg-white/30 rounded-full">
              {completedTasks?.length}
            </span>
          </div>
          <div className="space-y-4">
            {completedTasks?.map((task) => (
              <CardComponent
                key={task.taskId}
                name={task.taskTitle}
                start={task.startDate}
                end={task.endDate}
                tag={task.tag}
                status={task.status}
                desc={task.taskDetails}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
