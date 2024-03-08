import { stepOne } from "./index.js";
import { useForm } from "react-hook-form";
// import privacy from "../../assets/pdf/polityka_prywatnosci_findao.pdf";
// import regulations from "../../assets/pdf/regulamin_findao.pdf";
import { useContext } from "react";
import { ThemeContext } from "./../../App";
import Input from "./Input.jsx";

// export default function Form () {
const Form = () => {
  const { theme } = useContext(ThemeContext);

  const gap = "flex gap-[9px]";
  const input = "border-[2px] rounded-md h-[18px] w-[18px] ";
<<<<<<< HEAD
  const href = "text-blue duration-300";

  const [checkedAll, setCheckedAll] = useState(true);
  // console.log(checkedAll);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(true);
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
=======
>>>>>>> f940efc845585afe1d24b7397aabb1235919b0df

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
<<<<<<< HEAD
  const handleSelectAll = () => {
    setValue("first", checkedAll);
    setValue("second", checkedAll);
    setValue("third", checkedAll);
    setValue("fourth", checkedAll);
    setValue("fifth", checkedAll);
    setValue("sixth", checkedAll);
    setValue("seventh", checkedAll);
    setValue("eighth", checkedAll);
    setValue("selectAll2", checkedAll);
    setValue("selectAll3", checkedAll);
    setCheckedAll(!checkedAll);
  };

  const handleSelect2 = () => {
    setValue("third", checked2);
    setValue("fourth", checked2);
    setChecked2(!checked2);
  };

  const handleSelect3 = () => {
    setValue("fifth", checked3);
    setValue("sixth", checked3);
    setValue("seventh", checked3);
    setValue("eighth", checked3);
    setChecked3(!checked3);
  };
=======
>>>>>>> f940efc845585afe1d24b7397aabb1235919b0df

  const onSubmit = (data) => alert(JSON.stringify(data));
  // console.log("selectAll", watch("selectAll"));
  // console.log("selectAll2", watch("selectAll2"));
  // console.log("selectAll3", watch("selectAll3"));
  // console.log("checkedAll", checkedAll);
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
                    {...register("selectAll", {
                      onChange: handleSelectAll,
                    })}
                  />

<<<<<<< HEAD
                  <label className="font-bold">
                    Akceptuję wszystkie zgody i oświadczenia
                  </label>
                </div>
                <div className={`${gap}`}>
                  <input
                    type="checkbox"
                    className={`${theme === "light" ? " border-cream bg-transparent" : " border-darkModeBorderColor bg-darkMode "} ${input}`}
                    {...register("first", {
                      required: { value: true },
                    })}
                  />

                  <label>
                    {errors.first && (
                      <p className="text-red mr-[5px]">Nie wyrażono zgody</p>
                    )}
                    Potwierdzam, że zapoznałem się z{" "}
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
                    className={`${theme === "light" ? " border-cream bg-transparent" : " border-darkModeBorderColor bg-darkMode "} ${input}`}
                    {...register("second", {
                      required: { value: true },
                    })}
                  />

                  <label>
                    {errors.second && (
                      <p className="text-red mr-[5px]">Nie wyrażono zgody</p>
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
                              // onChange={handleSelect2}
                              className={`${theme === "light" ? " border-cream bg-transparent" : " border-darkModeBorderColor bg-darkMode "} ${input}`}
                              {...register("selectAll2", {
                                onChange: handleSelect2,
                              })}
                            />{" "}
                            <label>zaznacz wszystkie</label>
                          </div>
                          <div className={`${gap} ml-[25px]`}>
                            <input
                              type="checkbox"
                              className={`${theme === "light" ? " border-cream bg-transparent" : " border-darkModeBorderColor bg-darkMode "} ${input}`}
                              {...register("third", {
                                required: true,
                              })}
                            />

                            <label>
                              {errors.third && (
                                <p className="text-red mr-[5px]">
                                  Nie wyrażono zgody
                                </p>
                              )}
                              wiadomości na mój adres email wskazany w
                              formularzu kontaktowym
                            </label>
                          </div>
                          <div className={`${gap} ml-[25px]`}>
                            <input
                              type="checkbox"
                              className={`${theme === "light" ? " border-cream bg-transparent" : " border-darkModeBorderColor bg-darkMode "} ${input}`}
                              {...register("fourth", {
                                required: true,
                              })}
                            />

                            <label>
                              {errors.fourth && (
                                <p className="text-red mr-[5px]">
                                  Nie wyrażono zgody
                                </p>
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
                              // onChange={handleSelect3}
                              className={`${theme === "light" ? " border-cream bg-transparent" : " border-darkModeBorderColor bg-darkMode "} ${input}`}
                              {...register("selectAll3", {
                                onChange: handleSelect3,
                              })}
                            />{" "}
                            <label>zaznacz wszystkie</label>
                          </div>
                          <div className={`${gap} ml-[25px]`}>
                            <input
                              type="checkbox"
                              className={`${theme === "light" ? " border-cream bg-transparent" : " border-darkModeBorderColor bg-darkMode "} ${input}`}
                              {...register("fifth", {
                                required: true,
                              })}
                            />

                            <label>
                              {errors.fifth && (
                                <p className="text-red mr-[5px]">
                                  Nie wyrażono zgody
                                </p>
                              )}
                              wiadomości na mój adres email wskazany w
                              formularzu kontaktowym
                            </label>
                          </div>
                          <div className={`${gap} ml-[25px]`}>
                            <input
                              type="checkbox"
                              className={`${theme === "light" ? " border-cream bg-transparent" : " border-darkModeBorderColor bg-darkMode "} ${input}`}
                              {...register("sixth", {
                                required: true,
                              })}
                            />

                            <label>
                              {errors.sixth && (
                                <p className="text-red mr-[5px]">
                                  Nie wyrażono zgody
                                </p>
                              )}
                              wiadomości głosowych na mój numer telefonu
                              wskazany w formularzu kontaktowym.
                            </label>
                          </div>
                          <div className={`${gap} ml-[25px]`}>
                            <input
                              type="checkbox"
                              className={`${theme === "light" ? " border-cream bg-transparent" : " border-darkModeBorderColor bg-darkMode "} ${input}`}
                              {...register("seventh", {
                                required: true,
                              })}
                            />

                            <label>
                              {errors.seventh && (
                                <p className="text-red mr-[5px]">
                                  Nie wyrażono zgody
                                </p>
                              )}
                              wiadomości SMS na mój numer telefonu wskazany w
                              formularzu kontaktowym
                            </label>
                          </div>
                          <div className={`${gap} ml-[25px]`}>
                            <input
                              type="checkbox"
                              className={`${theme === "light" ? " border-cream bg-transparent" : " border-darkModeBorderColor bg-darkMode "} ${input}`}
                              {...register("eighth", {
                                required: true,
                              })}
                            />

                            <label>
                              {errors.eighth && (
                                <p className="text-red mr-[5px]">
                                  Nie wyrażono zgody
                                </p>
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
=======
                  <label className="font-normal">
                    Lorem ipsum dolor sit amet consectetur.
>>>>>>> f940efc845585afe1d24b7397aabb1235919b0df
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
