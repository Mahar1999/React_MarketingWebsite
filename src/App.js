import React from "react";

import HeaderSection from "./components/Header/HeaderSection";
import GamingSection from "./components/Sections/GamingSection";
import FeatureSection from "./components/Sections/FeatureSection";
import VideoSection from "./components/Sections/VideoSection";
import PortSection from "./components/Sections/PortSection";
import FooterSection from  './components/Sections/FooterSection'

import "./App.scss";

function App() {
  return (
    <div>
      <HeaderSection />
      <FeatureSection />
      <GamingSection />
      <PortSection />
      <VideoSection />
      <FooterSection />
    </div>
  );
}

export default App;
