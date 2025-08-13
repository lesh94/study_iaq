import React from "react";
import locationIcon from "../../src/assets/location_icon.png";
import "./Location.scss";

const Location = () => {
  return (
    <>
      <div className="location_wrap">
        <div className="location_icon_text_wrap">
          <div className="location_left_wrap">
            <div className="location_icon">
              <img src={locationIcon} alt="location_icon"></img>
            </div>
            <div className="location_text">
              <p>서울시 강남구 삼성동</p>
            </div>
          </div>
          <div className="location_right_wrap">
            <div className="time_wrap">
              <p>2024.04.11 목요일</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
