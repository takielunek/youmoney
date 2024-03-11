import { VscColorMode } from "react-icons/vsc";
import { useContext } from "react";
import { ThemeContext } from "../../../App";

// eslint-disable-next-line react/prop-types
const NavbarColorButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="cursor-pointer">
      <div
        className={`${theme === "light" ? " text-darkGrey" : " text-white"} p-[20px]  hover:rotate-180 duration-300`}
        onClick={() => toggleTheme()}
      >
        <VscColorMode className="h-[18px] w-[18px]" />
      </div>
    </div>
  );
};

export default NavbarColorButton;
