import { StyleSheet } from "react-native";

// themed components
import Spacer from "../../components/spacer";
import ThemedView from "../../components/themedView";
import ThemedText from "../../components/themedText";

const Profile = () => {
return (
    <ThemedView style={styles.container}>
      <ThemedText title={true} style={styles.heading}>
        Your Email
      </ThemedText>
      <Spacer />
      <ThemedText>
        Time to start reading books...
      </ThemedText>
      <Spacer />
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