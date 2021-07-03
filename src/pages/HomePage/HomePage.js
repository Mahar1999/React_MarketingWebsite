import React from "react";

import HeaderSection from "../../components/Header/HeaderSection";
import GamingSection from "./Sections/GamingSection";
import FeatureSection from "./Sections/FeatureSection";
import VideoSection from "./Sections/VideoSection";
import PortSection from "./Sections/PortSection";
import FooterSection from "./Sections/FooterSection";
import SupportSection from "./Sections/SupportSection";

const HomePage = () => {
  return (
    <div>
      <HeaderSection />
      <FeatureSection />
      <GamingSection />
      <PortSection />
      <VideoSection />
      <SupportSection />
      <FooterSection />
    </div>
  );
};

export default HomePage;
