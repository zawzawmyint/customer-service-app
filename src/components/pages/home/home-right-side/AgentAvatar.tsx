import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AgentAvatar() {
  return (
    <Avatar className="-m-1 border-2">
      <AvatarImage
        src="https://github.com/shadcn.png"
        alt="@shadcn"
        className="hover:scale-110 transition-all duration-500"
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
