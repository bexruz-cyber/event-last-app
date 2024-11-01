import * as React from "react";
import Svg, { Rect, Path, SvgProps } from "react-native-svg";
const Arrow = (props: SvgProps) => (
  <Svg
    width={37}
    height={36}
    viewBox="0 0 37 36"
    fill="none"
    {...props}
  >
    <Rect x={0.5} width={36} height={36} rx={18} fill="#FF7D38" />
    <Path
      d="M8.5 17.25C8.08579 17.25 7.75 17.5858 7.75 18C7.75 18.4142 8.08579 18.75 8.5 18.75V17.25ZM29.0303 18.5303C29.3232 18.2374 29.3232 17.7626 29.0303 17.4697L24.2574 12.6967C23.9645 12.4038 23.4896 12.4038 23.1967 12.6967C22.9038 12.9896 22.9038 13.4645 23.1967 13.7574L27.4393 18L23.1967 22.2426C22.9038 22.5355 22.9038 23.0104 23.1967 23.3033C23.4896 23.5962 23.9645 23.5962 24.2574 23.3033L29.0303 18.5303ZM8.5 18.75H28.5V17.25H8.5V18.75Z"
      fill="#FEFEFF"
    />
  </Svg>
);
export default Arrow;