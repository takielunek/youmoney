import { stepOne } from "./index.js";
import { useForm } from "react-hook-form";
// import privacy from "../../assets/pdf/polityka_prywatnosci_findao.pdf";
// import regulations from "../../assets/pdf/regulamin_findao.pdf";
import { useContext } from "react";
import { ThemeContext } from "./../../App";
import Input from "./Input.jsx";
import dataSender from "./../../dataSender.js";

const Form = () => {
  const { theme } = useContext(ThemeContext);

  const gap = "flex gap-[9px]";
  const input = "border-[2px] rounded-md h-[18px] w-[18px] ";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data && data.checkbox) {
      dataSender(JSON.stringify(data));
      // window.location.href = "/message";
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit(onSubmit)();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      onKeyPress={handleKeyPress}
    >
      <div className="w-full sm:w-[600px] mx-auto">
        <div>
          <div
            className={`${theme === "light" ? "bg-transparent" : "bg-darkModeBg"} shadow-xl rounded-xl mt-0 sm:mt-[36px] mb-[40px] sm:mb-[54px] py-[54px] px-[6%] `}
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
                  type={stepOne.type}
                  validation={stepOne.validation}
                />
              ))}
              {/* checkbox  */}

              <div
                className={`${theme === "light" ? "text-grayish" : "text-superLightGrey2"} flex flex-col gap-[4.5px] text-[13px] `}
              >
                <div className={`${gap}`}>
                  <input
                    type="checkbox"
                    className={`${theme === "light" ? " border-cream bg-transparent" : " border-darkModeBorderColor bg-darkMode "} ${input} `}
                    {...register("checkbox", { required: true })}
                  />
                  {errors.checkbox && (
                    <p role="alert" className="text-red">
                      Lorem, ipsum dolor.
                    </p>
                  )}
                  <label className="font-bold">
                    Lorem ipsum dolor sit amet consectetur.
                  </label>
                </div>
              </div>

              <button
                type="submit"
                value="submit"
                className={`${theme === "light" ? "hover:bg-darkGrey" : "hover:bg-darkModeBlueButton"} text-white text-[18px] font-bold py-[13.5px] bg-blue w-full mt-[20px] rounded-2xl hover:bg-darkGrey duration-300`}
              >
                Aplică
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
