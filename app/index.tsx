import { StyleSheet, Text } from "react-native";
import { Link } from "expo-router";

// themed components
import ThemedView from "../components/themedView";
import ThemedLogo from "../components/themedLogo";
import ThemedText from "../components/themedText";
import Spacer from "../components/spacer";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <Spacer height={30} />

      <ThemedText style={styles.text} title={true}>
        The Number 1
      </ThemedText>

      <Spacer height={10} />
      <ThemedText style={styles.secondaryText}>reading list app</ThemedText>
      <Spacer />

      <Link href={"/login"} style={styles.link}>
        <ThemedText>Login page</ThemedText>
      </Link>

      <Spacer height={20} />

      <Link href={"/register"} style={styles.link}>
        <ThemedText>Register page</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Home;

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
  secondaryText: {
    fontSize: 20,
    fontWeight: "semibold",
    padding: 10,
  },
  link: {
    padding: 10,
    margin: 5,
    fontSize: 20,
    textDecorationLine: "underline",
  },
});
