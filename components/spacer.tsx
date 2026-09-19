import { View, type DimensionValue } from "react-native";
import React from "react";

interface StyleProps {
  width?: DimensionValue;
  height?: number;
}
const Spacer = ({ width = "100%", height = 40 }: StyleProps) => {
  return <View style={{ width, height }} />;
};

export default Spacer;
