import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact</Text>
      <Link href={"/"} style={styles.link}>
        return to home page
      </Link>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textDecorationLine: 'underline'
  },
  link: {
    color: "#000",
    padding: 14,
    marginVertical: 10,
    borderColor: "black",
    borderWidth: 2,
    borderStyle: "solid",
    fontSize: 14,
    fontWeight: "bold",
  },
});
