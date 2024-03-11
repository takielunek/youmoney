import { useState } from "react";
import CookieModal from "../../Cookie/CookieModal";

const ManageButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div>
      <div className="fixed bottom-[-42px] left-[50px] hover:bottom-0 duration-300 z-50">
        <button
          className="text-[16px] md:text-[17px] lg:text-[18px] regular p-[15px] hidden sm:block bg-white rounded-t-xl buttonShadow"
          onClick={() => {
            setIsOpen(true);
            setIsHidden(true);
          }}
          hidden={isHidden}
        >
          Zarządzaj zgodą
        </button>
      </div>
      <CookieModal
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
          setIsHidden(false);
        }}
      />
    </div>
  );
};

export default ManageButton;
