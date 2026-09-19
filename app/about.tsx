import { StyleSheet } from "react-native";
import { Link } from "expo-router";

// themed components
import ThemedView from "../components/themedView";
import ThemedText from "../components/themedText";
import Spacer from "../components/spacer";

const About = () => {
  return (
    <ThemedView style={[styles.container]}>
      <ThemedText style={[styles.text]} title={true}>
        About Page
      </ThemedText>

      <Spacer height={20} />

      <Link href={"/"} style={[styles.link]}>
        <ThemedText>return to home page</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
  link: {
    padding: 10,
    margin: 5,
    fontSize: 20,
    textDecorationLine: "underline",
  },
});
