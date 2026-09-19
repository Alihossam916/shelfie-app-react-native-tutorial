import { StyleSheet, Image, useColorScheme } from "react-native";

const darkLogo = require("../assets/img/logo_dark.png");
const lightLogo = require("../assets/img/logo_light.png");

const ThemedLogo = ({ ...props }) => {
  const colorScheme = useColorScheme();
  const logo = colorScheme === "dark" ? darkLogo : lightLogo;

  return <Image source={logo} {...props} />;
};

export default ThemedLogo;

const styles = StyleSheet.create({});
