import { StyleSheet } from "react-native";

// themed components
import Spacer from "../../components/spacer";
import ThemedView from "../../components/themedView";
import ThemedText from "../../components/themedText";

const Books = () => {
return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.heading}>
        Your Reading List
      </ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
    },
    heading: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
    },
});

export default Books;