import { stepOne } from "./index.js";
import { useForm } from "react-hook-form";
// import privacy from "../../assets/pdf/polityka_prywatnosci_findao.pdf";
// import regulations from "../../assets/pdf/regulamin_findao.pdf";
import { useContext } from "react";
import { ThemeContext } from "./../../App";
import Input from "./Input.jsx";

const Form = () => {
  const { theme } = useContext(ThemeContext);

  const gap = "flex gap-[9px]";
  const input = "border-[2px] rounded-md h-[18px] w-[18px] ";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <div className="w-full sm:w-[600px] mx-auto">
      <div>
        <div
          className={`${theme === "light" ? "bg-transparent" : "bg-darkModeBg"} shadow-xl rounded-xl mt-[36px] mb-[40px] sm:mb-[54px] py-[54px] px-[6%] `}
        >
          <div className="flex flex-col text-[18px] gap-[18px]">
            {stepOne.map((stepOne) => (
              <Input
                key={stepOne.id}
                placeholder={stepOne.placeholder}
                text={stepOne.text}
                speech={stepOne.speech}
                message={stepOne.message}
                register={register}
                errors={errors}
              />
            ))}
            {/* checkbox  */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div
                className={`${theme === "light" ? "text-grayish" : "text-superLightGrey2"} flex flex-col gap-[4.5px] text-[13px] `}
              >
                <div className={`${gap}`}>
                  <input
                    type="checkbox"
                    className={`${theme === "light" ? " border-cream bg-transparent" : " border-darkModeBorderColor bg-darkMode "} ${input} `}
                  />

                  <label className="font-normal">
                    Lorem ipsum dolor sit amet consectetur.
                  </label>
                </div>
              </div>
              <div>
                <a href="/message">
                  <button
                    type="submit"
                    value="submit"
                    className={`${theme === "light" ? "hover:bg-darkGrey" : "hover:bg-darkModeBlueButton"} text-white text-[18px] font-bold py-[13.5px] bg-blue w-full mt-[20px] rounded-2xl hover:bg-darkGrey duration-300`}
                  >
                    Aplică
                  </button>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
