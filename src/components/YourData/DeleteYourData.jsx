import darkLogo from "./../../assets/MainPage/logo/darkLogo.svg";
import lightLogo from "./../../assets/MainPage/logo/lightLogo.svg";
import { AiFillCaretDown } from "react-icons/ai";
import { useState } from "react";
import { data } from "./index.js";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ThemeContext } from "./../../App";

const DeleteYourData = () => {
   const { theme } = useContext(ThemeContext);

  const border =
    "relative border-1 rounded-2xl px-[18px] py-[13.5px] focus outline-none w-full focus:border-blue focus:ring-2 focus:ring-sky";
  const label =
    "absolute px-[7px] left-[15px] -translate-y-1/2 rounded-xl";
  const questionMark =
    "rounded-full h-[20px] w-[20px] hidden sm:block absolute right-[28px] translate-x-1/2 bottom-[50%] translate-y-1/2";
  const speechBuble =
    "absolute w-[204px] text-[12px] text-center rounded-md py-[5px] px-[25px] right-[28px] translate-x-1/2 bottom-[45px]";
  const icon =
    "absolute bottom-[33.3px] right-[28px] translate-x-1/2";

  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

    const onSubmit = (data) => alert(JSON.stringify(data))

  return (
    <section className="w-full sm:w-[600px] mx-auto">
      <div className="py-[54px]">
        <div
          className={`${theme === "light" ? "bg-transparent" : "bg-darkModeBg"} shadow-xl rounded-xl my-[54px] py-[54px] px-[6%]`}
        >
          <p
            className={`${theme === "light" ? "text-grey" : "text-superLightGrey2"} text-[31.5px] mb-[32px] font-bold`}
          >
            Prośba o usunięcie danych
          </p>
          <p
            className={`${theme === "light" ? "text-lightGrey" : "text-superLightGrey2"} text-[18px] mb-[24px]`}
          >
            Wypełnij poniższy formularz, a my zweryfikujemy czy mamy aktualnie w
            naszej bazie Twoje dane - jeśli tak, usuniemy je. Tym samym nie
            otrzymasz już więcej od nas powiadomień sms oraz e-mail.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col text-[18px] gap-[18px]">
              {data.map((data) => (
                <div key={data.id} className="relative z-0">
                  <div
                    className={`${theme === "light" ? " bg-white" : " bg-darkModeBg"} ${label} z-10`}
                  >
                    <label
                      className={`${theme === "light" ? "text-grayish " : "text-superLightGrey2 "} text-[14px]`}
                    >
                      {data.text}
                    </label>
                  </div>
                  <input
                    type="tel"
                    placeholder={data.placeholder}
                    {...register("data", { required: true })}
                    className={`${theme === "light" ? "bg-transparent border-cream" : "bg-darkMode border-darkModeBorderColor"} ${border}`}
                    style={
                      errors.data && {
                        border: "1px solid red",
                        boxShadow: "none",
                      }
                    }
                  />
                  {errors.data && (
                    <span className="text-red text-[12px]">{data.message}</span>
                  )}
                  <div
                    className={`${theme === "light" ? " bg-cream" : " bg-darkGrayish"} ${questionMark}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={
                      errors.data && {
                        bottom: "65%",
                      }
                    }
                  >
                    <p
                      className={`${theme === "light" ? " text-grayish" : " text-superLightGrey2"} text-[12px]  grid place-content-center`}
                    >
                      ?
                    </p>
                  </div>
                  {isHovered && (
                    <div>
                      <div
                        className={`${theme === "light" ? " text-white bg-grey" : " bg-superLightGrey2 text-grey"} ${speechBuble}`}
                      >
                        Zwróć uwagę, aby to był ten, <br /> który podawałaś/eś
                        podczas <br />
                        składaniu wniosku
                      </div>
                      <AiFillCaretDown
                        className={`${theme === "light" ? " text-grey" : " text-superLightGrey2"} ${icon}`}
                      />
                    </div>
                  )}
                </div>
              ))}
              <div>
                <button
                  type="submit"
                  className={`${theme === "light" ? "hover:bg-darkGrey" : "hover:bg-darkModeBlueButton"} text-white text-[18px] font-bold bg-blue py-[13.5px] w-full text-center rounded-2xl duration-300`}
                >
                  Wyślij prośbę
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="grid place-content-center py-[54px]">
        <a href="/">
          <img
            src={theme === "light" ? darkLogo : lightLogo}
            alt="Logo"
            className="h-[54px]"
          />
        </a>
      </div>
    </section>
  );
};

export default DeleteYourData;
