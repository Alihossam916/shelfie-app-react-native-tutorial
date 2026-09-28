import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";

// themed components
import ThemedView from "../../components/themedView";
import ThemedText from "../../components/themedText";
import ThemedButton from "../../components/themedButton";
import ThemedTextInput from "../../components/themedTextInput";
import Spacer from "../../components/spacer";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("register form submitted", email, password);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <Spacer />
        <ThemedText title={true} style={styles.title}>
          Register for an account
        </ThemedText>

        <ThemedTextInput
          style={{ width: "80%", marginBottom: 20 }}
          keyboardType="email-address"
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />
        <ThemedTextInput
          style={{ width: "80%", marginBottom: 20 }}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />

        <ThemedButton onPress={handleSubmit}>
          <Text style={{ color: "#f2f2f2", textAlign: "center" }}>
            Register
          </Text>
        </ThemedButton>

        <Spacer height={100} />
        <Link href={"./login"}>
          <ThemedText style={{ textAlign: "center" }}>Login instead</ThemedText>
        </Link>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
  },
});
