import React from "react";
import "./RommAirSection.scss";
import TitleText from "../components/TitleText";
import InSideAirHalf from "../components/InSideAirHalf";
import InsideAllAirTemperature from "../components/InsideAllAirTemperature";
import temperatureIcon from "../../src/assets/temperature_icon.png";
import Humidity from "../../src/assets/humidity_icon.png";

const RommAirSection = () => {
  return (
    <>
      <div className="rommAirSection_wrpa">
        <div className="rommAirSection_top">
          <TitleText text="햇살반" fontSize="24px" fontWeight={500} />
        </div>
        <div className="rommAirSection_bottom">
          <div className="rommAirSection_bottom_top">
            <InSideAirHalf />
            <InSideAirHalf />
            <InSideAirHalf />
          </div>
          <div className="rommAirSection_bottom_bottom">
            <InsideAllAirTemperature
              icon={temperatureIcon}
              lable="온도"
              value="28"
              unit="°C"
              height="194px"
            />
            <InsideAllAirTemperature
              icon={Humidity}
              lable="습도"
              value="100"
              unit="%"
              height="194px"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RommAirSection;
