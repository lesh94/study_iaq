import React from "react";
import "./InsideAllAirTemperature.scss";
import temperatureIcon from "../../src/assets/temperature_icon.png";

type TemperatureIcon = {
  icon: string;
  lable: string;
  value: string;
  unit: string;
};

const InsideAllAirTemperature = ({
  icon,
  lable,
  value,
  unit,
}: TemperatureIcon) => {
  return (
    <>
      <div className="insideAllAirTemperature_wrap">
        <div className="insideAllAirTemperature_top_wrap">
          <div className="temperature_icon">
            <img src={icon} alt="temperature_icon"></img>
          </div>
        </div>
        <div className="InsideAllAirTemperature_bottom_wrap">
          <p className="temperature_name">{lable}</p>
          <div className="temperature_text_wrap">
            <p className="temperature_number">{value}</p>
            <p className="temperature_unit">{unit}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsideAllAirTemperature;
