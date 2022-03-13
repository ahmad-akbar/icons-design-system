import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IAlarmIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AlarmIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IAlarmIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.87 13.6333L10.5 11.6333V7.10332C10.5 6.70332 10.18 6.38332 9.78001 6.38332H9.72001C9.32001 6.38332 9.00001 6.70332 9.00001 7.10332V11.8233C9.00001 12.1733 9.18001 12.5033 9.49001 12.6833L13.14 14.8733C13.48 15.0733 13.92 14.9733 14.12 14.6333C14.33 14.2833 14.22 13.8333 13.87 13.6333ZM19.18 3.39332L16.1 0.833319C15.68 0.483319 15.05 0.533319 14.69 0.963319C14.34 1.38332 14.4 2.01332 14.82 2.37332L17.89 4.93332C18.31 5.28332 18.94 5.23332 19.3 4.80332C19.66 4.38332 19.6 3.75332 19.18 3.39332ZM2.10001 4.93332L5.17001 2.37332C5.60001 2.01332 5.66001 1.38332 5.30001 0.963319C4.95001 0.533319 4.32001 0.483319 3.90001 0.833319L0.820006 3.39332C0.400006 3.75332 0.340006 4.38332 0.700006 4.80332C1.05001 5.23332 1.68001 5.28332 2.10001 4.93332ZM10 2.38332C5.03001 2.38332 1.00001 6.41332 1.00001 11.3833C1.00001 16.3533 5.03001 20.3833 10 20.3833C14.97 20.3833 19 16.3533 19 11.3833C19 6.41332 14.97 2.38332 10 2.38332ZM10 18.3833C6.14001 18.3833 3.00001 15.2433 3.00001 11.3833C3.00001 7.52332 6.14001 4.38332 10 4.38332C13.86 4.38332 17 7.52332 17 11.3833C17 15.2433 13.86 18.3833 10 18.3833Z" fill={colorCode} />
    </svg>
  );
}