import { how } from "./index.js";

const How = () => {
  return (
    <section>
      <div>
        <h1 className="text-[40px] sm:text-[50px] bold text-grey mt-[50px] mb-[100px] sm:my-[100px]">
          Jak działa youmoney.pl?
        </h1>

        <div className="sm:flex mb-[60px] gap-x-[32px]">
          {how.map((how) => (
            <div key={how.id} className="w-[100%] xs:w-[83%] sm:w-1/3 mx-auto">
              <div className="grid place-content-center mb-[50px]">
                <img className="h-[200px]" src={how.image} alt="Graphics" />
              </div>
              <div className=" text-lightGrey text-center mb-[56px]">
                <p className="text-[20px] bold mb-[20px]">{how.title}</p>
                <p className="text-[13px] ubuntu-regular">{how.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="xmd:w-3/4 xl:w-1/2 mx-auto text-center mt-[100px] mb-[150px]">
          <p className="ubuntu-bold text-[20px] sm:text-[27px] text-lightGrey">
            Wróć na{" "}
            <span className="text-blue hover:text-black hover:underline duration-300 cursor-pointer">
              youmoney.pl
            </span>{" "}
            po kolejną pożyczkę jeśli będziesz nadal potrzebować pieniędzy!
          </p>
        </div>
      </div>
    </section>
  );
};

export default How;
