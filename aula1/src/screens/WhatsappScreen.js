import { View, Text, StyleSheet, ScrollView, Image, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const chats = [
  {
    id: 1,
    name: "Ronaldo",
    message: "oi, posso falar?",
    time: "11:45",
    unread: 0,
    avatar: require("../../assets/whatsapp/user1.png"),
  },
  {
    id: 2,
    name: "Davi-Guevara",
    message: "cê vai pagar caro...",
    time: "02:21",
    unread: 3,
    avatar: require("../../assets/whatsapp/user2.png"),
  },
  {
    id: 3,
    name: "pinky",
    message: "a aula do siles é muito legal né 😉",
    time: "13:25",
    unread: 1,
    avatar: require("../../assets/whatsapp/user3.png"),
  },
  {
    id: 4,
    name: "We",
    message: "Falei bosta no twitter dnv mn",
    time: "15:45",
    unread: 0,
    avatar: require("../../assets/whatsapp/user4.png"),
  },
  {
    id: 5,
    name: "wagner moura",
    message: "o oscar ta chegando",
    time: "11:45",
    unread: 5,
    avatar: require("../../assets/whatsapp/user5.png"),
  },
  {
    id: 6,
    name: "nicole ferreira",
    message: "aff não queria que o wagner ganhasse o oscar",
    time: "17:33",
    unread: 2,
    avatar: require("../../assets/whatsapp/user6.png"),
  },
];

export default function WhatsappScreen() {
  return (
    <View style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>WhatsApp</Text>
        <View style={styles.icons}>
          <Ionicons name="camera-outline" size={22} color="#fff" />
          <Ionicons name="search-outline" size={22} color="#fff" />
          <Ionicons name="ellipsis-vertical" size={22} color="#fff" />
        </View>
      </View>

      {/* Barra de Pesquisa */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={18} color="#8696a0" style={styles.searchIcon} />
        <TextInput
          placeholder="Pergunte à Meta AI ou pesquise"
          placeholderTextColor="#8696a0"
          style={styles.searchInput}
        />
      </View>

      {/* Abas de navegação (Conversas, Comunidades, Atualizações, Ligações) */}
      <View style={styles.tabContainer}>
        <View style={[styles.tab, styles.tabActive]}>
          <Text style={[styles.tabText, styles.tabTextActive]}>Conversas</Text>
          <View style={styles.activeIndicator} />
        </View>
        <View style={styles.tab}>
          <Text style={styles.tabText}>Comunidades</Text>
        </View>
        <View style={styles.tab}>
          <Text style={styles.tabText}>Atualizações</Text>
        </View>
        <View style={styles.tab}>
          <Text style={styles.tabText}>Ligações</Text>
        </View>
      </View>

      {/* Chats */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {chats.map((chat) => (
          <View key={chat.id} style={styles.chatItem}>
            
            <Image source={chat.avatar} style={styles.avatar} />

            <View style={styles.chatInfo}>
              <View style={styles.chatHeader}>
                <Text style={styles.name}>{chat.name}</Text>
                <Text style={styles.time}>{chat.time}</Text>
              </View>
              <View style={styles.messageContainer}>
                <Text style={styles.message} numberOfLines={1}>
                  {chat.message}
                </Text>
                {chat.unread > 0 && (
                  <View style={styles.unreadBadge}>
                    <Text style={styles.unreadText}>{chat.unread}</Text>
                  </View>
                )}
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Ionicons name="chatbubble" size={24} color="#25D366" />
          <Text style={[styles.navText, styles.navTextActive]}>Conversas</Text>
        </View>
        <View style={styles.navItem}>
          <Ionicons name="people" size={24} color="#8696a0" />
          <Text style={styles.navText}>Comunidades</Text>
        </View>
        <View style={styles.navItem}>
          <Ionicons name="time" size={24} color="#8696a0" />
          <Text style={styles.navText}>Atualizações</Text>
        </View>
        <View style={styles.navItem}>
          <Ionicons name="call" size={24} color="#8696a0" />
          <Text style={styles.navText}>Ligações</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111b21",
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  icons: {
    flexDirection: "row",
    gap: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1f2c33",
    marginHorizontal: 15,
    marginBottom: 15,
    paddingHorizontal: 12,
    borderRadius: 25,
    height: 45,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: "#fff",
    fontSize: 15,
  },
  tabContainer: {
    flexDirection: "row",
    marginBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#1f2c33",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 12,
  },
  tabActive: {
    position: "relative",
  },
  tabText: {
    color: "#8696a0",
    fontSize: 14,
    fontWeight: "600",
  },
  tabTextActive: {
    color: "#25D366",
  },
  activeIndicator: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 3,
    backgroundColor: "#25D366",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "#1f2c33",
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    marginRight: 15,
    backgroundColor: "#2a3942",
  },
  chatInfo: {
    flex: 1,
  },
  chatHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  name: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  time: {
    color: "#25D366",
    fontSize: 12,
  },
  messageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  message: {
    color: "#8696a0",
    fontSize: 14,
    flex: 1,
    marginRight: 10,
  },
  unreadBadge: {
    backgroundColor: "#25D366",
    borderRadius: 12,
    minWidth: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  unreadText: {
    color: "#111b21",
    fontSize: 11,
    fontWeight: "bold",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#1f2c33",
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "#2a3942",
  },
  navItem: {
    alignItems: "center",
    flex: 1,
  },
  navText: {
    color: "#8696a0",
    fontSize: 11,
    marginTop: 2,
  },
  navTextActive: {
    color: "#25D366",
  },
});