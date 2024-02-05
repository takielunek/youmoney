import money from "../../../assets/MainPage/other/money.svg";
import { VscColorMode } from "react-icons/vsc";

const Buttons = () => {
  return (
    <div>
      <a href="/step1">
        <button
          id="toTopLink"
          className="z-50 hidden fixed bottom-[16px] right-[80px] bg-blue hover:bg-darkBlue duration-500 text-white ubuntu-medium text-[16px] px-[48px] py-[10px] border-2 border-white rounded-xl"
        >
          Weź pożyczkę{" "}
          <div className="relative">
            <img
              className="absolute opacity-25 h-[45px] w-[51px] -bottom-[13px] -right-[50px]"
              src={money}
              alt="Bills"
            />
          </div>
        </button>
      </a>

      <div className="fixed bottom-[16px] right-[15px] bg-darkGrey text-white p-[16px] rounded-full cursor-pointer">
        <VscColorMode />
      </div>
    </div>
  );
};

export default Buttons;
