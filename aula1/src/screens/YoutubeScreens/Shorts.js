import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// Biblioteca que permite inserir videos
import { Video } from "expo-av";


const { width, height } = Dimensions.get("window");


  

const videos = [
    require("../../../assets/youtube/video1.mp4"),
    require("../../../assets/youtube/video8.mp4"),
    require("../../../assets/youtube/video2.mp4"),
    require("../../../assets/youtube/video3.mp4"),
    require("../../../assets/youtube/video6.mp4"),
    require("../../../assets/youtube/video5.mp4"),
    require("../../../assets/youtube/video7.mp4"),
    require("../../../assets/youtube/video4.mp4"),
];

export default function ShortsScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.videoPage}>
      <View style={styles.videoSquare}>
        <Video
          source={item}
          style={styles.video}
          resizeMode="cover"
          shouldPlay
          isLooping
          isMuted
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Cabecalho com logo do YouTube */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Ionicons name="logo-youtube" size={28} color="#FF0000" />
          <Text style={styles.logoText}>YouTube</Text>
        </View>
        <View style={styles.icons}>
          <Ionicons name="cast-outline" size={22} color="#fff" />
          <Ionicons name="notifications-outline" size={22} color="#fff" />
          <Ionicons name="search-outline" size={22} color="#fff" />
        </View>
      </View>

      {/* Lista de videos estilo Shorts */}
      <FlatList
        style={styles.list}
        data={videos}
        keyExtractor={(_, index) => String(index)}
        renderItem={renderItem}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        getItemLayout={(_, index) => ({
          length: 56,
          offset: 56 * index,
          index,
        })}
      />

      {/* Navegacao entre telas */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => router.push("/youtube")}>
          <Ionicons name="home-outline" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/shorts")}>
          <Ionicons name="play-circle-outline" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/inscricoes")}>
          <Ionicons name="albums-outline" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/perfil")}>
          <Ionicons name="person-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f0f",
    paddingTop: 40,
  },
  header: {
    height: 56,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 5,
  },
  icons: {
    flexDirection: "row",
    gap: 15,
  },
  list: {
    flex: 1,
    backgroundColor: "#000",
  },
  videoPage: {
    width,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  videoSquare: {
    width: 582,
    height: 1002,
    backgroundColor: "#000",
    overflow: "hidden",
  },
  video: {
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  bottomNav: {
    height: 56,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#272727",
    backgroundColor: "#0f0f0f",
  },
});
