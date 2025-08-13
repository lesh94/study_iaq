import React from "react";
import "./OutSideAirCard.scss";

const OutSideAirCard = () => {
  return (
    <>
      <div className="outsideaircard_wrap">
        <div className="outsideaircard_left_wrap">
          <div className="outsideaircard_top_wrap">
            <ul className="outsideair_text_info_wrap">
              <li className="outsideair_info_text">실외공기질</li>
              <li className="outsideair_info_name">PM10</li>
              <li className="outsideair_info_unit">㎍/㎥</li>
            </ul>
          </div>
          <div className="outsideaircard_bottom_wrap">
            <div className="outsideair_name_wrap">
              <p className="outsideair_name">미세먼지</p>
            </div>
            <div className="outsideair_data_wrap">
              <p className="outsideair_data">100</p>
              <p className="outsideair_data_unit">㎍/㎥</p>
            </div>
          </div>
        </div>
        <div className="outsideaircard_right_wrap">
          <div className="outsideair_data_text_wrap">
            <div className="outsideair_data_box">
              <p className="outsideair_data_text">매우나쁨</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OutSideAirCard;
