import { CalendarDays, LocateIcon } from "lucide-react";

import { AgentAvatar } from "@/components/pages/home/home-right-side/AgentAvatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Contact } from "@/lib/types/definitions";

export function UserCard({ contact }: { contact: Contact }) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="flex justify-center items-center space-x-1 shadow-sm rounded-full p-1 px-2 hover:scale-105 hover:shadow-md transition-all duration-500">
          <AgentAvatar />
          <Button variant="link">{contact.name}</Button>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 transition-all duration-500">
        <div className="flex justify-between space-x-4">
          <AgentAvatar />
          <div className="flex-1 space-y-1">
            <h4 className="text-sm font-semibold">{contact.name}</h4>
            <h4 className="text-sm font-semibold">{contact.role} role</h4>
            <p className="text-sm">{contact.email}</p>
            <div className="flex items-center pt-2">
              <LocateIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Visited {contact.updated_at}
              </span>
            </div>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Joined {contact.created_at}
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
