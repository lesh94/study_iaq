import React from "react";
import "./WeatherCard.scss";
import weatherImg from "../../src/assets/weather_card_img_1.png";
import weatherIcon from "../../src/assets/weather_icon_1.png";

const WeatherCard = () => {
  return (
    <>
      <div className="weatherCard_wrap">
        <div className="weatherCard_img_wrap">
          <img src={weatherImg} alt="weatherCard_img"></img>
        </div>
        <div className="weatherCard_icon_text_wrap">
          <div className="weatherCard_left">
            <div className="weather_icon">
              <img src={weatherIcon} alt="weather_icon"></img>
            </div>
            <div className="weather_info_text_wrap">
              <p className="weather_info_text">구름많음</p>
            </div>
          </div>
          <div className="weatherCard_right">
            <div className="time_wrap">
              <p>15:46</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
