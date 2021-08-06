import React from "react";
import { Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactUsPage/ContactPage";

import FeaturePhoneix from "./pages/FeaturePage/FeaturePhoneix";
import FeatureFrostfire from "./pages/FeaturePage/FeatureFrostfire";
import FeatureInfinity from "./pages/FeaturePage/FeatureInfinity";
import FeatureShadow from "./pages/FeaturePage/FeatureShadow";

import PopupSignup from "./UI/PopupSignup";

import "./App.module.scss";

function App() {
  return (
    <div>
      <Route path="/contactUs">
        <ContactPage />
      </Route>
      
      <Route path="/FeaturePhoneix">
        <FeaturePhoneix />
      </Route>
      <Route path="/FeatureFrostfire">
        <FeatureFrostfire />
      </Route>
      <Route path="/FeatureShadow">
        <FeatureShadow />
      </Route>
      <Route path="/FeatureInfinity">
        <FeatureInfinity />
      </Route>

      <Route path="/" exact>
        <HomePage />
      </Route>
      {/* <PopupSignup /> */}
    </div>
  );
}

export default App;
