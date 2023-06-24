import React, { FC, useState, useRef, useCallback } from "react";
import { PanResponder } from "react-native";
import Svg, {
  Path,
  Circle,
  G,
  Text,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
import Metrics from "../theme/metrics";

interface Props {
  btnRadius?: number;
  dialRadius?: number;
  dialWidth?: number;
  meterColor?: string;
  meterWidth?: number;
  gradientColorFrom?: string;
  gradientColorTo?: string;
  textColor?: string;
  fillColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
  textSize?: number;
  value?: number;
  min?: number;
  max?: number;
  xCenter?: number;
  yCenter?: number;
  onValueChange?: (x: number) => number;
}

const CircleSlider: FC<Props> = ({
  btnRadius = 15,
  dialRadius = 130,
  dialWidth = 5,
  meterColor = "#0cd",
  meterWidth = 10,
  gradientColorFrom = "#fff",
  gradientColorTo = "#000",
  textColor = "#fff",
  fillColor = "none",
  strokeColor = "#fff",
  strokeWidth = 0.5,
  textSize = 10,
  value = 0,
  min = 0,
  max = 359,
  xCenter = Metrics.screenWidth / 2,
  yCenter = Metrics.screenHeight / 2,
  onValueChange = (x) => x,
}) => {
  const [angle, setAngle] = useState(value);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (e, gs) => true,
      onStartShouldSetPanResponderCapture: (e, gs) => true,
      onMoveShouldSetPanResponder: (e, gs) => true,
      onMoveShouldSetPanResponderCapture: (e, gs) => true,
      onPanResponderMove: (e, gs) => {
        let xOrigin = xCenter - (dialRadius + btnRadius);
        let yOrigin = yCenter - (dialRadius + btnRadius);
        let a = cartesianToPolar(gs.moveX - xOrigin, gs.moveY - yOrigin);

        if (a <= min) {
          setAngle(min);
        } else if (a >= max) {
          setAngle(max);
        } else {
          setAngle(a);
        }
      },
    })
  ).current;

  const polarToCartesian = useCallback(
    (angle: number) => {
      let r = dialRadius;
      let hC = dialRadius + btnRadius;
      let a = ((angle - 90) * Math.PI) / 180.0;

      let x = hC + r * Math.cos(a);
      let y = hC + r * Math.sin(a);
      return { x, y };
    },
    [dialRadius, btnRadius]
  );

  const cartesianToPolar = useCallback(
    (x: number, y: number) => {
      let hC = dialRadius + btnRadius;

      if (x === 0) {
        return y > hC ? 0 : 180;
      } else if (y === 0) {
        return x > hC ? 90 : 270;
      } else {
        return (
          Math.round((Math.atan((y - hC) / (x - hC)) * 180) / Math.PI) +
          (x > hC ? 90 : 270)
        );
      }
    },
    [dialRadius, btnRadius]
  );

  const width = (dialRadius + btnRadius) * 2;
  const bR = btnRadius;
  const dR = dialRadius;
  const startCoord = polarToCartesian(0);
  var endCoord = polarToCartesian(angle);

  return (
    <Svg width={width} height={width}>
      <Defs>
        <LinearGradient id="gradient" x1="0%" y1="100%" x2="100%" y2="10%">
          <Stop offset="0%" stopColor={gradientColorFrom} stopOpacity="1" />
          <Stop offset="50%" stopColor={gradientColorTo} stopOpacity=".8" />
          <Stop offset="100%" stopColor={gradientColorTo} stopOpacity="1" />
        </LinearGradient>
      </Defs>
      {/* <Defs>
        <RadialGradient id="gradient" cx="50%" cy="50%" rx="50%" ry="50%">
          <Stop offset="0%" stopColor={gradientColorFrom} stopOpacity="1" />
          <Stop offset="100%" stopColor={gradientColorTo} stopOpacity="1" />
        </RadialGradient>
      </Defs> */}

      <Circle
        r={dR}
        cx={width / 2}
        cy={width / 2}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        fill={fillColor}
      />

      <Path
        // stroke={meterColor}
        stroke="url(#gradient)"
        strokeLinecap="round"
        strokeWidth={dialWidth}
        fill="none"
        d={`M${startCoord.x} ${startCoord.y} A ${dR} ${dR} 0 ${
          angle > 180 ? 1 : 0
        } 1 ${endCoord.x} ${endCoord.y}`}
      />

      <G x={endCoord.x - bR} y={endCoord.y - bR}>
        <Circle
          r={bR}
          cx={bR}
          cy={bR}
          scale={0.8}
          //   fill={meterColor}
          fill="white"
          stroke={meterColor}
          strokeWidth={meterWidth}
          {...panResponder.panHandlers}
        />
        <Text
          x={bR}
          y={bR + textSize / 2}
          fontSize={textSize}
          fill={textColor}
          textAnchor="middle"
        >
          {onValueChange(angle) + ""}
        </Text>
      </G>
    </Svg>
  );
};

export default React.memo(CircleSlider);
