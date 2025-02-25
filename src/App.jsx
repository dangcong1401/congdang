import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Exchange from "./pages/Exchange";
import Statistics from "./pages/Statistics";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark text-white pb-16">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
