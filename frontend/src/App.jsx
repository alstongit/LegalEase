import './App.css'
// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnalyzePage from "./pages/AnalyzePage";
import LandingPage from "./pages/LandingPage"; // create this if not already done

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/analyze" element={<AnalyzePage />} />
      </Routes>
    
  );
}

export default App;
