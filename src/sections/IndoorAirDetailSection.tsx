import React from "react";
import TitleText from "../components/TitleText";

const IndoorAirDetailSection = () => {
  return (
    <>
      <div className="IndoorAirDetailSection_wrap">
        <div className="IndoorAirDetailSection_top">
          <TitleText
            text="전체 평균 실내 공기질"
            fontSize="24px"
            fontWeight={500}
          />
        </div>
        <div className="IndoorAirDetailSection_mid">
          <div className="IndoorAirDetailSection_mid_top"></div>
          <div className="IndoorAirDetailSection_mid_bottom"></div>
        </div>
        <div className="IndoorAirDetailSection_bottom"></div>
      </div>
    </>
  );
};

export default IndoorAirDetailSection;
