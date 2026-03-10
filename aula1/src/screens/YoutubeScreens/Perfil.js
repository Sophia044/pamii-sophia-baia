
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
export default function PerfilScreen() {


  const videos = [
{
    id: 1,
    thumb: require("../../../assets/youtube/tumb1.png"),
    avatar: require("../../../assets/youtube/tumb1.png"),
    title: "Os Segredos ocultos de Veneza..",
    subtitle: "Tinocando • 216 mil views • há 1 dia",
  },
  {
    id: 2,
    thumb: require("../../../assets/youtube/tumb2.png"),
    avatar: require("../../../assets/youtube/tumb2.png"),
    title: "Inferno de Dante ",
    subtitle: "Tinocando • 1 mi views • 1 dia atrás",
  },
   {
    id: 3,
    thumb: require("../../../assets/youtube/tumb3.png"),
    avatar: require("../../../assets/youtube/tumb3.png"),
    title: "Jesus Em mapa... ",
    subtitle: "Tinocando • 4 mi views • 1 dia atrás",
  },
  {
    id: 4,
    thumb: require("../../../assets/youtube/tumb4.png"),
    avatar: require("../../../assets/youtube/tumb4.png"),
    title: "Serra da Capivara e seus segredos",
    subtitle: "Tinocando • 2,5 mi views • 1 dia atrás",
  },
  {
    id: 5,
    thumb: require("../../../assets/youtube/tumb5.png"),
    avatar: require("../../../assets/youtube/tumb5.png"),
    title: "Sabotage e sua historia de vida",
    subtitle: "Tinocando • 1 mi views • 1 dia atrás",
  },
  {
    id: 6,
    thumb: require("../../../assets/youtube/tumb6.png"),
    avatar: require("../../../assets/youtube/tumb6.png"),
    title: "Quem foi Malcom X",
    subtitle: "Tinocando • 1 mi views • 1 dia atrás",
  },

  
];

const perfils = [ 
  {
    id:1,
    foto: require("../../../assets/youtube/fotoperfil.png"),
    nome: "Brito",
    Arroba: "  @IvadOtirb • Ver canal >",
  

  }

]
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
       
      

{perfils.map((perfil) => (
          <View key={perfil.id} style={styles.perfilCard}>
            
            <Image source={perfil.foto} style={styles.fotothumb} />
            <View style ={styles.perfilinfo}>
              <Text style={styles.perfilname}> {perfil.nome} </Text>
              <Text style={styles.Arroba}>{perfil.Arroba}</Text>
            </View>
           

          </View>
          
))}
<ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  style={styles.categories}
  contentContainerStyle={styles.categoriesContent}
>
        {["Mudar de conta", "Conta do google", "Ativar modo de navegação anonima", "Compartilhar canal"].map((item, index) => (
          <View key={index} style={styles.categoryChip}>
            <Text style={styles.categoryText}>{item}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.videos}>
<View style={styles.sectionHeader}>
  <Text style={styles.sectionTitle}>Historico</Text>
   <Ionicons size={35} name="chevron-forward-outline" color="white" />
</View>
<ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={styles.videosRow}
>
        {videos.map((video) => (
          <View key={video.id} style={styles.videoCard}>
            
            <Image source={video.thumb} style={styles.thumbnail} />
            
            {/* Duração do vídeo */}
            <View style={styles.durationBadge}>
              <Text style={styles.durationText}>16:69</Text>
            </View>
 
              </View>
  
        ))}
      </ScrollView>
</View>
<View style={styles.sectionHeader}>
  <Text style={styles.sectionTitle}>Playlist</Text>
   <Ionicons size={35} name="chevron-forward-outline" color="white" />
</View>
<ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={styles.videosRow2}
>
        {videos.map((video) => (
          <View key={video.id} style={styles.videoCard2}>
            
            <Image source={video.thumb} style={styles.thumbnail2} />
            
            {/* Duração do vídeo */}
            <View style={styles.durationBadge2}>
              <Text style={styles.durationText2}>16:69</Text>
            </View>
              </View>
        ))}
      </ScrollView>

      <View style={styles.topics}>
        <Ionicons name="videocam-outline" size={40} color="white" />
         <Text style={styles.topicss}>  Seus vídeos</Text>
      </View>

      <View style={styles.topics}>
        <Ionicons name="cut-outline" size={40} color="white" />
         <Text style={styles.topicss}>  Seus vídeos</Text>
      </View>
<View
  style={{
    height: 1,
    backgroundColor: "#333",
    marginVertical: 10
  }}
/>
      <View style={styles.topics}>
        <Ionicons name="film-outline" size={40} color="white" />
         <Text style={styles.topicss}>  Seus vídeos</Text>
      </View>

      <View style={styles.topics}>
        <Ionicons name="play-circle-outline" size={40} color="white" />
         <Text style={styles.topicss}>  Seus vídeos</Text>
      </View>

<View
  style={{
    height: 1,
    backgroundColor: "#333",
    marginVertical: 10
  }}
/>

      <View style={styles.topics}>
        <Ionicons name="help-circle-outline" size={40} color="white" />
         <Text style={styles.topicss}>Seus vídeos</Text>
      </View>

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
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 8,
  },
  subtitle: {
    color: "#aaa",
    fontSize: 14,
    
  },
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
  perfilCard:{
    marginTop: 10,
    flexDirection: "row",
    marginLeft:10

  },
  perfilinfo:{
    flexDirection: "column",
    marginTop:25,
    
  },
  fotothumb: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  perfilname: {
    color: "white",
    fontWeight: "600",
    fontSize:50,
    fontFamily: 'Roboto',
    
  },
  Arroba: {
    color: "white",
    fontWeight: "200",
    fontSize:20,
    fontFamily: 'Helvetica',
  },
  categories: {
    width: "100%",
    minHeight: 40,
    marginBottom: 10,
    marginTop: 10,
  },
  categoriesContent: {
    paddingHorizontal: 15,
    alignItems: "center",
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
  videoCard: {
    marginBottom: 12,
    marginRight: 10,
    width: 220,
    height: 140,
    marginTop: 12,
  },
  videosRow: {
    paddingHorizontal: 10,
    paddingBottom: 4,
  },
  thumbnail: {
    width: 220,
    height: 140,
    borderRadius: 8,
  },
  durationBadge: {
    position: "absolute",
    bottom: 8,
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
  videoCard2: {
    marginBottom: 12,
    marginRight: 10,
    width: 220,
    height: 140,
    marginTop: 12,
  },
  videosRow2: {
    paddingHorizontal: 10,
    paddingBottom: 4,
  },
  thumbnail2: {
    width: 220,
    height: 140,
    borderRadius: 8,
  },
  durationBadge2: {
    position: "absolute",
    bottom: 8,
    right: 8,
    backgroundColor: "rgba(0,0,0,0.8)",
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
  },
  durationText2: {
    color: "#fff",
    fontSize: 12,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 30,
    fontFamily:'Helvetica',
    fontWeight: "700",
    flexDirection: "row",
    
  },
  sectionHeader: {
    color: "#fff",
    fontSize: 30,
    marginTop: 100,
    marginLeft: 10,
    flexDirection: "row",

  },
  topics: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    
  },
  topicss: {
    color: "white",
    fontSize: 30,
    fontWeight: "600",
    marginLeft: 10,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#272727",
    backgroundColor: "#0f0f0f",
  },
  navButton: {
    width: 56,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  videos: {
    marginBottom:-90,
  }
  
});
