import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recriação de Apps</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/youtube")}
      >
        <Text style={styles.buttonText}>YouTube</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/whatsapp")}
      >
        <Text style={styles.buttonText}>WhatsApp</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/letterboxd")}
      >
        <Text style={styles.buttonText}>Letterboxd</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111",
  },
  title: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#333",
    padding: 15,
    width: 200,
    marginBottom: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});