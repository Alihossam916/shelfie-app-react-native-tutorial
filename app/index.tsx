import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from "expo-router";

const logo = require("../assets/images/frame_03_edited.png");
const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.img} />
      <Text style={styles.text}>The Number 1</Text>
      <Text style={styles.secondaryText}>reading list app</Text>
      <Text style={styles.acheivment}>
        finally fixed the expo sdk version problem
      </Text>
      <Link href={"/about"} style={styles.link}>
        about page
      </Link>
      <Link href={"/contact"} style={styles.link}>
        contact page
      </Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  secondaryText: {
    fontSize: 20,
    fontWeight: "semibold",
    color: "gray",
    padding: 10,
  },
  img: {
    marginVertical: 30,
  },
  acheivment: {
    color: "red",
    boxShadow: "1px 1px 4px 4px #fff",
    padding: 20,
    marginBottom: 10,
  },
  link: {
    padding: 10,
    margin: 5,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    borderColor: "white",
    borderWidth: 2,
    borderStyle: "solid",
  },
});
