import DeleteYourData from "../components/YourData/DeleteYourData";
import { useContext } from "react";
import { ThemeContext } from "../App";

const DeleteYourDataPage = () => {
    const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme === "light" ? "bg-white" : "bg-darkMode"}`}>
      <DeleteYourData />
    </div>
  );
};

export default DeleteYourDataPage;
