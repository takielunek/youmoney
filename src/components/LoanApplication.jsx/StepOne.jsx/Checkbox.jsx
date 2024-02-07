import { useForm } from "react-hook-form";
import privacy from "../../../assets/pdf/polityka_prywatnosci_findao.pdf";
import regulations from "../../../assets/pdf/regulamin_findao.pdf";

const Checkbox = () => {
  const gap = "flex gap-[9px]";
  const input = "border-[2px] border-cream rounded-md h-[18px] w-[18px]";
  const href = "text-blue hover:text-grayish duration-300";

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const selectAll = watch("selectAll");
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-[4.5px] text-[13px] text-grayish">
        <div className={`${gap}`}>
          <input
            type="checkbox"
            value="all"
            className={`${input}`}
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
            className={`${input}`}
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
              className={`${href}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Regulaminem{" "}
            </a>{" "}
            oraz{" "}
            <a
              href={privacy}
              className={`${href}`}
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
            className={`${input}`}
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
            Chcę dostawać od Youmoney.pl i partnerów najnowsze i dopasowane do
            moich potrzeb informacje o produktach i usługach.{" "}
            <span className="cursor-pointer">[ROZWIŃ]</span>
          </label>
        </div>
      </div>
      <div className=" ">
        <a href="/step2">
          <button
            type="submit"
            value="submit"
            className="text-white text-[18px] font-bold py-[13.5px] bg-blue w-full mt-[20px] rounded-2xl hover:bg-darkGrey duration-300"
          >
            Dalej
          </button>
        </a>
      </div>
    </form>
  );
};

export default Checkbox;
