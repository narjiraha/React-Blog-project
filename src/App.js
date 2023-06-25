import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/homepage/HomePage";
import Navbar from "./components/navbar/Navbar";
import BollywoodPage from "./components/bollywoodpage/BollywoodPage";
import TechnologyPage from "./components/technologypage/TechnologyPage";
import HollywoodPage from "./components/hollywoodpage/HollywoodPage";
import FitnessPage from "./components/fitnesspage/FitnessPage";
import FoodPage from "./components/foodpage/FoodPage";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bollywoodpage" element={<BollywoodPage />} />
          <Route path="/technologypage" element={<TechnologyPage />} />
          <Route path="/Hollywoodpage" element={<HollywoodPage />} />
          <Route path="/fitnesspage" element={<FitnessPage />} />
          <Route path="/foodpage" element={<FoodPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
