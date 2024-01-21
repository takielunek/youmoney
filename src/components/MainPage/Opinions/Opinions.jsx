

const Opinions = () => {
  const placeholder = "text-[20px] border-2 border-cream rounded-2xl text-cream light px-[17px] py-[13px]"

  return (
  <section className="wrapper pb-[51px]">
    <div className="flex justify-between mt-[68px]">
       <div className="w-[60%]">
           <h1 className="text-[45px] bold text-grey my-[34px] leading-[55px]">Poznaj opinie <br /> zadowolonych klientów </h1>
           <div>
            carousele
           </div>
       </div>
       <div className="w-[40%] flex flex-col border-2 border-white rounded-xl mb-[25.5px] py-[45px] px-[30px] bgShadow">
            <p className="text-[23.4px] bold text-grey mb-[17px] ">Zostaw swoją opinię</p>
            <input className={`${placeholder} mb-[15px]`} type="text" placeholder="Podaj swoje imię i nazwisko"/>
            <textarea className={`${placeholder} `} placeholder="Podaj swój komentarz..." rows="4"></textarea>
          <div>
            <button className="px-[30px] py-[12px] mt-[24px] bg-blue text-white medium text-[17px] rounded-2xl hover:bg-darkGrey duration-300">Wyślij swoją opinie</button>
          </div>
       </div>
    </div>
  </section>
  )
}

export default Opinions