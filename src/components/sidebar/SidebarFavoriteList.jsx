import React from "react";
import { MoreHorizontalCircle01Icon } from "hugeicons-react";

const SidebarFavoriteList = () => {
  return (
    <div>
      <ul className="flex flex-col gap-8 mt-4 ">
        <p className="mt-4 text-gray-400 px-4">Your favorite list is empty</p>

        {/* <li className="flex items-center justify-between p-4 rounded-2xl hover:bg-gray-100 cursor-pointer text-lg">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-watermelon-red w-3 h-3 "></div>
            <p>Mobile Design</p>
          </div>

          <MoreHorizontalCircle01Icon />
        </li> */}
      </ul>
    </div>
  );
};

export default SidebarFavoriteList;
