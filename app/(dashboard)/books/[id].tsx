import { StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

// themed components
import ThemedText from "../../../components/themedText";
import ThemedButton from "../../../components/themedButton";
import ThemedCard from "../../../components/themedCard";
import ThemedView from "../../../components/themedView";
import Spacer from "../../../components/spacer";

const BookDetails = () => {
  const { id } = useLocalSearchParams();

  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemedText>Book Details - {id}</ThemedText>
    </ThemedView>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
});
