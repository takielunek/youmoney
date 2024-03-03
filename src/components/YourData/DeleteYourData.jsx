import darkLogo from "./../../assets/MainPage/logo/darkLogo.svg";
import lightLogo from "./../../assets/MainPage/logo/lightLogo.svg";
import { useEffect, useContext } from "react";
import { data } from "./index.js";
import { useForm } from "react-hook-form";
import { ThemeContext } from "./../../App";
import Input from "./Input.jsx";

const DeleteYourData = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.title = "Wypisanie z subskrypcji Youmoney";
  }, []);

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

  const onSubmit = (data) => alert(JSON.stringify(data));

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
                <Input
                  key={data.id}
                  placeholder={data.placeholder}
                  text={data.text}
                  message={data.message}
                  register={register}
                  errors={errors}
                />
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
