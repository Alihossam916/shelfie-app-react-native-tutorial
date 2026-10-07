import {
  useColorScheme,
  ActivityIndicator,
  type ActivityIndicatorProps,
} from "react-native";
import { Colors } from "../constants/colors";

// themed components
import ThemedView from "./themedView";

const ThemedLoader = ({ size }: ActivityIndicatorProps) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size={size ?? "large"} color={theme.text} />
    </ThemedView>
  );
};

export default ThemedLoader;
