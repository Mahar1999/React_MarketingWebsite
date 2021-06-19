import React from "react";

import HeaderSection from "./components/Header/HeaderSection";
import GamingSection from "./components/Sections/GamingSection";
import FeatureSection from "./components/Sections/FeatureSection";

import "./App.scss";

function App() {
  return (
    <div>
      <HeaderSection />
      <FeatureSection />
      <GamingSection />
    </div>
  );
}

export default App;
