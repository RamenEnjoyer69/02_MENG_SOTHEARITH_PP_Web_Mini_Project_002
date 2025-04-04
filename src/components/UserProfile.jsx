import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getUserService } from "@/services/userService";

const UserProfile = async () => {
  const user = await getUserService();
  return (
    <div className="w-[300px] flex gap-3 items-center">
      <Avatar>
        <AvatarImage src={user?.profile} />
        <AvatarFallback>{user?.username}</AvatarFallback>
      </Avatar>

      <div className="flex flex-col py-2">
        <p className="font-bold ">{user?.username}</p>
        <p className="text-sm text-red-400">{user?.email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
