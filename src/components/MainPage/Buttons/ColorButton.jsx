import { VscColorMode } from "react-icons/vsc";

const ColorButton = () => {
  return (
    <div className="fixed bottom-[16px] right-[15px] bg-darkGrey text-white p-[16px] rounded-full cursor-pointer">
      <VscColorMode className="hover:rotate-180 duration-300"/>
    </div>
  );
};

export default ColorButton;
