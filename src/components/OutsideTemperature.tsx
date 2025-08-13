import React from "react";
import "./OutsideTemperature.scss";
import { BarChart, Bar, ResponsiveContainer, YAxis } from "recharts";

type OutsideTemperatureProps = {
  domain: [number, number];
  topLabel: string; // 상단 텍스트 (예: "45°C")
  showMidLabel?: boolean; // 중앙 0°C 표시 여부
  midLabel?: string; // 중앙 텍스트 (예: "0°C")
  bottomLabel: string; // 하단 텍스트 (예: "-45°C")
  dataLabel: string; // 데이터 텍스트 (예: "온도 28°C")
  barcolor: string;
};

const OutsideTemperature = ({
  domain,
  topLabel,
  showMidLabel = true,
  midLabel = "0°C",
  bottomLabel,
  dataLabel,
  barcolor,
}: OutsideTemperatureProps) => {
  const data = [
    {
      name: "Page A",
      pv: 26,
    },
  ];
  return (
    <>
      <div className="outsideTemperature_wrap">
        <div className="outsideTemperature_top">
          <p>{topLabel}</p>
        </div>
        <div className="outsideTemperature_mid">
          {showMidLabel && <p>{midLabel}</p>}
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={280}
              height={280}
              data={data}
              margin={{
                top: 5,
                right: 85,
                left: 30,
                bottom: 5,
              }}
              barSize={16}
            >
              <defs>
                <linearGradient id="bgGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#c7c7c7ff" />
                  <stop offset="10%" stopColor="#E0E3E7" />
                  <stop offset="20%" stopColor="#E0E3E7" />
                  <stop offset="30%" stopColor="#E0E3E7" />
                  <stop offset="50%" stopColor="#E0E3E7" />
                  <stop offset="80%" stopColor="#E0E3E7" />
                  <stop offset="90%" stopColor="#E0E3E7" />
                  <stop offset="95%" stopColor="#E0E3E7" />
                  <stop offset="100%" stopColor="#c7c7c7ff" />
                </linearGradient>
              </defs>
              <Bar
                dataKey="pv"
                fill={barcolor}
                background={{ fill: "url(#bgGradient)", radius: 6 }}
                radius={[6, 6, 0, 0]}
              />
              <YAxis
                domain={domain}
                axisLine={false}
                tickLine={false}
                tick={false}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="outsideTemperature_bottom">
          <p>{bottomLabel}</p>
          <div className="outsideTemperature_data">
            <p>{dataLabel}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OutsideTemperature;
