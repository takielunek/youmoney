import secure from "./../../assets/Message/secure.svg";
import { ThemeContext } from "./../../App";
import { useEffect, useContext } from "react";
import MessageNavbar from "./MessageNavbar";
import MessageFooter from "./MessageFooter";

const Message = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.title = "Wniosek Youmoney";
  }, []);

  return (
    <section>
      <MessageNavbar />
      <div className="px-[16px] ss:px-0 py-[32px] ss:py-[40px] sm:pt-[78px] sm:pb-[48px] md:pt-[84px] md:pb-[54px] flex justify-around">
        <div
          className={`${theme === "light" ? "bg-white" : "bg-darkModeItemsBg"} my-[32px] ss:my-[40px] sm:my-[48px] md:my-[54px] py-[24px] ss:py-[40px] sm:py-[48px] md:py-[54px] px-[12.8px] ss:px-[20px] sm:px-[24px] md:px-[36px] rounded-xl shadow-2xl w-full xss:w-[480px] ss:w-[510px]`}
        >
          <img src={secure} alt="Grafika" className="mb-[40px] w-[200px]" />
          <p
            className={`${theme === "light" ? "text-darkGrayish" : "text-superLightGrey2"} text-[21px] sm:text-[28px] md:text-[30px]  lg:text-[31.5px] font-bold mb-[32px]`}
          >
            Twój wniosek został przyjęty prawidłowo.
          </p>
          <p
            className={`${theme === "light" ? "text-grayish" : "text-superLightGrey2"} text-[16px] md:text-[17px] lg:text-[18px]  mb-[24px]`}
          >
            Wkrótce otrzymasz oferty.
          </p>
        </div>
      </div>
      <MessageFooter />
    </section>
  );
};

export default Message;
