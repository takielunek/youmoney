import AllRoutes from "./components/AllRoutes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
