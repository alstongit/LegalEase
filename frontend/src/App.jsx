import './App.css'
// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnalyzePage from "./pages/AnalyzePage";
import LandingPage from "./pages/LandingPage"; // create this if not already done
import GenerateTemplatePage from './components/GenerateTemplatePage';
import RentFormPage from './components/RentFormPage';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/analyze" element={<AnalyzePage />} />
        <Route path="/generate" element={<GenerateTemplatePage />} /> {/* Placeholder for GeneratePage */}
        <Route path="/generate/rent" element={<RentFormPage />} /> {/* Placeholder for Rent Agreement */}
        {/* Add more routes as needed */}
      </Routes>
    
  );
}

export default App;
