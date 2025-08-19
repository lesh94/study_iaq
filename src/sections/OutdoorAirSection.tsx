import React from "react";
import "./OutdoorAirSection.scss";
import WeatherSection from "./WeatherSection";
import OutdoorAirDetailSection from "./OutdoorAirDetailSection";

const OutdoorAirSection = () => {
  return (
    <>
      <div className="OutdoorAirSection_wrap">
        <WeatherSection />
        <OutdoorAirDetailSection />
      </div>
    </>
  );
};

export default OutdoorAirSection;
