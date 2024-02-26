
import { useContext } from "react";
import { ThemeContext } from "../App";
import StepOne from "../components/FirstStep.jsx/StepOne";

const StepOnePage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme === "light" ? "bg-white" : "bg-darkMode"}`}>
      <StepOne />
    </div>
  );
};

export default StepOnePage;


