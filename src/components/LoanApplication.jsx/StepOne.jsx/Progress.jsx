
const Progress = () => {
  return (
    <div className="w-full sm:w-[600px] mx-auto">
      <div className="flex mb-[9px]">
        <div className="bg-cream h-[9px] rounded-full w-[45%] xs:w-[60%] xsm:w-[65%] sm:w-[75%] my-auto">
          <div className="bg-blue w-1/4 h-[9px] rounded-full"></div>
        </div>
        <p className="text-[14px] px-[15px] py-[5px]">Etap wniosku 1 z 4.</p>
      </div>
      <p className="text-[20px] sm:text-[28px] md:text-[31.5px] font-light">
        Krok 1: <span className="font-bold">Podstawowe dane</span>
      </p>
    </div>
  );
}

export default Progress