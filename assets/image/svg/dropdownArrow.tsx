import * as React from "react";
import Svg, { Rect, Path, SvgProps } from "react-native-svg";
const DropwDownLogo = (props: SvgProps) => (
  <Svg
    width={11}
    height={11}
    viewBox="0 0 11 11"
    fill="none"
    {...props}
  >
    <Rect width={11} height={11} fill="#FEFEFF" />
    <Path
      d="M8.25 4.125C8.25 4.125 6.22463 6.875 5.5 6.875C4.77538 6.875 2.75 4.125 2.75 4.125"
      stroke="#252727"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default DropwDownLogo;
