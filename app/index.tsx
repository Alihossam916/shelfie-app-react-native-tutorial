import { useState } from "react";
import { ActivityIndicator, StyleSheet, Text } from "react-native";
import { Link } from "expo-router";

// appwrite
import client from "../lib/appwrite";

// themed components
import ThemedView from "../components/themedView";
import ThemedLogo from "../components/themedLogo";
import ThemedText from "../components/themedText";
import ThemedButton from "../components/themedButton";
import Spacer from "../components/spacer";

const Home = () => {
  const [pingStatus, setPingStatus] = useState("Not checked yet");
  const [isPinging, setIsPinging] = useState(false);

  const handlePing = async () => {
    setIsPinging(true);
    setPingStatus("Pinging...");

    try {
      const response = await client.ping();
      setPingStatus(`Connected! Server replied "${String(response)}"`);
    } catch (error) {
      setPingStatus(
        `Ping failed: ${error instanceof Error ? error.message : String(error)}`
      );
    } finally {
      setIsPinging(false);
    }
  };

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

      <Link href={"/register"} style={styles.link}>
        <ThemedText>Register page</ThemedText>
      </Link>

      <Link href={"/profile"} style={styles.link}>
        <ThemedText>Profile page</ThemedText>
      </Link>

      <Spacer height={30} />

      <ThemedButton onPress={handlePing} disabled={isPinging}>
        {isPinging ? (
          <ActivityIndicator color="#f2f2f2" />
        ) : (
          <Text style={styles.btnText}>Ping Appwrite</Text>
        )}
      </ThemedButton>

      <ThemedText style={styles.pingStatus}>{pingStatus}</ThemedText>
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
  btnText: {
    color: "#f2f2f2",
    textAlign: "center",
  },
  pingStatus: {
    textAlign: "center",
    marginTop: 5,
  },
});
