import woman from "../../../assets/MainPage/bg/bg1.png";
import Navbar from "../Navbar/Navbar";
import Application from "./Application";
import { useContext } from "react";
import { ThemeContext } from "../../../App";
import ManageButton from "../Buttons/ManageButton";

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section>
      <div className="bg-header">
         <Navbar />
        <div className="wrapper w-11/12 md:w-10/12 mx-auto">
         
          <div
            id="header"
            className="pt-[88px] sm:pt-[138px] pb-[150px] sm:pb-[150px] relative px-[30px] w-full xs:w-[90%] xss:w-[80%] xsm:w-[70%] sm:w-full mx-auto sm:px-0"
          >
            <div className="sm:flex sm:justify-between">
              <div className="uppercase bold w-1/2 z-10 relative mt-[18px]">
                <p
                  className={`${theme === "light" ? "text-grey" : "text-darkModeText"} text-[32px] sm:text-[57.6px]`}
                >
                  szybka <br /> pożyczka <br /> online
                </p>
                <p className="text-[27px] sm:text-[49px] underline text-blue -rotate-[7deg] absolute top-[130px] sm:top-[235px] left-[10px] sm:left-[15px] w-[200px] sm:w-[300px]">
                  w 15 minut
                </p>
              </div>

              {/* application  */}
              <div className="sm:w-1/2 mt-[50px] z-10">
                <Application />
              </div>
            </div>
            <div className="z-0">
              <img
                className="absolute -top-[50px] sm:top-[70px] right-0 xs:right-[50px] sm:left-[5%] xmd:left-[10%] lg:left-[180px] h-[250px] sm:h-[663px]"
                src={woman}
                alt="Woman"
              />
            </div>
          </div>
        </div>
      </div>
      <ManageButton />
    </section>
  );
};

export default Header;
