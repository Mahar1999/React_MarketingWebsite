import React from "react";

import Card from "../../UI/Card";
import { IoBarbellOutline } from "react-icons/io5";

import classes from "./FeatureSection.module.scss";

const FeatureSection = () => {
  const featureList = [
    {
      title: "i10-Processor",
      description:
        "The power to do it all.Now play your favrouite games with no frame lag.Smooth gaming with the new Intel Core i10-10300H processor  up to 4.5 Ghz",
    },
    {
      title: "GEFORCE RTX™ ",
      description:
        "NVIDIA® GEFORCE RTX™ 30 SERIES deliver the ultimate performance for gamers and creators, utilizing NVIDIA® Max-Q  for peak performance and efficiency.",
    },
    {
      title: "1TB SSD/32GB RAM",
      description:
        "When you decide to load up a game or sit back to binge on your latest series, the high-speed display keeps everything fluid and seamless",
    },
    {
      title: "VORTEX FLOW",
      description:
        "Through strategically placed thermal foam and controlled paths,optimize the airflow to increase overall cooling–reducing temperature and delivering superior performance.",
    },
  ];
  return (
    <div className={classes.featureContainer}>
      <h1 className={classes.featureHeading}>- the power to do it all -</h1>

      <div className={classes.cardList}>
        <Card
          title={featureList[0].title}
          description={featureList[0].description}
        />
        <Card
          title={featureList[1].title}
          description={featureList[1].description}
        />
        <Card
          title={featureList[2].title}
          description={featureList[2].description}
        />
        <Card
          title={featureList[3].title}
          description={featureList[3].description}
        />
      </div>
    </div>
  );
};

export default FeatureSection;
