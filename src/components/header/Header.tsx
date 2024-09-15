import { ModeToggle } from "../mode-toggle/ModeToggle";
import { NavLinks } from "./NavLinks";
import DateAndTime from "./date-time/DateAndTime";
import { LangsSelect } from "./langs/LangsSelect";
import Logo from "./logo/Logo";
import { MobileDrawer } from "./mobile-drawer/MobileDrawer";

const Header = () => {
  return (
    <div className="top-0 left-0 sticky z-40 backdrop-blur-lg">
      <nav className="max-w-7xl mx-auto flex  justify-between items-center p-2">
        <div className="flex justify-between gap-2  items-center sm:w-1/2">
          <div className="sm:hidden w-full">
            <MobileDrawer />
          </div>
          <Logo />
          <div className="hidden sm:block">
            <NavLinks />
          </div>
        </div>
        <div className="flex justify-center space-x-3 sm:space-x-5 items-center overflow-auto p-2">
          <LangsSelect />
          <DateAndTime />
          <ModeToggle />
        </div>
      </nav>
    </div>
  );
};

export default Header;
