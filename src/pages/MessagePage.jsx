import Message from "../components/Message/Message"
import { useContext } from "react";
import { ThemeContext } from "../App";

const MessagePage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme === "light" ? "bg-white" : "bg-darkMode"}`}>
      <Message />
    </div>
  );
};

export default MessagePage