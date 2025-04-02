import React from "react";
import UserProfile from "./UserProfile";
import { ArrowRight01Icon } from "hugeicons-react";

export const Topbar = () => {
  return (
    <div className="w-full bg-white px-8 flex items-center justify-between py-2 border-b border-gray-200">
      <div className="flex items-center">
        <div className=" flex text-lg">
          <p className="">Homepage</p>
          <span className="mx-3 ">
            {" "}
            <ArrowRight01Icon />{" "}
          </span>
          <p className="text-red-400">Home</p>
        </div>
      </div>
      <div className="flex items-center">
        <UserProfile />
      </div>
    </div>
  );
};
