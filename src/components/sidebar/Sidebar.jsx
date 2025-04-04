import Logo from "../logo";
import { FavouriteIcon } from "hugeicons-react";
import { LogOutIcon } from "lucide-react";
import { signOutAction } from "@/actions/signOutAction";
import SidebarWorkspaceList from "./SidebarWorkspaceList";
import SidebarFavoriteList from "./SidebarFavoriteList";

import WorkspaceForm from "./WorkspaceForm";

export const Sidebar = () => {
  return (
    <div className="flex h-full min-h-0 border-r border-gray-200">
      <div
        className={`w-80 bg-white h-full px- py-5 relative duration-300 rounded-2xl flex flex-col justify-between`}
      >
        <div className="flex items-center px-8">
          <Logo />
        </div>

        <div className="flex flex-col h-[70%] px-4">
          <div className="mb-4">
            <div className="flex items-center justify-between border-b py-4 px-4 border-gray-200">
              <p className="text-xl font-bold">Workspace</p>
              <button className="cursor-pointer hover:text-red-400">
                <WorkspaceForm />
              </button>
            </div>

            <SidebarWorkspaceList />
          </div>
          <div>
            <div className="flex items-center justify-between border-b py-4 border-gray-200 px-4">
              <p className="text-xl font-bold">Favorite</p>
              <FavouriteIcon />
            </div>

            <SidebarFavoriteList />
          </div>
        </div>

        <form className="flex flex-col gap-4 mx-4" action={signOutAction}>
          <button className="px-3 py-3 hover:bg-gray-100 rounded-2xl flex cursor-pointer">
            <LogOutIcon className="rotate-180 " color="#f96666" />
            <p className="ml-4 font-bold text-red-400">Logout</p>
          </button>
        </form>
      </div>
    </div>
  );
};
