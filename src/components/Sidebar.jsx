"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { SidebarLeftIcon } from "hugeicons-react";
import Link from "next/link";
import Image from "next/image";
import { Menus } from "../../data/menu-items";
import Logo from "./logo";
import { PlusSignSquareIcon } from "hugeicons-react";
import { MoreHorizontalCircle01Icon } from "hugeicons-react";
import { HeartAddIcon } from "hugeicons-react";
import { FavouriteIcon } from "hugeicons-react";

export const Sidebar = () => {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState(pathname);

  return (
    <div className="flex h-full min-h-0 border-r border-gray-200">
      <div
        className={`w-80 bg-white h-full px-5 py-5 relative duration-300 rounded-2xl flex flex-col justify-between`}
      >
        <div className="flex items-center px-3">
          <Logo />
        </div>

        <div className="flex flex-col h-[70%] px-3">
          <div className="mb-8">
            <div className="flex items-center justify-between border-b py-4 border-gray-200">
              <p className="text-xl font-bold">Workspace</p>
              <PlusSignSquareIcon />
            </div>

            <ul className="flex flex-col gap-8 mt-8 text-lg">
              <li className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-purple-600 w-3 h-3 "></div>
                  <p>Mobile Design</p>
                </div>

                <MoreHorizontalCircle01Icon />
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-green-600 w-3 h-3 "></div>
                  <p>Website Design</p>
                </div>

                <MoreHorizontalCircle01Icon />
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-orange-600 w-3 h-3 "></div>
                  <p>Spring Boot</p>
                </div>

                <MoreHorizontalCircle01Icon />
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center justify-between border-b py-4 border-gray-200">
              <p className="text-xl font-bold">Favorite</p>
              <FavouriteIcon />
            </div>

            <ul className="flex flex-col gap-8 mt-8 text-lg list-">
              <li className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-purple-600 w-3 h-3 "></div>
                  <p>Mobile Design</p>
                </div>

                <MoreHorizontalCircle01Icon />
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-green-600 w-3 h-3 "></div>
                  <p>Website Design</p>
                </div>

                <MoreHorizontalCircle01Icon />
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-orange-600 w-3 h-3 "></div>
                  <p>Spring Boot</p>
                </div>

                <MoreHorizontalCircle01Icon />
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="px-3 py-3 hover:bg-gray-100 rounded-2xl flex">
            <img src="/assets/settings-03-Stroke-Rounded.png" alt="" />
            <p className="ml-4 font-bold text-red-400">Logout</p>
          </div>

          {/* <div className="flex gap-3 items-center py-2 cursor-pointer">
            <img
              src="/assets/User.jpg"
              alt=""
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="overflow-hidden">
              <p className="line-clamp-1 text-gray-700">
                Somebody you used to know
              </p>
              <p className="line-clamp-1 text-sm text-gray-500">
                someone@gmail.com
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
