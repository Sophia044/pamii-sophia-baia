
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const subscriptions = [
  {
    id: 1,
    channelName: "Tinocando",
    views: "310 mil visualizações",
    time: "há 4 dias",
    thumb: require("../../../assets/youtube/tumb6.png"),
    avatar: require("../../../assets/youtube/tumb6.png"),
    title: "MALCOMX e sua historia de vida",
  },
  {
    id: 2,
    channelName: "Tinocando",
    views: "248 mil visualizações",
    time: "há 2 dias",
    thumb: require("../../../assets/youtube/tumb5.png"),
    avatar: require("../../../assets/youtube/tumb5.png"),
    title: "Mano sabota e sua historia",
  },
];

const shorts = [
  {
    id: 1,
    title: "Jogo dos Números com o Casal",
    thumb: require("../../../assets/youtube/mine.png"),
  },
  {
    id: 2,
    title: "O QUE A GIRAFA GEMA INDICA?",
    thumb: require("../../../assets/youtube/foguetes.png"),
  },
  {
    id: 3,
    title: "Desafio do Mistério",
    thumb: require("../../../assets/youtube/pokemon.png"),
  },
];

export default function InscricoesScreen() {  return (
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

      {/* Categorias/Abas */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
        {["Tudo", "Hoje", "Vídeos", "Shorts", "Ao vivo", "Podcasts"].map((item, index) => (
          <View key={index} style={[styles.categoryChip, index === 0 && styles.categoryChipActive]}>
            <Text style={[styles.categoryText, index === 0 && styles.categoryTextActive]}>{item}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Lista de conteúdo das inscrições */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Seção Mais relevantes */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Mais relevantes</Text>
        </View>

        {subscriptions.map((sub) => (
          <View key={sub.id} style={styles.videoCard}>
            <Image source={sub.thumb} style={styles.thumbnail} />
            
            {/* Duração */}
            <View style={styles.durationBadge}>
              <Text style={styles.durationText}>37:25</Text>
            </View>

            <View style={styles.videoInfo}>
              <View style={styles.videoDetails}>
                <Text style={styles.videoTitle}>{sub.title}</Text>
                <Text style={styles.videoSubtitle}>{sub.channelName}</Text>
                <Text style={styles.videoMeta}>{sub.views} • {sub.time}</Text>
              </View>
              <Ionicons name="ellipsis-vertical" size={20} color="#aaa" style={styles.moreIcon} />
            </View>
          </View>
        ))}

        {/* Seção Shorts */}
        <View style={styles.shortsSection}>
          <View style={styles.shortsHeader}>
            <Ionicons name="play-circle" size={24} color="#FF0000" />
            <Text style={styles.shortsTitle}>Shorts</Text>
            <Ionicons name="chevron-forward" size={24} color="#fff" />
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.shortsContainer}>
            {shorts.map((short) => (
              <TouchableOpacity key={short.id} style={styles.shortCard}>
                <Image source={short.thumb} style={styles.shortThumb} />
                <View style={styles.shortOverlay}>
                  <Text style={styles.shortText}>{short.title}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        
      </ScrollView>

      {/* Navegação inferior */}
      
      
      <View style={styles.bottomNav}>
              <TouchableOpacity style={styles.navButton} activeOpacity={0.7} onPress={() => router.push("/youtube")}>
                <Ionicons name="home-outline" size={24} color="#fff" />
              </TouchableOpacity>
      
              <TouchableOpacity style={styles.navButton} activeOpacity={0.7} onPress={() => router.push("/shorts")}>
                <Ionicons name="play-circle-outline" size={24} color="#fff" />
              </TouchableOpacity>
      
              <TouchableOpacity style={styles.navButton} activeOpacity={0.7} onPress={() => router.push("/inscricoes")}>
                <Ionicons name="albums-outline" size={24} color="#fff" />
              </TouchableOpacity>
      
              <TouchableOpacity style={styles.navButton} activeOpacity={0.7} onPress={() => router.push("/perfil")}>
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
    marginBottom: 15,
  },
  categoryChip: {
    backgroundColor: "#272727",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
  },
  categoryChipActive: {
    backgroundColor: "#fff",
  },
  categoryText: {
    color: "#fff",
    fontSize: 14,
  },
  categoryTextActive: {
    color: "#000",
  },
  sectionHeader: {
    paddingHorizontal: 15,
    marginBottom: 15,
    marginTop: 10,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  videoCard: {
    marginBottom: 20,
  },
  thumbnail: {
    width: "100%",
    height: 220,
    resizeMode: "cover",
  },
  durationBadge: {
    position: "absolute",
    bottom: 48,
    right: 8,
    backgroundColor: "rgba(0,0,0,0.8)",
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 4,
  },
  durationText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  videoInfo: {
    flexDirection: "row",
    padding: 12,
    alignItems: "flex-start",
  },
  videoDetails: {
    flex: 1,
  },
  videoTitle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
  },
  videoSubtitle: {
    color: "#aaa",
    fontSize: 12,
    marginBottom: 2,
  },
  videoMeta: {
    color: "#888",
    fontSize: 11,
  },
  moreIcon: {
    marginLeft: 10,
    marginTop: 2,
  },
  shortsSection: {
    marginTop: 20,
    marginBottom: 20,
  },
  shortsHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  shortsTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
    flex: 1,
  },
  shortsContainer: {
    paddingHorizontal: 15,
  },
  shortCard: {
    width: 160,
    height: 280,
    marginRight: 10,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#272727",
  },
  shortThumb: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  shortOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.7)",
    padding: 8,
    minHeight: 50,
    justifyContent: "flex-end",
  },
  shortText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    paddingBottom: 15,
    borderTopWidth: 1,
    borderTopColor: "#272727",
    backgroundColor: "#0f0f0f",
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#272727",
    justifyContent: "center",
    alignItems: "center",
  },
  navLabel: {
    color: "#fff",
    fontSize: 10,
    marginTop: 4,
    textAlign: "center",
  },
});
