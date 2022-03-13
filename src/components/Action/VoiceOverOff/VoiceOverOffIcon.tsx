import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IVoiceOverOffProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function VoiceOverOffIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IVoiceOverOffProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.72 4.79331C14.37 5.14331 14.28 5.67331 14.47 6.14331C14.77 6.89331 14.79 7.72331 14.52 8.48331C14.36 8.94331 14.46 9.46331 14.81 9.80331C15.41 10.4033 16.47 10.2733 16.83 9.49331C17.47 8.10331 17.43 6.50331 16.71 5.08331C16.31 4.33331 15.3 4.20331 14.72 4.79331ZM18.18 1.27331C17.78 1.67331 17.72 2.29331 18.05 2.75331C19.98 5.43331 20 9.00331 18.14 11.8233C17.83 12.2833 17.91 12.9033 18.3 13.2933C18.81 13.8033 19.68 13.7533 20.11 13.1633C22.68 9.65331 22.63 4.96331 19.94 1.39331C19.51 0.833314 18.68 0.773314 18.18 1.27331ZM8.43 3.42331L11.96 6.95331C11.76 5.09331 10.29 3.62331 8.43 3.42331ZM2.71 1.94331C2.32 2.33331 2.32 2.96331 2.71 3.35331L4.62 5.26331C4.06 6.15331 3.83 7.27331 4.15 8.46331C4.51 9.79331 5.59 10.8633 6.92 11.2333C8.11 11.5633 9.23 11.3233 10.12 10.7633L14.52 15.1633C12.74 13.9833 9.78 13.3833 8 13.3833C5.33 13.3833 0 14.7233 0 17.3833V18.3833C0 18.9333 0.45 19.3833 1 19.3833H15C15.55 19.3833 16 18.9333 16 18.3833V17.3833C16 17.0133 15.89 16.6833 15.71 16.3633L18.02 18.6733C18.41 19.0633 19.04 19.0633 19.43 18.6733C19.82 18.2833 19.82 17.6533 19.43 17.2633L4.12 1.94331C3.73 1.55331 3.1 1.55331 2.71 1.94331Z" fill={colorCode} />
    </svg>
  );
}