import { useState } from "react";
import CookieModal from "../../Cookie/CookieModal";

const ManageButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className={`${isOpen ? "hidden" : "block"} z-50`}>
        <div className="fixed left-[50px] bottom-[-45px] hover:bottom-0 duration-700">
          <button
            className="text-[16px] md:text-[17px] lg:text-[18px] regular p-[15px] sm:block bg-white rounded-t-xl buttonShadow"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Zarządzaj zgodą
          </button>
        </div>
      </div>
      <CookieModal
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />
    </div>
  );
};

export default ManageButton;
