import darkLogo from "./../../assets/MainPage/logo/darkLogo.svg";

const DeleteYourData = () => {
  return (
    <section className="w-full sm:w-[600px] mx-auto">
      <div className="py-[54px]">
        <div className="bg-white shadow-xl rounded-xl my-[54px] py-[54px] px-[6%]">
          <p className="text-[31.5px] mb-[32px] font-bold">
            Prośba o usunięcie danych
          </p>
          <p className="text-[18px] mb-[24px]">
            Wypełnij poniższy formularz, a my zweryfikujemy czy mamy aktualnie w
            naszej bazie Twoje dane - jeśli tak, usuniemy je. Tym samym nie
            otrzymasz już więcej od nas powiadomień sms oraz e-mail.
          </p>
          <div className=" bg-blue py-[13.5px] text-center rounded-2xl hover:bg-darkGrey duration-300">
            <button className="text-white text-[18px] font-bold">
              Wyślij prośbę
            </button>
          </div>
          <input type="tel" />
          <input type="text" />
        </div>
      </div>
      <div className="grid place-content-center my-[54px]">
        <img src={darkLogo} alt="Logo" className="h-[54px]" />
      </div>
    </section>
  );
};

export default DeleteYourData;
