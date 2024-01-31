import { partners } from "./../../index.js";

const Partners = () => {
  return (
    <section className="pb-[54px]">
      <h1 className="text-[40px] sm:text-[50px] bold text-grey mt-[20px] sm:mt-[50px] mb-[100px] sm:my-[100px]">
        Lista partnerów współpracujących
      </h1>

      <div>
        {partners.map((partners) => (
          <div key={partners.id}>
            <p className="text-[15px] mb-[7px]">{partners.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
