import React, { useEffect, useState } from "react";
import "./App.css";
import "./App.scss";
import axios from "axios";
import Header from "./components/Header";
import TitleText from "./components/TitleText";
import Location from "./components/Location";
import OutSideAirCard from "./components/OutSideAirCard";
import WeatherCard from "./components/WeatherCard";
import OutsideTemperature from "./components/OutsideTemperature";
import InsideAllAir from "./components/InsideAllAir";
import InsideAllAirTemperature from "./components/InsideAllAirTemperature";
import temperatureIcon from "./assets/temperature_icon.png";
import Humidity from "./assets/humidity_icon.png";
import AirPowerSet from "./components/AirPowerSet";
import InSideAirHalf from "./components/InSideAirHalf";
import WeatherSection from "./sections/WeatherSection";
import OutdoorAirDetailSection from "./sections/OutdoorAirDetailSection";
import OutdoorAirSection from "./sections/OutdoorAirSection";
import IndoorAirSection from "./sections/IndoorAirSection";
import RommAirSection from "./sections/RommAirSection";

type WeatherItem = {
  baseDate: string;
  baseTime: string;
  category: string;
  nx: number;
  ny: number;
  fcstDate: string;
  fcstTime: string;
  fcstValue: string;
};

//기상청 api 초기 타입 설정//
type WeatherApiResponse = {
  response: {
    header: {
      resultCode: string;
      resultMsg: string;
    };
    body: {
      dataType: string;
      items: {
        item: WeatherItem[];
      };
    };
  };
};

function App() {
  const [weather, setWeather] = useState<WeatherItem[]>([]);
  const WEATHER_KEY = decodeURIComponent(
    "K1OgN4jQSVxD51h95Oc2CsLf3NN0qspauihgrYFaKEWAADc6b%2Bx7P6e0jHcK7G5%2FTGrp8AUhxB5bTdEbmj7OnQ%3D%3D"
  );
  const Api = async () => {
    //axios 사용 url <> 타입 지정해야함//
    try {
      const { base_date, base_time } = getBaseDateTime(); //기상청 현재시간 데이터 실시간
      const response = await axios.get<WeatherApiResponse>(
        "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst",
        {
          params: {
            serviceKey: WEATHER_KEY,
            numOfRows: 25,
            pageNo: 1,
            dataType: "JSON",
            base_date: base_date,
            base_time: base_time,
            nx: 62,
            ny: 125,
          },
        }
      );
      //기상청 api 받아오는 배열이 있는데 거기에 들어가기위한 순서 response.data > response.body 로 > items > item 으로//
      //이동한 새로운 선언 items//
      const items = response.data.response.body.items.item;
      //받은 api로 setWeather로 저장?//
      setWeather(items);
      console.log(items);
      //axios catch 오류 관련 필수 설정값 (그냥 외우기)//
    } catch (error) {
      console.error("기상청 API 에러:", error);
    }
  };

  const getBaseDateTime = () => {
    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();

    if (minute < 45) {
      hour -= 1;
    }

    const baseDateTime = new Date(now);
    if (hour < 0) {
      hour = 23;
      baseDateTime.setDate(baseDateTime.getDate() - 1);
    }
    const base_date = baseDateTime.toISOString().slice(0, 10).replace(/-/g, "");
    const base_time = `${hour.toString().padStart(2, "0")}30`;

    return { base_date, base_time };
  };
  useEffect(() => {
    Api();
  }, []);

  return (
    <>
      <div className="app_wrap">
        <Header />
        <div className="app_contents_wrap">
          <div className="app_section_left">
            <OutdoorAirSection />
          </div>
          <div className="line"></div>
          <div className="app_section_right">
            <div className="app_section_right_left">
              <IndoorAirSection />
            </div>
            <div className="app_section_right_right">
              <RommAirSection />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
