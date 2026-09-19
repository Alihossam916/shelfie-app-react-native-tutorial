import { StyleSheet } from "react-native";
import { Link } from "expo-router";

// themed components
import ThemedView from "../components/themedView";
import ThemedText from "../components/themedText";
import Spacer from "../components/spacer";

const Contact = () => {
  return (
    <ThemedView style={[styles.container]}>
      <ThemedText style={[styles.title]} title={true}>
        Contact Page
      </ThemedText>

      <Spacer height={20} />

      <Link href={"/"} style={[styles.link]}>
        <ThemedText>return to home page</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  link: {
    color: "#000",
    padding: 14,
    fontSize: 20,
    textDecorationLine: "underline",
  },
});
