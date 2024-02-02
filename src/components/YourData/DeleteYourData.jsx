import darkLogo from "./../../assets/MainPage/logo/darkLogo.svg";
import { AiFillCaretDown } from "react-icons/ai";
import { useState } from "react";
import { data } from "./index.js";

const DeleteYourData = () => {
  const border =
    "relative border-2 border-cream rounded-2xl px-[18px] py-[13.5px] focus outline-none w-full focus:border-blue focus:ring-2 focus:ring-sky";
  const label =
    "absolute bg-white px-[7px] left-[15px] -translate-y-1/2 rounded-xl";
  const questionMark =
    "bg-cream rounded-full h-[20px] w-[20px] hidden sm:block absolute right-[28px] translate-x-1/2 top-[50%] -translate-y-1/2";
  const speechBuble =
    "absolute w-[204px] text-[12px] text-white text-center bg-grey rounded-md py-[5px] px-[25px] right-[28px] translate-x-1/2 bottom-[50%] -translate-y-1/4";
  const icon =
    "absolute bottom-[50%] -translate-y-1/3 right-[28px] translate-x-1/2 text-grey";

  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <section className="w-full sm:w-[600px] mx-auto">
      <div className="py-[54px]">
        <div className="shadow-xl rounded-xl my-[54px] py-[54px] px-[6%]">
          <p className="text-[31.5px] mb-[32px] font-bold">
            Prośba o usunięcie danych
          </p>
          <p className="text-[18px] mb-[24px]">
            Wypełnij poniższy formularz, a my zweryfikujemy czy mamy aktualnie w
            naszej bazie Twoje dane - jeśli tak, usuniemy je. Tym samym nie
            otrzymasz już więcej od nas powiadomień sms oraz e-mail.
          </p>
          <div className="flex flex-col text-[18px] gap-[18px]">
            {data.map((data) => (
              <div key={data.id} className="relative z-0">
                <div className={`${label} z-10`}>
                  <label className="text-grayish text-[14px]">
                    {data.text}
                  </label>
                </div>
                <input
                  type="tel"
                  placeholder={data.placeholder}
                  className={`${border}`}
                />
                <div
                  className={`${questionMark}`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <p className="text-[12px] text-grayish grid place-content-center">
                    ?
                  </p>
                </div>
                {isHovered && (
                  <div>
                    <div className={`${speechBuble}`}>
                      Zwróć uwagę, aby to był ten, <br /> który podawałaś/eś
                      podczas <br />
                      składaniu wniosku
                    </div>
                    <AiFillCaretDown className={`${icon}`} />
                  </div>
                )}
              </div>
            ))}
            <div className=" bg-blue py-[13.5px] text-center rounded-2xl hover:bg-darkGrey duration-300">
              <button className="text-white text-[18px] font-bold">
                Wyślij prośbę
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid place-content-center my-[54px]">
        <img src={darkLogo} alt="Logo" className="h-[54px]" />
      </div>
    </section>
  );
};

export default DeleteYourData;
