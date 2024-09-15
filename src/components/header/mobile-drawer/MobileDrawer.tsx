import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { NavLinks } from "../NavLinks";
import Logo from "../logo/Logo";

export function MobileDrawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"icon"} variant={"outline"} className="p-0">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
          <SheetDescription>
            Customers help with the help of the system
          </SheetDescription>
        </SheetHeader>
        <div className="my-5 text-center w-full grid place-items-center">
          <NavLinks />
        </div>
      </SheetContent>
    </Sheet>
  );
}
