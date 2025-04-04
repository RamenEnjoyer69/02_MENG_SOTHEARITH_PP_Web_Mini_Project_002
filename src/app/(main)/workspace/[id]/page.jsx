import CardComponent from "@/components/card";
import TaskForm from "@/components/TaskForm";
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
    <div className="h-screen overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <button className="cursor-pointer">
            <FavouriteIcon size={32} fill="#f96666" color="#f96666" />
          </button>
          <p className="font-bold text-2xl">{workspace.workspaceName}</p>
        </div>

        <TaskForm />
      </div>
      <div className="gap-4 border border-gray-200 rounded-lg grid grid-cols-3 overflow-hidden h-[calc(100vh-169px)] relative">
        {/* Not Started Section */}
        <div className=" border-r border-gray-200 overflow-y-auto">
          <div className="absolute bottom-0 bg-white w-full h-[16px] z-20 grid grid-cols-3 gap-4 ">
            <div className="border-r border-gray-200"></div>
            <div className="border-r border-gray-200"></div>
            <div className=""></div>
          </div>
          <div className="p-4 sticky top-0 z-10 bg-white">
            <div className="flex items-center justify-between bg-gradient-to-tr from-pink-400 to-red-300 text-white px-5 py-2 rounded-lg text-lg font-bold">
              Not Started
              <span className="w-11 h-11 grid place-items-center bg-white/30 rounded-full">
                {notStartedTasks?.length}
              </span>
            </div>
          </div>
          <div className="space-y-4 px-4 pb-4 bg-white">
            {notStartedTasks?.length == 0 ? (
              <div>
                <p className="text-center text-gray-400">
                  No task for now or perhaps you're forgetting something?
                </p>
              </div>
            ) : (
              notStartedTasks?.map((task) => (
                <CardComponent
                  key={task.taskId}
                  taskId={task.taskId}
                  workspaceId={id}
                  name={task.taskTitle}
                  start={task.startDate}
                  end={task.endDate}
                  tag={task.tag}
                  status={task.status}
                  desc={task.taskDetails}
                />
              ))
            )}
          </div>
        </div>

        {/* In Progress Section */}
        <div className="border-r border-gray-200 pr-4 overflow-y-auto">
          <div className="py-4 sticky top-0 z-10 bg-white">
            <div className="flex items-center justify-between bg-gradient-to-tr from-purple-400 to-[#7fa7ff] text-white px-5 py-2 rounded-lg text-lg font-bold">
              In Progress
              <span className="w-11 h-11 grid place-items-center bg-white/30 rounded-full">
                {inProgressTasks?.length}
              </span>
            </div>
          </div>
          <div className="space-y-4 pb-4">
            {inProgressTasks?.length == 0 ? (
              <div>
                <p className="text-center text-gray-400">
                  Nothing is happening right now...are you sure you're not
                  sleeping on anything?
                </p>
              </div>
            ) : (
              inProgressTasks?.map((task) => (
                <CardComponent
                  key={task.taskId}
                  name={task.taskTitle}
                  start={task.startDate}
                  end={task.endDate}
                  tag={task.tag}
                  status={task.status}
                  desc={task.taskDetails}
                />
              ))
            )}
          </div>
        </div>

        {/* Completed Section */}
        <div className=" border-gray-200 pr-4 overflow-y-auto">
          <div className="py-4 sticky top-0 z-10 bg-white">
            <div className="sticky top-0 z-10 flex items-center justify-between bg-gradient-to-tr from-teal-400 to-[#06d1c3] text-white px-5 py-2 rounded-lg text-lg font-bold">
              Completed
              <span className="w-11 h-11 grid place-items-center bg-white/30 rounded-full">
                {completedTasks?.length}
              </span>
            </div>
          </div>
          <div className="space-y-4 pb-4">
            {completedTasks?.length == 0 ? (
              <div>
                <p className="text-center text-gray-400">
                  Nothing is completed yet. But everything takes time, so lift
                  your chin up and keep going!
                </p>
              </div>
            ) : (
              completedTasks?.map((task) => (
                <CardComponent
                  key={task.taskId}
                  name={task.taskTitle}
                  start={task.startDate}
                  end={task.endDate}
                  tag={task.tag}
                  status={task.status}
                  desc={task.taskDetails}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
