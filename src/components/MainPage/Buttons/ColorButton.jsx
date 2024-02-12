import { VscColorMode } from "react-icons/vsc";
import { useState } from "react";

const ColorButton = () => {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div>
      <div
        className="fixed bottom-[16px] right-[15px] bg-darkGrey text-white p-[16px] rounded-full cursor-pointer "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <VscColorMode />
      </div>

      {isHovered && (
        <div
          className="z-50 fixed flex bottom-[16px] right-[15px] bg-darkGrey text-white py-[12px] px-[16px] w-[220px] rounded-full cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <p className="regular">Włącz ciemny motyw</p>
          <VscColorMode className="rotate-180 mt-[5px] ml-[8px]" />
        </div>
      )}
    </div>
  );
};

export default ColorButton;
