import React from "react";
import "./IndoorAirSection.scss";
import temperatureIcon from "../../src/assets/temperature_icon.png";
import Humidity from "../../src/assets/humidity_icon.png";
import TitleText from "../components/TitleText";
import InsideAllAir from "../components/InsideAllAir";
import InsideAllAirTemperature from "../components/InsideAllAirTemperature";
import AirPowerSet from "../components/AirPowerSet";

const IndoorAirSection = () => {
  return (
    <>
      <div className="indoorAirSection_wrap">
        <div className="indoorAirSection_top">
          <TitleText
            text="전체 평균 실내 공기질"
            fontSize="24px"
            fontWeight={500}
          />
        </div>
        <div className="indoorAirSection_mid">
          <div className="indoorAirSection_mid_top">
            <InsideAllAir />
            <InsideAllAir />
          </div>
          <div className="indoorAirSection_mid_bottom">
            <InsideAllAirTemperature
              icon={temperatureIcon}
              lable="온도"
              value="28"
              unit="°C"
            />
            <InsideAllAirTemperature
              icon={Humidity}
              lable="습도"
              value="100"
              unit="%"
            />
          </div>
        </div>
        <div className="indoorAirSection_bottom">
          <AirPowerSet />
        </div>
      </div>
    </>
  );
};

export default IndoorAirSection;
