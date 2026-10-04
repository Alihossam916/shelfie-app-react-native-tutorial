import { StyleSheet, Text } from "react-native";
import { useUser } from "../../hooks/useUser";

// themed components
import Spacer from "../../components/spacer";
import ThemedView from "../../components/themedView";
import ThemedText from "../../components/themedText";
import ThemedButton from "../../components/themedButton";

const Profile = () => {
  const { logout } = useUser();
  return (
    <ThemedView style={styles.container}>
      <ThemedText title={true} style={styles.heading}>
        Your Email
      </ThemedText>
      <Spacer />
      <ThemedText>Time to start reading books...</ThemedText>
      <Spacer />
      <ThemedButton onPress={logout}>
        <Text style={{ color: "#f2f2f2" }}>Logout</Text>
      </ThemedButton>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});

export default Profile;
