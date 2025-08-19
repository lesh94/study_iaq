import React from "react";
import "./WeatherSection.scss";
import TitleText from "../components/TitleText";
import WeatherCard from "../components/WeatherCard";
import Location from "../components/Location";
import OutsideTemperature from "../components/OutsideTemperature";

const WeatherSection = () => {
  return (
    <>
      <div className="WeatherSection_wrap">
        <div className="WeatherSection_top">
          <TitleText text="화곡어린이집" fontSize="24px" fontWeight={500} />
        </div>
        <div className="WeatherSection_bottom">
          <div className="WeatherSection_bottom_left">
            <TitleText text="오늘의 날씨" fontSize="16px" fontWeight={400} />
            <Location />
            <WeatherCard />
          </div>
          <div className="WeatherSection_bottom_right">
            <OutsideTemperature
              domain={[-50, 50]}
              topLabel="45°C"
              showMidLabel={true}
              midLabel="0°C"
              bottomLabel="-45°C"
              dataLabel="온도 28°C"
              barcolor="#FF650C"
            />
            <OutsideTemperature
              domain={[0, 50]}
              topLabel="100%"
              showMidLabel={false}
              bottomLabel="0%"
              dataLabel="습도 30%"
              barcolor="#37A2FF"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherSection;
