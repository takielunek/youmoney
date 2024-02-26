const SendFeedback = () => {
 const placeholder = "text-[15px] md:text-[20px] border-2 border-cream rounded-2xl text-cream light px-[17px] py-[13px]"

  return (
    <div className="flex justify-center px-[10px] xs:px-[30px] sm:px-0 sm:w-[40%]">
         <div className="w-11/12 ss:w-2/3 sm:w-11/12 flex flex-col border-2 border-white bg-white rounded-xl mb-[25.5px] py-[45px] px-[30px] bgShadow">
            <p className="text-[20px] sm:text-[22px] md:text-[23.4px] bold text-grey mb-[17px] ">Zostaw swoją opinię</p>
            <input className={`${placeholder} mb-[15px]`} type="text" placeholder="Podaj swoje imię i nazwisko"/>
            <textarea className={`${placeholder} `} placeholder="Podaj swój komentarz..." rows="4"></textarea>
          <div>
            <button className="px-[30px] py-[12px] mt-[24px] bg-blue text-white medium text-[16px] md:text-[17px] rounded-2xl hover:bg-darkGrey duration-300">Wyślij swoją opinie</button>
          </div>
       </div>
      </div>
  )
}

export default SendFeedback