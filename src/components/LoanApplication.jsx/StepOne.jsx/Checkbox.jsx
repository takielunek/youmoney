
const Checkbox = () => {

    const gap = "flex gap-[9px]";

  return (
    <fieldset className="flex flex-col gap-[4.5px] text-[13px]">
      <div className={`${gap}`}>
        <input type="checkbox" />
        <label>Akceptuję wszystkie zgody i oświadczenia</label>
      </div>
      <div className={`${gap}`}>
        <input type="checkbox" />
        <label>
          Potwierdzam, że zapoznałem się Regulaminem oraz Polityką prywatności
          YOUMONEY oraz akceptuję ich treść.
        </label>
      </div>
      <div className={`${gap}`}>
        <input type="checkbox" />
        <label>
          Chcę dostawać od Youmoney.pl i partnerów najnowsze i dopasowane do
          moich potrzeb informacje o produktach i usługach.{" "}
          <span className="cursor-pointer">[ROZWIŃ]</span>
        </label>
      </div>
    </fieldset>
  );
}

export default Checkbox