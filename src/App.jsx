import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import BudgetPage from "./pages/BudgetPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/calculator" element={<BudgetPage />} />
    </Routes>
  );
}

export default App;
