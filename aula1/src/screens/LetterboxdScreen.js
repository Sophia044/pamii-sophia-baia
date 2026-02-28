import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Primeira linha de filmes - Popular this week
const popularThisWeek = [
  { id: 1, image: require("../../assets/letterboxd/clube da luta.png"), rating: 2.5, year: 1999, title: "CLUBE DA LUTA" },
  { id: 2, image: require("../../assets/letterboxd/500 dias.png"), rating: 4.0, year: 2009, title: "500 DIAS" },
  { id: 3, image: require("../../assets/letterboxd/brilho eterno.png"), rating: 5.0, year: 2004, title: "BRILHO ETERNO" },
  { id: 4, image: require("../../assets/letterboxd/carros.png"), rating: 1.5, year: 2006, title: "CARROS" },
  { id: 5, image: require("../../assets/letterboxd/kpop.png"), rating: 3.5, year: 2025, title: "GUERREIRAS DO KPOP" },
];

// Segunda linha de filmes - New from friends (com imagens)
const newFromFriends = [
  { id: 1, image: require("../../assets/letterboxd/lalalixo.png"), rating: 2.0, year: 2016, title: "LA LA LAND", user: "Isabela" },
  { id: 2, image: require("../../assets/letterboxd/parasita.png"), rating: 5.0, year: 2019, title: "EDIFICIO MASTER", user: "Murilobb" },
  { id: 3, image: require("../../assets/letterboxd/ponyo.png"), rating: 4.5, year: 2008, title: "HAMNET", user: "Isabella" },
  { id: 4, image: require("../../assets/letterboxd/weapons.png"), rating: null, year: 2025, title: "WEAPONS", user: "Jur" },
  { id: 5, image: require("../../assets/letterboxd/iluminado.png"), rating: 5.0, year: 2023, title: "O ILUMINADO", user: "sophii" },
];

const renderStars = (rating) => {
  if (!rating) return null;
  
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const stars = [];
  
  for (let i = 0; i < fullStars; i++) {
    stars.push(<Ionicons key={`full-${i}`} name="star" size={12} color="#00e054" />);
  }
  if (halfStar) {
    stars.push(<Ionicons key="half" name="star-half" size={12} color="#00e054" />);
  }
  
  return <View style={styles.starsContainer}>{stars}</View>;
};

