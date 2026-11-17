import { StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { useBooks } from "../../../hooks/useBooks";
import { BookInput as book } from "../../../contexts/booksContext";

// themed components
import ThemedText from "../../../components/themedText";
import ThemedButton from "../../../components/themedButton";
import ThemedCard from "../../../components/themedCard";
import ThemedView from "../../../components/themedView";
import ThemedLoader from "../../../components/themedLoader";
import Spacer from "../../../components/spacer";

const BookDetails = () => {
  const [book, setBook] = useState<book | null>(null);
  const { id } = useLocalSearchParams<{ id: string }>();
  const { fetchBookById } = useBooks();

  useEffect(() => {
    async function loadBook() {
      const bookData = await fetchBookById(id);
      setBook(bookData);
    }

    loadBook();
  }, [id]);

  if (!book) {
    return (
      <ThemedView safe={true} style={styles.container}>
        <ThemedLoader />
      </ThemedView>
    );
  }

  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemedCard style={styles.card}>
        <ThemedText style={styles.title}>{book?.title}</ThemedText>
        <ThemedText>Written by {book?.author}</ThemedText>
        <Spacer />

        <ThemedText title={true}>Book description</ThemedText>
        <Spacer height={10} />

        <ThemedText>{book?.description}</ThemedText>
      </ThemedCard>
    </ThemedView>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  title: {
    fontSize: 22,
    marginVertical: 10,
  },
  card: {
    margin: 20,
  },
});
