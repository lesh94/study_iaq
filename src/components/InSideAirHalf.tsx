import React from "react";
import "./InSideAirHalf.scss";

const InSideAirHalf = () => {
  return (
    <>
      <div className="insideairhalf_wrap">
        <div className="insideairhalf_top">
          <div className="insideairhalf_top_left">
            <p className="insideairhalf_name">이산화탄소</p>
            <div className="insideairhalf_unit_wrap">
              <p className="insideairhalf_number">1000</p>
              <p className="insideairhalf_unit">PPM</p>
            </div>
          </div>
          <div className="insideairhalf_top_right">
            <div className="insideairhalf_text_box">
              <p className="insideairhalf_text">매우좋음</p>
            </div>
          </div>
        </div>
        <div className="insideairhalf_bottom">
          <div className="insideairhalf_graph_backgournd">
            <div className="insideairhalf_graph"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InSideAirHalf;
