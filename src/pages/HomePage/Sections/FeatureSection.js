import React from "react";

import Card from "../../../UI/Card";

import classes from "./FeatureSection.module.scss";

const FeatureSection = (props) => {
  const featureList = [
    {
      title: "alpha rogue phoneix",
      description:
        "The Alpha Rogue Phoenix for the true Gamers who need the finest of the finest experience with the smoothest and most powerful system",
    },
    {
      title: "alpha rogue frostfire",
      description:
        "The Alpha Rogue FrostFire for professionals who aspire high performance and mighter specs than any other for their art",
    },
    {
      title: "alpha rogue shadow",
      description:
        "The Alpha Rogue shadow for the new warriors who need to polish their work and talent. Best for your next College freshers",
    },
    {
      title: "alpha rogue infinity",
      description:
        "The Alpha Rogue infinity for the students for their school projects and school meets. Powered up with the basics of all that you just need",
    },
  ];
  return (
    <div className={classes.featureContainer} ref={props.featureSectionRef}>
      <h1 className={classes.featureHeading}>- the power to do it all -</h1>

      <div className={classes.cardList}>
        <Card
          title={featureList[0].title}
          description={featureList[0].description}
          pathTo="FeaturePhoneix"
        />
        <Card
          title={featureList[1].title}
          description={featureList[1].description}
          pathTo="FeatureFrostfire"
        />
        <Card
          title={featureList[2].title}
          description={featureList[2].description}
          pathTo="FeatureShadow"
        />
        <Card
          title={featureList[3].title}
          description={featureList[3].description}
          pathTo="FeatureInfinity"
        />
      </div>
    </div>
  );
};

export default FeatureSection;
