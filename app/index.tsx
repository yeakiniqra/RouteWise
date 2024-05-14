import { Text, View, Image, StyleSheet} from "react-native";
import { Link } from "expo-router";
import { useFonts } from "expo-font";

export default function Index() {
  let [fontsLoaded] = useFonts({
    'space-mono': require('@/assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }


  return (
    <View style={styles.container}>
    <Text style={styles.main} >Sign Up & Start Travel</Text>
    <Image
      source={require("@/assets/images/open-image.png")}
      style={styles.logo}
    />
    <Link href="/signup" style={styles.button}>
      <Text style={styles.buttonText}>Get Started</Text>
    </Link>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 300,
    height: 300,
    objectFit: "contain",
    alignSelf: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#132B60",
    padding: 12,
    paddingRight: 40,
    paddingLeft: 40,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontFamily: 'space-mono',
    textAlign: "center",
  },
  main: {
    fontSize: 25,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#132B60",
  }
});