import Modal from "./Modal";
import { useState } from "react";

const TermsOfTheLoan = () => {
const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-center">
      <button
        className="underline text-blue text-[16px] regular cursor-pointer hover:opacity-75 duration-300"
        onClick={() => setIsOpen(true)}
      >
        Warunki pożyczki
      </button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}  />
    </div>
  );
};

export default TermsOfTheLoan;
