import darkLogo from "../../../assets/MainPage/logo/darkLogo.svg";
import lightLogo from "../../../assets/MainPage/logo/lightLogo.svg";
import { useContext } from "react";
import { ThemeContext } from "../../../App";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section>
      <div className="flex justify-between py-[15px] medium">
        <a href="/">
          <img
            className="h-[54px]"
            src={theme === "light" ? darkLogo : lightLogo}
            alt="Logo"
          />
        </a>
        <div className="flex gap-[50px] self-center">
          <a
            className="text-lightGrey hover:text-blue duration-300 hidden md:block"
            href="/about"
          >
            O youmoney
          </a>
          <a className="text-blue hidden md:block" href="/how">
            Jak to działa
          </a>
        </div>
        <div className="self-center hidden sm:block">
          <a
            className="text-blue border-[2px] border-blue px-[20px] py-[10px] rounded-xl hover:border-darkGrey hover:text-darkGrey duration-300"
            href=""
          >
            <button>Weź pożyczkę</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
