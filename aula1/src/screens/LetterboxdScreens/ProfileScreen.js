import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Avatar, AvatarImage, AvatarFallbackText } from "@/src/components/ui/avatar";
import { Button, ButtonText } from "@/src/components/ui/button";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>

        {/* Header */}
        <View style={styles.header}>
          <Avatar size="xl" className="mb-2">
            <AvatarImage
              source={require("../../../assets/letterboxd/avatar1.png")}
            />
            <AvatarFallbackText>Sophia</AvatarFallbackText>
          </Avatar>

          <Text style={styles.username}>Sophia</Text>
          <Text style={styles.handle}>@dunsparce</Text>

          <Button
            variant="outline"
            size="sm"
            className="rounded-full border-[#00e054] mt-2"
          >
            <ButtonText className="text-[#00e054] text-xs">Edit Profile</ButtonText>
          </Button>
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
            <Avatar size="xl" className="rounded">
              <AvatarImage
                source={require("../../../assets/letterboxd/silencio dos incentes.png")}
              />
              <AvatarFallbackText>F1</AvatarFallbackText>
            </Avatar>
            <Avatar size="xl" className="rounded">
              <AvatarImage
                source={require("../../../assets/letterboxd/brilho eterno.png")}
              />
              <AvatarFallbackText>F2</AvatarFallbackText>
            </Avatar>
            <Avatar size="xl" className="rounded">
              <AvatarImage
                source={require("../../../assets/letterboxd/cidade de deus.png")}
              />
              <AvatarFallbackText>F3</AvatarFallbackText>
            </Avatar>
            <Avatar size="xl" className="rounded">
              <AvatarImage
                source={require("../../../assets/letterboxd/iluminado.png")}
              />
              <AvatarFallbackText>F4</AvatarFallbackText>
            </Avatar>
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