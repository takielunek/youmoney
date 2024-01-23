import { answers } from "../../../index.js";

const Answers = () => {
  return (
 <section className="wrapper">
  <div className="w-10/12 sm:w-[77%] mx-auto mb-[100px]">
         {answers.map((answers) => (
            <div key={answers.id}>
                <p className="text-[19px] md:text-[22px] mb-[7.2px] text-darkGrayish ubuntu-bold">{answers.title}</p>
                <p className="text-[14px] md:text-[16px] mb-[18px] text-lightGrey ubuntu-regular text-justify">{answers.text}</p>
            </div>
             ))}
       </div>
 </section> 
  )
}

export default Answers