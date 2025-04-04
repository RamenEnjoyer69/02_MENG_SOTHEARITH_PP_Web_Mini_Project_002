"use client";
import React from "react";
import { MoreHorizontalCircle01Icon } from "hugeicons-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
const SidebarFavoriteList = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <ScrollArea className="h-[250px]">
      <ul className="flex flex-col mt-4 ">
        {/* <p className="mt-4 text-gray-400 px-4">Your favorite list is empty</p> */}

        <li className="flex items-center justify-between p-4 rounded-2xl hover:bg-gray-100 cursor-pointer text-lg">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-watermelon-red w-3 h-3 "></div>
            <p>Mobile Design</p>
          </div>

          <MoreHorizontalCircle01Icon />
        </li>
        <li className="flex items-center justify-between p-4 rounded-2xl hover:bg-gray-100 cursor-pointer text-lg">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-watermelon-red w-3 h-3 "></div>
            <p>Mobile Design</p>
          </div>

          <MoreHorizontalCircle01Icon />
        </li>
        <li className="flex items-center justify-between p-4 rounded-2xl hover:bg-gray-100 cursor-pointer text-lg">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-watermelon-red w-3 h-3 "></div>
            <p>Mobile Design</p>
          </div>

          <MoreHorizontalCircle01Icon />
        </li>
        <li className="flex items-center justify-between p-4 rounded-2xl hover:bg-gray-100 cursor-pointer text-lg">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-watermelon-red w-3 h-3 "></div>
            <p>Mobile Design</p>
          </div>

          <MoreHorizontalCircle01Icon />
        </li>
        <li className="flex items-center justify-between p-4 rounded-2xl hover:bg-gray-100 cursor-pointer text-lg">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-watermelon-red w-3 h-3 "></div>
            <p>Mobile Design</p>
          </div>

          <MoreHorizontalCircle01Icon />
        </li>
        <li className="flex items-center justify-between p-4 rounded-2xl hover:bg-gray-100 cursor-pointer text-lg">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-watermelon-red w-3 h-3 "></div>
            <p>Mobile Design</p>
          </div>

          <MoreHorizontalCircle01Icon />
        </li>
      </ul>
    </ScrollArea>
  );
};

export default SidebarFavoriteList;