export default function LetterboxdScreen() {
  return (
    <View style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>Letterboxd</Text>
        <View style={styles.headerIcons}>
          <Ionicons name="search" size={22} color="#9ab" />
          <Ionicons name="add" size={24} color="#9ab" />
        </View>
      </View>

      {/* Navigation Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity style={[styles.tab, styles.tabActive]}>
          <Text style={[styles.tabText, styles.tabTextActive]}>Films</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Reviews</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Lists</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Journal</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* PRO Banner */}
        <View style={styles.proBanner}>
          <Text style={styles.proTitle}>PRO</Text>
          <Text style={styles.proText}>
            Remove ads, add profile stats, activity and service filters, favorite streaming services, watchlist alerts and more by upgrading to Pro.
          </Text>
          <TouchableOpacity style={styles.proButton}>
            <Text style={styles.proButtonText}>Upgrade to Pro</Text>
          </TouchableOpacity>
        </View>

        {/* Popular this week - Primeira linha de filmes */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular this week</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {popularThisWeek.map((movie) => (
              <View key={movie.id} style={styles.posterCard}>
                <Image source={movie.image} style={styles.poster} />
                {renderStars(movie.rating)}
                <Text style={styles.posterYear}>{movie.year}</Text>
                <Text style={styles.posterTitle} numberOfLines={1}>{movie.title}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* New from friends - Segunda linha de filmes */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>New from friends</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {newFromFriends.map((movie) => (
              <View key={movie.id} style={styles.posterCard}>
                <Image source={movie.image} style={styles.poster} />
                {renderStars(movie.rating)}
                <Text style={styles.posterYear}>{movie.year}</Text>
                <Text style={styles.posterTitle} numberOfLines={1}>{movie.title}</Text>
                <Text style={styles.posterUser}>{movie.user}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Filmes listados (formato texto) - como na primeira imagem */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Films</Text>
          
          <View style={styles.filmListItem}>
            <Text style={styles.filmTitle}>500 DAYS OF THE FUTURE</Text>
            <Text style={styles.filmYear}>(2023)</Text>
          </View>
          <Text style={styles.filmDirector}>Directed by Fede Alvarez</Text>
          <Text style={styles.filmCast}>Starring Pedro Pascal, Emilia Jones, Dave Bautista</Text>
          
          <View style={[styles.filmListItem, styles.filmMarginTop]}>
            <Text style={styles.filmTitle}>ETERNAL SUNSHINE</Text>
            <Text style={styles.filmYear}>(2022)</Text>
          </View>
          <Text style={styles.filmDirector}>Directed by Yorgos Lanthimos</Text>
          <Text style={styles.filmCast}>Starring Joseph Quinn, Emily Watson</Text>
          
          <View style={[styles.filmListItem, styles.filmMarginTop]}>
            <Text style={styles.filmTitle}>HAMNET</Text>
            <Text style={styles.filmYear}>(2024)</Text>
          </View>
          <Text style={styles.filmDirector}>Directed by Chloe Zhao</Text>
          <Text style={styles.filmCast}>Starring Paul Mescal, Jessie Buckley</Text>
          
          <View style={[styles.filmListItem, styles.filmMarginTop]}>
            <Text style={styles.filmTitle}>MARTY SUPREME</Text>
            <Text style={styles.filmYear}>(2023)</Text>
          </View>
          <Text style={styles.filmDirector}>Directed by Wes Anderson</Text>
          <Text style={styles.filmCast}>Starring Timothy Chalamet</Text>
        </View>

        {/* Extra space for bottom nav */}
        <View style={{ height: 60 }} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={22} color="#00e054" />
          <Text style={[styles.navText, styles.navTextActive]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="film" size={22} color="#9ab" />
          <Text style={styles.navText}>Films</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="people" size={22} color="#9ab" />
          <Text style={styles.navText}>Social</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person" size={22} color="#9ab" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#14181c",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 15,
    paddingBottom: 10,
    backgroundColor: "#1a232a",
  },
  logo: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  headerIcons: {
    flexDirection: "row",
    gap: 20,
  },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#1a232a",
    paddingHorizontal: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#2c3e4f",
  },
  tab: {
    marginRight: 25,
    paddingBottom: 8,
  },
  tabActive: {
    borderBottomWidth: 2,
    borderBottomColor: "#00e054",
  },
  tabText: {
    color: "#9ab",
    fontSize: 15,
    fontWeight: "600",
  },
  tabTextActive: {
    color: "#fff",
  },
  proBanner: {
    backgroundColor: "#1f2a30",
    margin: 15,
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#2c3e4f",
  },
  proTitle: {
    color: "#ffd966",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  proText: {
    color: "#9ab",
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 12,
  },
  proButton: {
    backgroundColor: "#456",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  proButtonText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  posterCard: {
    marginRight: 12,
    width: 100,
  },
  poster: {
    width: 100,
    height: 150,
    borderRadius: 4,
    marginBottom: 5,
  },
  posterYear: {
    color: "#9ab",
    fontSize: 10,
    marginTop: 2,
  },
  posterTitle: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "500",
  },
  posterUser: {
    color: "#ffd966",
    fontSize: 10,
    marginTop: 2,
  },
  starsContainer: {
    flexDirection: "row",
    marginTop: 4,
  },
  filmListItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  filmTitle: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
    marginRight: 5,
  },
  filmYear: {
    color: "#9ab",
    fontSize: 13,
  },
  filmDirector: {
    color: "#9ab",
    fontSize: 13,
    marginBottom: 2,
    marginLeft: 0,
  },
  filmCast: {
    color: "#9ab",
    fontSize: 12,
    marginBottom: 8,
  },
  filmMarginTop: {
    marginTop: 12,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#1a232a",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#2c3e4f",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    color: "#9ab",
    fontSize: 11,
    marginTop: 2,
  },
  navTextActive: {
    color: "#00e054",
  },
});