import React from "react";
import { Carousel } from "react-responsive-carousel";

import classes from "./FeatureForstfire.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../img/GamingMain.png";
import FeatureNavigation from "../../components/FeatureNavigation/FeatureNavigation";
import GeneralFeatures from "./FeatureDetails/GeneralFeatures";
import FooterSection from "../../components/Footer/FooterSection";

const FeaturePhoneix = () => {
  const generalFeatures = {
    SalesPackage: "Laptop, battery, power adapter, user guide",
    ModelNumber: "GF63 Thin 10SCXR-1616IN",
    PartNumber: "9S7-16R412-1616",
    ModelName: "GF63 Thin 10SCXR-1616IN",
    Series: "GF63 Thin",
    Color: "Black",
    Type: "Gaming Laptop",
    SuitableFor: "Processing & Multitasking",
    PowerSupply: "120W Adapter",
    BatteryCell: "3",
    MsOffice: "No",
  };
  const processor = {
    DedicatedGraphicMemoryType: "GDDR6",
    DedicatedGraphicMemory: "4 GB",
    ProcessorBrand: "Intel",
    ProcessorName: "Hexa Core i5",
    ProcessorGeneration: "10th Gen",
    SSD: "Yes",
    SSDCapacity: "256 GB",
    RAM: "8 GB",
    RamType: "DDR4",
    HDDcapacity: "1 TB",
    ProcessorVariant: "10500H",
    ClockSpeed: "2.5 GHz with Turbo Boost upto 4.5 GHz",
    Cache: "12",
    GraphicProcessor: " NVIDIA GeForce GTX 1650 Max Q",
    NumberOfCores: 6,
  };

  const operatingSystem = {
    OSArchitecture: "64 bit",
    operatingSystem: "Windows 10 Home",
    systemArchitecture: 64,
  };

  const displayAndAudio = {
    touchScreen: "No",
    screenSize: "39.62 cm (15.6 inch)",
    screenResolution: "1920 x 1080 Pixel",
    screenType: "Full HD LED Backlit IPS Display",
    speakers: "Built in Dual speakers",
    internalMic: "Built in Microphone",
    soundChip: "Realtek ALC 269",
    soundProperties: "2x 2W Stereo Speakers",
    refreshRate: "60Hz",
  };

  const additionalFeatures = {
    diskDrive: "Not Available",
    webCamera: "720p HD Webcam (30fps@720p)",
    keyboard: "Single Backlit Keyboard (Red)",
    backlightKeyboard: "Yes",
    pointerDevice: "Yes",
    includedSoftware: "Silver-Lining Print",
    additionalFeautres: "3-Cell, 51 Whr Battery",
  };

  return (
    <div className={classes.FeaturePhoneixContainer}>
      <FeatureNavigation title={"Alpha Rogue Frost Fire"} />

      <Carousel infiniteLoop="true" interval="true">
        <div>
          <img src={img1} alt="photo1" />
          <p className="legend">View 1</p>
        </div>
        <div>
          <img src={img1} alt="photo2" />
          <p className="legend">View 2</p>
        </div>
        <div>
          <img src={img1} alt="photo3" />
          <p className="legend">View 3</p>
        </div>
      </Carousel>
      <div className={classes.featureDetails}>
        <div className={classes.generalFeatures}>
          <GeneralFeatures
            generalDetail={generalFeatures}
            processorDetail={processor}
            operatingDetail={operatingSystem}
            displayAudioDetail={displayAndAudio}
            additionalDetail={additionalFeatures}
          />
        </div>
      </div>
      <FooterSection/>
    </div>
  );
};

export default FeaturePhoneix;
