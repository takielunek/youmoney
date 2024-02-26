import { VscColorMode } from "react-icons/vsc";
import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../../App";

// eslint-disable-next-line react/prop-types
const ColorButton = ({toggleTheme}) => {
   const { theme } = useContext(ThemeContext);
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };



  return (
    <div className="z-50">
      <div
        className={`${theme === "light" ? "bg-darkGrey text-white" : "bg-darkModeText text-darkGrey"} fixed bottom-[16px] right-[15px] p-[16px] rounded-full cursor-pointer`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <VscColorMode />
      </div>

      {isHovered && (
        <div
          className={`${theme === "light" ? "bg-darkGrey text-white w-[220px]" : "bg-darkModeText text-darkGrey w-[204px]"} z-50 fixed flex bottom-[16px] right-[15px] py-[12px] px-[16px] rounded-full cursor-pointer`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => toggleTheme()}
        >
          <p className="regular">
            {`${theme === "light" ? "Włącz ciemny motyw" : "Włącz jasny motyw"}`}
          </p>
          <VscColorMode className="rotate-180 mt-[5px] ml-[8px]" />
        </div>
      )}
    </div>
  );
};

export default ColorButton;
