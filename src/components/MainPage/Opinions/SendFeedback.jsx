import { useState, useContext } from "react";
import { ThemeContext } from "../../../App";
import lightVector from "../../../assets/MainPage/bg/lightVector.png";
import darkVector from "../../../assets/MainPage/bg/darkVector.png";
import { useForm } from "react-hook-form";
import dataSender from "../../../dataSender.js";

const SendFeedback = () => {
  const { theme } = useContext(ThemeContext);
  const [isSend, setIsSend] = useState(false);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const placeholder =
    "border-[1px] border-cream rounded-2xl text-cream light px-[17px] py-[13px] ";

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (data) {
      dataSender(JSON.stringify(data));
      setIsSend(true);
      setErrorMessage(false);
    }
  };

  const handleSendClick = () => {
    if (input1.trim() === "" || input2.trim() === "") {
      setErrorMessage(true);
    } else {
      onSubmit();
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(onSubmit)();
    }
  };

  return (
    <div
      onKeyPress={handleKeyPress}
      className=" flex justify-center px-[10px] xs:px-[30px] sm:px-0 sm:w-[40%] relative"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="relative z-10 w-11/12 ss:w-2/3 sm:w-11/12 flex flex-col border-2 border-white bg-white rounded-xl mb-[25.5px] py-[45px] px-[30px] bgShadow"
      >
        <p
          className={`${isSend ? "hidden" : "block"} ${theme === "light" ? "text-grey" : "text-darkModeText2"} text-[20px] sm:text-[22px] md:text-[23.4px] bold mb-[17px] `}
        >
          Zostaw swoją opinię
        </p>
        <input
          className={`${isSend ? "hidden" : "block"} ${placeholder} mb-[15px] input`}
          type="text"
          placeholder="Podaj swoje imię i nazwisko"
          {...register("firstName", { required: true, minLength: 3 })}
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <textarea
          className={`${isSend ? "hidden" : "block"} ${placeholder} textarea`}
          placeholder="Podaj swój komentarz..."
          rows="4"
          {...register("comment", { required: true, minLength: 3 })}
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        ></textarea>
        <div>
          <button
            type="submit"
            onClick={handleSendClick}
            className={`${isSend ? "hidden" : "block"} ${theme === "light" ? "hover:bg-darkGrey" : "hover:bg-darkModeBlueButton"} w-full py-[12px] mt-[24px] bg-blue text-white medium text-[16px] md:text-[17px] rounded-2xl duration-300`}
          >
            Wyślij swoją opinie
          </button>
        </div>
        {errorMessage && (
          <div className="absolute top-0 left-0 bg-red rounded-xl px-[20px] py-[5px]">
            <p className="text-white text-[13px] medium">
              Uzupełnij wszystkie pola!
            </p>
          </div>
        )}

        {isSend && (
          <div className="flex items-center justify-center my-auto">
            <div className="text-center">
              <p className="text-[18px] regular ">
                Dziękujemy za Twoją opinie!{" "}
              </p>
              <p className="text-[14px] medium">
                Wkrótce pojawi się na liście :)
              </p>
            </div>
          </div>
        )}
      </form>
      <img
        src={theme === "light" ? lightVector : darkVector}
        alt="blue vector"
        className="absolute z-0 -top-[180px] -right-[250px] h-[700px] rotate-180"
      />
    </div>
  );
};

export default SendFeedback;
