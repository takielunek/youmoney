import AllRoutes from "./components/AllRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext(null);

function App() {
const localStorageTheme = localStorage.getItem("youmoney") || "light";
const [theme, setTheme] = useState(localStorageTheme);

const toggleTheme = () => {
  const newTheme = theme === "light" ? "dark" : "light";
  setTheme(newTheme);
  localStorage.setItem("youmoney", newTheme);
};


useEffect(() => {
  const savedTheme = localStorage.getItem("youmoney");
  if (savedTheme) {
    setTheme(savedTheme);
  }
}, []);


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <Router>
          <AllRoutes />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
