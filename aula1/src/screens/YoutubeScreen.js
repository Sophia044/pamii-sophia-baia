import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const videos = [
{
    id: 1,
    thumb: require("../../assets/youtube/foguetes.png"),
    avatar: require("../../assets/youtube/avatarfoguetes.png"),
    title: "Super Xandão VS Sergião dos Foguetes",
    subtitle: "Foguetes • 216 mil views • há 1 dia",
  },
  {
    id: 2,
    thumb: require("../../assets/youtube/pokemon.png"),
    avatar: require("../../assets/youtube/pokemonavatar.png"),
    title: "Davy Jones jogou todos os pokemon",
    subtitle: "GamePlayrj • 1 mi views • 1 dia atrás",
  },
   {
    id: 3,
    thumb: require("../../assets/youtube/mine.png"),
    avatar: require("../../assets/youtube/avatar.png"),
    title: "As Melhores Farms no mine 2026",
    subtitle: "enaldinho • 1 mi views • 1 dia atrás",
  },
];

export default function YoutubeScreen() {
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

      {/* Categorias */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
        {["Tudo", "Jogos", "Felipe Neto", "Ao vivo", "Música", "Esportes"].map((item, index) => (
          <View key={index} style={styles.categoryChip}>
            <Text style={styles.categoryText}>{item}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Lista de videos */}
      <ScrollView>
        {/* Card de patrocinio (Sicredi) */}
        <View style={styles.sponsoredCard}>
          <View style={styles.sponsoredHeader}>
            <Text style={styles.sponsoredTitle}>Poupança Premiada Sicredi</Text>
            <Text style={styles.sponsoredSubtitle}>É hora de sonhar alto com prêmios incríveis. São R$5 milhões em prêmios! Poupe e concorra. #p...</Text>
            <Text style={styles.sponsoredTag}>Patrocinado · Sicredi</Text>
          </View>
          <View style={styles.sponsoredButton}>
            <Text style={styles.sponsoredButtonText}>Saiba Mais</Text>
          </View>
        </View>

        {videos.map((video) => (
          <View key={video.id} style={styles.videoCard}>
            
            <Image source={video.thumb} style={styles.thumbnail} />
            
            {/* Duração do vídeo */}
            <View style={styles.durationBadge}>
              <Text style={styles.durationText}>16:69</Text>
            </View>

            <View style={styles.videoInfo}>
              <Image source={video.avatar} style={styles.avatar} />
              <View style={styles.videoDetails}>
                <Text style={styles.videoTitle}>{video.title}</Text>
                <Text style={styles.videoSubtitle}>{video.subtitle}</Text>
              </View>
            </View>

          </View>
        ))}
      </ScrollView>

      {/* Bloco de navegacao: cada botao abre uma rota do Expo Router */}
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 10,
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
  categories: {
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  categoryChip: {
    backgroundColor: "#272727",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    marginRight: 8,
  },
  categoryText: {
    color: "#fff",
    fontSize: 14,
  },
  sponsoredCard: {
    backgroundColor: "#272727",
    margin: 10,
    padding: 12,
    borderRadius: 12,
  },
  sponsoredHeader: {
    marginBottom: 8,
  },
  sponsoredTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  sponsoredSubtitle: {
    color: "#aaa",
    fontSize: 13,
    marginTop: 2,
  },
  sponsoredTag: {
    color: "#3ea6ff",
    fontSize: 12,
    marginTop: 4,
  },
  sponsoredButton: {
    backgroundColor: "#3f3f3f",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  sponsoredButtonText: {
    color: "#3ea6ff",
    fontWeight: "600",
  },
  videoCard: {
    marginTop: 40,
  },
  thumbnail: {
    width: "100%",
    height: 200,
  },
  durationBadge: {
    position: "absolute",
    bottom: 45,
    right: 8,
    backgroundColor: "rgba(0,0,0,0.8)",
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
  },
  durationText: {
    color: "#fff",
    fontSize: 12,
  },
  videoInfo: {
    flexDirection: "row",
    padding: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  videoDetails: {
    flex: 1,
  },
  videoTitle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  videoSubtitle: {
    color: "#aaa",
    fontSize: 12,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#272727",
    backgroundColor: "#0f0f0f",
  },
});