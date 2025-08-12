import React from "react";
import "./TitleText.scss";

type TextProps = {
  text: string;
  fontSize?: string;
  fontWeight: number;
};

const TitleText = ({ text, fontSize = "16px", fontWeight }: TextProps) => {
  return (
    <>
      <div className="title_text_wrap">
        <p style={{ fontSize, fontWeight }}>{text}</p>
      </div>
    </>
  );
};

export default TitleText;
