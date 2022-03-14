import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IFordward5IconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function Fordward5Icon({
  size = 24,
  rotate = 0,
  color = "black",
}: IFordward5IconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 17 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15.87 11.3833C15.37 11.3833 14.96 11.7533 14.89 12.2433C14.41 15.6133 11.12 18.0833 7.47001 17.2033C5.22001 16.6633 3.56001 14.9333 3.08001 12.6733C2.27001 8.80333 5.22001 5.38333 8.95001 5.38333V8.17333C8.95001 8.62333 9.49001 8.84333 9.80001 8.52333L13.59 4.73333C13.79 4.53333 13.79 4.22333 13.59 4.02333L9.80001 0.233332C9.49001 -0.0766677 8.95001 0.143332 8.95001 0.583332V3.38333C4.01001 3.38333 0.110007 7.86333 1.11001 12.9833C1.71001 16.0933 4.01001 18.4833 7.10001 19.1733C11.93 20.2533 16.25 16.9733 16.87 12.5033C16.96 11.9133 16.47 11.3833 15.87 11.3833ZM9.43001 13.5333C9.38001 13.6033 9.32001 13.6633 9.25001 13.7033C9.18001 13.7433 9.08001 13.7633 8.98001 13.7633C8.81001 13.7633 8.67001 13.7133 8.56001 13.6133C8.45001 13.5133 8.39001 13.3733 8.37001 13.2033H7.53001C7.54001 13.4033 7.58001 13.5733 7.66001 13.7333C7.74001 13.8933 7.85001 14.0133 7.98001 14.1233C8.11001 14.2333 8.27001 14.3133 8.44001 14.3633C8.61001 14.4133 8.79001 14.4433 8.97001 14.4433C9.21001 14.4433 9.43001 14.4033 9.61001 14.3233C9.79001 14.2433 9.94001 14.1433 10.06 14.0133C10.18 13.8833 10.27 13.7333 10.33 13.5633C10.39 13.3933 10.42 13.2133 10.42 13.0233C10.42 12.8033 10.39 12.5933 10.33 12.4233C10.27 12.2533 10.19 12.0933 10.08 11.9733C9.97001 11.8533 9.83001 11.7533 9.67001 11.6933C9.51001 11.6333 9.33001 11.5933 9.12001 11.5933C9.05001 11.5933 8.98001 11.6033 8.92001 11.6133C8.86001 11.6233 8.79001 11.6333 8.74001 11.6533C8.69001 11.6733 8.64001 11.6833 8.59001 11.7033C8.54001 11.7233 8.51001 11.7433 8.48001 11.7533L8.59001 10.8333H10.29V10.1233H7.90001L7.65001 12.2933L8.32001 12.4633C8.35001 12.4333 8.38001 12.4033 8.42001 12.3733C8.46001 12.3433 8.49001 12.3233 8.54001 12.3033C8.59001 12.2833 8.64001 12.2633 8.69001 12.2533C8.74001 12.2433 8.82001 12.2333 8.89001 12.2333C9.01001 12.2333 9.11001 12.2533 9.19001 12.2833C9.27001 12.3133 9.35001 12.3733 9.40001 12.4333C9.45001 12.4933 9.50001 12.5733 9.53001 12.6733C9.56001 12.7733 9.57001 12.8633 9.57001 12.9833C9.57001 13.1033 9.56001 13.2033 9.54001 13.2933C9.52001 13.3833 9.48001 13.4633 9.43001 13.5333Z" fill={colorCode} />
    </svg>
  );
}