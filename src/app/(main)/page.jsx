import CardComponent from "@/components/card";
import { FavouriteIcon } from "hugeicons-react";
import React from "react";

const page = () => {
  return (
    <div className="h-full">
      <div className="flex items-center justify-between mb-6">
        <p className="font-bold text-3xl">Title here</p>
        <button className="cursor-pointer">
          <FavouriteIcon size={32} fill="#f96666" color="#f96666" />
        </button>
      </div>
      <div className="gap-4 border border-gray-200 rounded-lg grid grid-cols-3 overflow-hidden">
        <div className="flex-col p-4 flex gap-4 border-r border-gray-200">
          <div className="flex items-center justify-between bg-gradient-to-tr from-pink-400 to-red-300 text-white px-5 py-2 rounded-lg text-lg font-bold">
            Not Started
            <span className="w-11 h-11 grid place-items-center bg-white/30 rounded-full">
              3
            </span>
          </div>
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
        <div className="flex-col flex gap-4 border-r border-gray-200 pr-4 py-4">
          <div className="flex items-center justify-between bg-gradient-to-tr from-purple-400 to-[#7fa7ff]  text-white px-5 py-2 rounded-lg text-lg font-bold">
            In Progress
            <span className="w-11 h-11 grid place-items-center bg-white/30 rounded-full">
              1
            </span>
          </div>
          <CardComponent />
        </div>
        <div className="flex-col flex gap-4 border-gray-200 pr-4 py-4">
          <div className="flex items-center justify-between bg-gradient-to-tr from-teal-500 to-[#06d1c3] text-white px-5 py-2 rounded-lg text-lg font-bold">
            Completed
            <span className="w-11 h-11 grid place-items-center bg-white/30 rounded-full">
              1
            </span>
          </div>
          <CardComponent />
        </div>
      </div>
    </div>
  );
};

export default page;
