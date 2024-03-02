import { useState } from "react";
import { stepOne } from "./index.js";
import { useForm } from "react-hook-form";
import privacy from "../../assets/pdf/polityka_prywatnosci_findao.pdf";
import regulations from "../../assets/pdf/regulamin_findao.pdf";
import { useContext } from "react";
import { ThemeContext } from "./../../App";
import Input from "./Input.jsx";

const Form = () => {
  const { theme } = useContext(ThemeContext);

  const gap = "flex gap-[9px]";
  const input = "border-[2px] rounded-md h-[18px] w-[18px] ";
  const href = "text-blue duration-300";

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const selectAll = watch("selectAll");
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
                    value="all"
                    className={`${theme === "light" ? " border-cream bg-transparent" : " border-darkModeBorderColor bg-darkMode "} ${input}`}
                    {...register("selectAll")}
                  />
                  <label className="font-bold">
                    Akceptuję wszystkie zgody i oświadczenia
                  </label>
                </div>
                <div className={`${gap}`}>
                  <input
                    type="checkbox"
                    value="privacy"
                    className={`${theme === "light" ? " border-cream bg-transparent" : " border-darkModeBorderColor bg-darkMode "} ${input}`}
                    checked={selectAll}
                    {...register("accepts", {
                      required: { value: true, message: "Nie wyrażono zgody" },
                    })}
                  />

                  <label>
                    {errors.accepts && (
                      <span className="text-red mr-[5px]">
                        {errors.accepts.message}
                      </span>
                    )}
                    Potwierdzam, że zapoznałem się{" "}
                    <a
                      href={regulations}
                      className={`${theme === "light" ? "hover:text-grayish" : "hover:text-darkModeBlueButton"} ${href}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Regulaminem{" "}
                    </a>{" "}
                    oraz{" "}
                    <a
                      href={privacy}
                      className={`${theme === "light" ? "hover:text-grayish" : "hover:text-darkModeBlueButton"} ${href}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Polityką prywatności{" "}
                    </a>
                    YOUMONEY oraz akceptuję ich treść.
                  </label>
                </div>
                <div className={`${gap}`}>
                  <input
                    type="checkbox"
                    value="information"
                    className={`${theme === "light" ? " border-cream bg-transparent" : " border-darkModeBorderColor bg-darkMode "} ${input}`}
                    checked={selectAll}
                    {...register("accepts", {
                      required: { value: true, message: "Nie wyrażono zgody" },
                    })}
                  />

                  <label>
                    {errors.accepts && (
                      <span className="text-red mr-[5px]">
                        {errors.accepts.message}
                      </span>
                    )}
                    Chcę dostawać od Youmoney.pl i partnerów najnowsze i
                    dopasowane do moich potrzeb informacje o produktach i
                    usługach.{" "}
                    {toggle ? (
                      <div className="grid gap-[4px]">
                        <span onClick={handleToggle} className="cursor-pointer">
                          [ZWIŃ]
                        </span>
                        <div className="grid gap-[4px]">
                          <p>
                            Wyrażam zgodę na przesyłanie przez Findao sp. z o.o.
                            informacji handlowych dotyczących produktów lub
                            usług własnych w formie:
                          </p>
                          <div>
                            <input
                              type="checkbox"
                              className={`${theme === "light" ? " border-cream bg-transparent" : " border-darkModeBorderColor bg-darkMode "} ${input}`}
                            />{" "}
                            <label>zaznacz wszystkie</label>
                          </div>
                          <div className={`${gap} ml-[25px]`}>
                            <input
                              type="checkbox"
                              className={`${theme === "light" ? " border-cream bg-transparent" : " border-darkModeBorderColor bg-darkMode "} ${input}`}
                              {...register("accepts", {
                                required: {
                                  value: true,
                                  message: "Nie wyrażono zgody",
                                },
                              })}
                            />

                            <label>
                              {errors.accepts && (
                                <span className="text-red mr-[5px]">
                                  {errors.accepts.message}
                                </span>
                              )}
                              wiadomości na mój adres email wskazany w
                              formularzu kontaktowym
                            </label>
                          </div>
                          <div className={`${gap} ml-[25px]`}>
                            <input
                              type="checkbox"
                              className={`${theme === "light" ? " border-cream bg-transparent" : " border-darkModeBorderColor bg-darkMode "} ${input}`}
                              {...register("accepts", {
                                required: {
                                  value: true,
                                  message: "Nie wyrażono zgody",
                                },
                              })}
                            />

                            <label>
                              {errors.accepts && (
                                <span className="text-red mr-[5px]">
                                  {errors.accepts.message}
                                </span>
                              )}
                              wiadomości SMS na mój numer telefonu wskazany w
                              formularzu kontaktowym
                            </label>
                          </div>
                        </div>
                        <div className="grid gap-[4px]">
                          <p>
                            Wyrażam zgodę na przesyłanie przez Findao sp. z o.o.
                            informacji handlowych dotyczących produktów lub
                            usług banków i firm pożyczkowych wskazanych pod TYM
                            adresem w formie:
                          </p>
                          <div>
                            <input
                              type="checkbox"
                              className={`${theme === "light" ? " border-cream bg-transparent" : " border-darkModeBorderColor bg-darkMode "} ${input}`}
                            />{" "}
                            <label>zaznacz wszystkie</label>
                          </div>
                          <div className={`${gap} ml-[25px]`}>
                            <input
                              type="checkbox"
                              className={`${theme === "light" ? " border-cream bg-transparent" : " border-darkModeBorderColor bg-darkMode "} ${input}`}
                              {...register("accepts", {
                                required: {
                                  value: true,
                                  message: "Nie wyrażono zgody",
                                },
                              })}
                            />

                            <label>
                              {errors.accepts && (
                                <span className="text-red mr-[5px]">
                                  {errors.accepts.message}
                                </span>
                              )}
                              wiadomości na mój adres email wskazany w
                              formularzu kontaktowym
                            </label>
                          </div>
                          <div className={`${gap} ml-[25px]`}>
                            <input
                              type="checkbox"
                              className={`${theme === "light" ? " border-cream bg-transparent" : " border-darkModeBorderColor bg-darkMode "} ${input}`}
                              {...register("accepts", {
                                required: {
                                  value: true,
                                  message: "Nie wyrażono zgody",
                                },
                              })}
                            />

                            <label>
                              {errors.accepts && (
                                <span className="text-red mr-[5px]">
                                  {errors.accepts.message}
                                </span>
                              )}
                              wiadomości głosowych na mój numer telefonu
                              wskazany w formularzu kontaktowym.
                            </label>
                          </div>
                          <div className={`${gap} ml-[25px]`}>
                            <input
                              type="checkbox"
                              className={`${theme === "light" ? " border-cream bg-transparent" : " border-darkModeBorderColor bg-darkMode "} ${input}`}
                              {...register("accepts", {
                                required: {
                                  value: true,
                                  message: "Nie wyrażono zgody",
                                },
                              })}
                            />

                            <label>
                              {errors.accepts && (
                                <span className="text-red mr-[5px]">
                                  {errors.accepts.message}
                                </span>
                              )}
                              wiadomości SMS na mój numer telefonu wskazany w
                              formularzu kontaktowym
                            </label>
                          </div>
                          <div className={`${gap} ml-[25px]`}>
                            <input
                              type="checkbox"
                              className={`${theme === "light" ? " border-cream bg-transparent" : " border-darkModeBorderColor bg-darkMode "} ${input}`}
                              {...register("accepts", {
                                required: {
                                  value: true,
                                  message: "Nie wyrażono zgody",
                                },
                              })}
                            />

                            <label>
                              {errors.accepts && (
                                <span className="text-red mr-[5px]">
                                  {errors.accepts.message}
                                </span>
                              )}
                              połączeń telefonicznych na mój numer telefonu
                              wskazany w formularzu kontaktowym.
                            </label>
                          </div>
                        </div>
                        <div>
                          <p className="text-[12px] mt-[10px]">
                            W każdej chwili przysługuje Ci prawo cofnięcia
                            każdej zgody wyrażonej dobrowolnie. <br />{" "}
                            Administratorem Twoich danych osobowych jest Findao
                            sp. z o.o. Kontakt z administratorem możliwy jest
                            drogą mailową na adres iod@findao.pl. Twoje dane
                            osobowe będą przetwarzane celu świadczenia usług
                            drogą elektroniczną w ramach konta użytkownika w
                            serwisie Youmoney.pl oraz w granicach udzielonych
                            zgód, do celów marketingu bezpośredniego.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <span onClick={handleToggle} className="cursor-pointer">
                        [ROZWIŃ]
                      </span>
                    )}
                  </label>
                </div>
              </div>
              <div>
                <a href="/step2">
                  <button
                    type="submit"
                    value="submit"
                    className={`${theme === "light" ? "hover:bg-darkGrey" : "hover:bg-darkModeBlueButton"} text-white text-[18px] font-bold py-[13.5px] bg-blue w-full mt-[20px] rounded-2xl hover:bg-darkGrey duration-300`}
                  >
                    Dalej
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
