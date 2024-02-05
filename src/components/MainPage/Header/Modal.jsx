import close from "../../../assets/MainPage/other/close.svg";

// eslint-disable-next-line react/prop-types
const Modal = ({ closeModal }) => {

  return (
    <div className="bg-blue w-[100%] h-[100%]">
      <div className="absolute bg-white px-[27px] pt-[40px] pb-[57px] w-2/3 rounded-xl bottom-[50%] right-[50%] translate-x-1/2">
        <div className="flex justify-end">
          <img
            className="mb-[25px] h-[17px] cursor-pointer"
            src={close}
            alt="Close icon"
            onClick={() => {
              closeModal(false);
            }}
          />
        </div>
        <p className="text-[15px] regular text-center">
          Reprezentatywny przykład pożyczki: Rzeczywista Roczna Stopa
          Oprocentowania (RRSO) wynosi 11,61%, całkowita kwota kredytu (bez
          kredytowanych kosztów) – 10000 zł, całkowita kwota do zapłaty –
          11791,18 zł, oprocentowanie stałe – 3,99%, całkowity koszt kredytu –
          1791,18 zł (w tym: prowizja 1087,35 zł, odsetki 695,73 zł), czas
          obowiązywania umowy 36 miesięcy, 1–35 miesięcznych rat po 332,23 zł,
          ostatnia, 36. rata 332,33 zł. Maks. RRSO wynosi 178,38%. RRSO wynosi
          przeciętnie 17,28%.
        </p>
      </div>
    </div>
  );
};

export default Modal;
