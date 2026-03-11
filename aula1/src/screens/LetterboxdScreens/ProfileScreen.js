import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>

        {/* Header */}
        <View style={styles.header}>
          <Image
            source={require("../../../assets/letterboxd/avatar1.png")}
            style={styles.avatar}
          />

          <Text style={styles.username}>Sophia</Text>
          <Text style={styles.handle}>@dunsparce</Text>

          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>54</Text>
            <Text style={styles.statLabel}>Films</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statNumber}>21</Text>
            <Text style={styles.statLabel}>Reviews</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>Lists</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statNumber}>120</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>

        {/* Favorite Films */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Favorite Films</Text>

          <View style={styles.filmRow}>
            <Image
              source={require("../../../assets/letterboxd/silencio dos incentes.png")}
              style={styles.poster}
            />
            <Image
              source={require("../../../assets/letterboxd/brilho eterno.png")}
              style={styles.poster}
            />
            <Image
              source={require("../../../assets/letterboxd/cidade de deus.png")}
              style={styles.poster}
            />
            <Image
              source={require("../../../assets/letterboxd/iluminado.png")}
              style={styles.poster}
            />
          </View>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#14181c",
  },

  header: {
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 20,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 50,
    marginBottom: 10,
  },

  username: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  handle: {
    color: "#9ab",
    fontSize: 13,
    marginBottom: 10,
  },

  editButton: {
    borderWidth: 1,
    borderColor: "#00e054",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 20,
  },

  editText: {
    color: "#00e054",
    fontSize: 13,
  },

  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#2c3e4f",
  },

  stat: {
    alignItems: "center",
  },

  statNumber: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  statLabel: {
    color: "#9ab",
    fontSize: 12,
  },

  section: {
    padding: 15,
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 10,
  },

  filmRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  poster: {
    width: 80,
    height: 120,
    borderRadius: 4,
  },

});