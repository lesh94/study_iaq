import React from "react";
import "./InsideAllAir.scss";

const InsideAllAir = () => {
  return (
    <>
      <div className="insideallair_wrap">
        <div className="insideallair_top_wrap">
          <p className="insideallair_name">초미세먼지</p>
          <div className="insideallair_unit_wrap">
            <p className="insideallair_number">1000</p>
            <p className="insideallair_unit">㎍/㎥</p>
          </div>
        </div>
        <div className="insideallair_mid_wrap">
          <div className="graph_bar_background">
            <div className="graph_bar"></div>
          </div>
        </div>
        <div className="insideallair_bottom_wrap">
          <div className="insdieallair_text_box">
            <p className="insideallair_text">매우나쁨</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsideAllAir;
