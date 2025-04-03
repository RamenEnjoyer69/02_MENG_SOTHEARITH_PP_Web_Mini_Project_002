import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserProfile = () => {
  return (
    <div className="w-[300px] flex gap-3 items-center">
      <Avatar>
        <AvatarImage src="https://avatars.githubusercontent.com/u/159865027?v=4" />
        <AvatarFallback>Ramen</AvatarFallback>
      </Avatar>

      <div className="flex flex-col py-2">
        <p className="font-bold ">Tarnished</p>
        <p className="text-sm text-red-400">someone@gmail.com</p>
      </div>
    </div>
  );
};

export default UserProfile;
