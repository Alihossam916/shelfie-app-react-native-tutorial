import { StyleSheet, View, useColorScheme, type ViewProps } from "react-native";
import { Colors } from "../constants/colors";

const ThemedCard = ({ style, ...props }: ViewProps) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  return (
    <View
      style={[
        {
          backgroundColor: theme.uiBackground,
        },
        styles.card,
        style,
      ]}
      {...props}
    />
  );
};

export default ThemedCard;

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 5,
  },
});
