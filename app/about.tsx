import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { Link } from "expo-router";
import { Colors } from "../constants/colors";

const About = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.text, { color: theme.title }]}>About</Text>
      <Link href={"/"} style={[styles.link, { color: theme.text }]}>
        return to home page
      </Link>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
  link: {
    padding: 10,
    margin: 5,
    fontSize: 20,
    fontWeight: "bold",
    borderColor: "white",
    borderWidth: 2,
    borderStyle: "solid",
  },
});
