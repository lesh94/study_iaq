import React from "react";
import "./AirPowerSet.scss";
import airpowersetIcon from "../../src/assets/airpowerset_icon.png";

const AirPowerSet = () => {
  return (
    <>
      <div className="airpowerset_wrap">
        <div className="airpowerset_left">
          <div className="airpowerset_left_top">
            <div className="airpowerset_power_button">
              <button>1단</button>
              <button>2단</button>
              <button>3단</button>
            </div>
            <div className="airpowerset_automatic_button">
              <button>자동모드</button>
            </div>
          </div>
          <div className="airpowerset_left_bottom">
            <p>환기풍량</p>
          </div>
        </div>
        <div className="airpowerset_right">
          <div className="airpowerset_icon">
            <img src={airpowersetIcon} alt="airpower_icon"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default AirPowerSet;
