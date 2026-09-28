import { TextInput, useColorScheme, type TextInputProps } from "react-native";
import { Colors } from "../constants/colors";

const ThemedTextInput = ({ style, ...props }: TextInputProps) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  return (
    <TextInput
      style={[
        {
          backgroundColor: theme.uiBackground,
          color: theme.text,
          padding: 20,
          borderRadius: 6,
        },
        style,
      ]}
      placeholderTextColor={theme.text}
      {...props}
    />
  );
};

export default ThemedTextInput;
