import React, { useRef } from "react";

import HeaderSection from "../../components/Header/HeaderSection";
import GamingSection from "./Sections/GamingSection";
import FeatureSection from "./Sections/FeatureSection";
import VideoSection from "./Sections/VideoSection";
import PortSection from "./Sections/PortSection";
import FooterSection from "../../components/Footer/FooterSection";
import SupportSection from "./Sections/SupportSection";

const HomePage = () => {
  const btnSignUpRef = useRef();
  const featureSectionRef = useRef();
  const supportSectionRef = useRef();
  return (
    <div>
      <HeaderSection
        btnSignUpRef={btnSignUpRef}
        featureSectionRef={featureSectionRef}
        supportSectionRef={supportSectionRef}
      />
      <FeatureSection featureSectionRef={featureSectionRef} />
      <GamingSection />
      <PortSection />
      <VideoSection btnSignUpRef={btnSignUpRef} />
      <SupportSection supportSectionRef={supportSectionRef} />
      <FooterSection />
    </div>
  );
};

export default HomePage;
