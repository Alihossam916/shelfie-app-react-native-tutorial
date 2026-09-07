import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About</Text>
      <Link href={"/"} style={styles.link}>
        return to home page
      </Link>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  link: {
    padding: 10,
    margin: 5,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    borderColor: "white",
    borderWidth: 2,
    borderStyle: "solid",
  },
});
