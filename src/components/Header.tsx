import React from "react";
import "./Header.scss";
import logoImg from "../../src/assets/logo_img.png";

const Header = () => {
  return (
    <>
      <div className="header_wrap">
        <div className="logo_header_text_wrap">
          <div className="logo_img">
            <img src={logoImg} alt="logo_img"></img>
          </div>
          <div className="header_text">
            <p>IoT 공기질 모니터링 시스템</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
