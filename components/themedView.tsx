import {
  View,
  useColorScheme,
  type ViewProps
} from "react-native";
import { Colors } from "../constants/colors";

const ThemedView = ({ style, ...props }: ViewProps) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];
  return (
    <View
      style={[
        {
          backgroundColor: theme.background,
        },
        style,
      ]}
      {...props}
    />
  );
};

export default ThemedView;
