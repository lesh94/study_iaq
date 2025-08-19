import React from "react";
import "./OutdoorAirDetailSection.scss";
import TitleText from "../components/TitleText";
import OutSideAirCard from "../components/OutSideAirCard";

const OutdoorAirDetailSection = () => {
  return (
    <>
      <div className="OutdoorAirDetailSection_wrap">
        <div className="OutdoorAirDetailSection_top">
          <TitleText text="실외 공기질" fontSize="16px" fontWeight={400} />
        </div>
        <div className="OutdoorAirDetailSection_bottom">
          <div className="OutdoorAirDetailSection_bottom_left">
            <OutSideAirCard />
            <OutSideAirCard />
          </div>
          <div className="OutdoorAirDetailSection_bottom_right">
            <OutSideAirCard />
            <OutSideAirCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default OutdoorAirDetailSection;
