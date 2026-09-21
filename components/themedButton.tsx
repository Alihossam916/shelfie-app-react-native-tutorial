import {
  StyleSheet,
  Pressable,
  type StyleProp,
  type ViewStyle,
  type PressableProps,
} from "react-native";
import { Colors } from "../constants/colors";

type ThemedButtonProps = Omit<PressableProps, "style"> & {
  style?: StyleProp<ViewStyle>;
};
const ThemedButton = ({ style, ...props }: ThemedButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.btn, pressed && styles.pressed, style]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    padding: 18,
    borderRadius: 6,
    marginVertical: 10,
  },
  pressed: {
    opacity: 0.5,
  },
});

export default ThemedButton;
