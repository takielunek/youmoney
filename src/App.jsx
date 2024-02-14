import AllRoutes from "./components/AllRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { createContext, useState } from "react";
import ColorButton from "./components/MainPage/Buttons/ColorButton";
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <Router>
          <AllRoutes />
          <ColorButton toggleTheme={toggleTheme} />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
