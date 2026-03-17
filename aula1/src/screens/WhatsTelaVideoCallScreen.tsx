import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function WhatsTelaVideoCallScreen() {
    const isWeb = Platform.OS === "web";
    const router = useRouter();

    const screen = (
        <View style={styles.device}>

            {/* ── FUNDO: foto do contato (tela inteira) ── */}
            <Image
                source={require("../../assets/images/joao_video_bg.png")}
                style={styles.remoteFeed}
                resizeMode="cover"
            />

            {/* Overlay escuro topo */}
            <View style={styles.topOverlay} />
            {/* Overlay escuro rodapé */}
            <View style={styles.bottomOverlay} />

            {/* ════════════════════════════════
          STATUS BAR
      ════════════════════════════════ */}
            <View style={styles.statusBar}>
                <View style={styles.statusLeft}>
                    <View style={styles.greenDot} />
                </View>
                <View style={styles.statusRight}>
                    <MaterialIcons name="signal-cellular-alt" size={13} color="#fff" />
                    <MaterialIcons name="wifi" size={13} color="#fff" style={{ marginLeft: 4 }} />
                    <MaterialIcons name="battery-full" size={13} color="#fff" style={{ marginLeft: 4 }} />
                </View>
            </View>

            {/* ════════════════════════════════
          TOPO — seta + criptografia + add
      ════════════════════════════════ */}
            <View style={styles.topBar}>
                <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
                    <MaterialIcons name="chevron-left" size={28} color="#fff" />
                </TouchableOpacity>

                <View style={styles.encryptRow}>
                    <MaterialIcons name="lock" size={11} color="#ccc" />
                    <Text style={styles.encryptText}> End-to-End Encrypted</Text>
                </View>

                <TouchableOpacity style={styles.addBtn}>
                    <MaterialIcons name="person-add" size={22} color="#fff" />
                </TouchableOpacity>
            </View>

            {/* ════════════════════════════════
          NOME + DURAÇÃO (abaixo do topo)
      ════════════════════════════════ */}
            <View style={styles.nameArea}>
                <Text style={styles.contactName}>Siles</Text>
                <Text style={styles.callDuration}>01:57:24</Text>
            </View>

            {/* ════════════════════════════════
          PIP — câmera própria (canto sup. direito)
      ════════════════════════════════ */}
            <View style={styles.pipWrapper}>
                <Image
                    source={require("../../assets/images/user_selfie_pip.png")}
                    style={styles.pipImage}
                    resizeMode="cover"
                />
                <View style={styles.pipBorder} />
                <View style={styles.pipCamIcon}>
                    <MaterialIcons name="videocam" size={11} color="#fff" />
                </View>
            </View>

            {/* ════════════════════════════════
          CONTROLES — barra pill 
      ════════════════════════════════ */}
            <View style={styles.controlsBar}>

                {/* Alto-falante (branco) */}
                <TouchableOpacity style={styles.btnWhite}>
                    <MaterialIcons name="volume-up" size={26} color="#222" />
                </TouchableOpacity>

                {/* Câmera (escuro) */}
                <TouchableOpacity style={styles.btnDark}>
                    <MaterialIcons name="videocam" size={26} color="#fff" />
                </TouchableOpacity>

                {/* Microfone (escuro) */}
                <TouchableOpacity style={styles.btnDark}>
                    <MaterialIcons name="mic" size={26} color="#fff" />
                </TouchableOpacity>

                {/* Encerrar (vermelho) */}
                <TouchableOpacity style={styles.btnRed} onPress={() => router.back()}>
                    <MaterialIcons name="call-end" size={26} color="#fff" />
                </TouchableOpacity>

            </View>

            {/* ── Barra home Android ── */}
            <View style={styles.homeBar}>
                <TouchableOpacity style={styles.homeBarBack} onPress={() => router.back()}>
                    <MaterialIcons name="chevron-left" size={16} color="rgba(255,255,255,0.4)" />
                </TouchableOpacity>
                <View style={styles.homeBarDot} />
                <TouchableOpacity style={styles.homeBarSquare} />
            </View>

        </View>
    );

    if (isWeb) {
        return (
            <View style={styles.webCanvas}>
                <View style={styles.phoneFrame}>
                    <View style={styles.cameraRow}>
                        <View style={styles.camera} />
                    </View>
                    {screen}
                </View>
            </View>
        );
    }

    return screen;
}

const styles = StyleSheet.create({

    /* Canvas escuro (igual à tela de chat) */
    webCanvas: {
        flex: 1,
        backgroundColor: "#1A1A2E",
        alignItems: "center",
        justifyContent: "center",
    },

    /* Frame do celular — mesmo estilo da tela de chat */
    phoneFrame: {
        width: 390,
        height: 844,
        borderRadius: 44,
        backgroundColor: "#000",
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 24 },
        shadowOpacity: 0.7,
        shadowRadius: 40,
        borderWidth: 1,
        borderColor: "#2A2A3E",
    },

    cameraRow: {
        height: 14,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        paddingTop: 8,
    },
    camera: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "#1a1a1a",
        borderWidth: 1,
        borderColor: "#333",
    },

    device: {
        flex: 1,
        backgroundColor: "#000",
        position: "relative",
    },

    /* Foto do contato */
    remoteFeed: {
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        width: "100%",
        height: "100%",
    },

    /* Overlay topo — muito sutil, só para legibilidade do texto */
    topOverlay: {
        position: "absolute",
        top: 0, left: 0, right: 0,
        height: 180,
        backgroundColor: "rgba(0,0,0,0.18)",
    },

    /* Overlay rodapé — muito sutil */
    bottomOverlay: {
        position: "absolute",
        bottom: 0, left: 0, right: 0,
        height: 140,
        backgroundColor: "rgba(0,0,0,0.20)",
    },

    /* Status bar */
    statusBar: {
        height: 22,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        marginTop: 2,
    },
    statusLeft: { flexDirection: "row", alignItems: "center" },
    greenDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "#25D366",
    },
    statusRight: { flexDirection: "row", alignItems: "center" },

    /* Barra do topo */
    topBar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingTop: 6,
        paddingBottom: 2,
    },
    backBtn: {
        width: 40, height: 40,
        alignItems: "center", justifyContent: "center",
    },
    encryptRow: { flexDirection: "row", alignItems: "center" },
    encryptText: { color: "#ddd", fontSize: 11, letterSpacing: 0.2 },
    addBtn: {
        width: 40, height: 40,
        alignItems: "center", justifyContent: "center",
    },

    /* Nome + duração abaixo do topo */
    nameArea: {
        alignItems: "center",
        paddingTop: 8,
        paddingBottom: 4,
    },
    contactName: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "700",
        letterSpacing: 0.2,
        textShadowColor: "rgba(0,0,0,0.9)",
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 6,
    },
    callDuration: {
        color: "rgba(255,255,255,0.80)",
        fontSize: 13,
        marginTop: 4,
        letterSpacing: 1.5,
        textShadowColor: "rgba(0,0,0,0.8)",
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 4,
    },

    /* PIP câmera própria */
    pipWrapper: {
        position: "absolute",
        top: 120,
        right: 14,
        width: 108,
        height: 160,
        borderRadius: 16,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.6,
        shadowRadius: 10,
        elevation: 12,
    },
    pipImage: { width: "100%", height: "100%" },
    pipBorder: {
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        borderRadius: 16,
        borderWidth: 2,
        borderColor: "rgba(255,255,255,0.35)",
    },
    pipCamIcon: {
        position: "absolute",
        bottom: 6, right: 6,
        backgroundColor: "rgba(0,0,0,0.4)",
        borderRadius: 8,
        padding: 3,
    },

    /* Barra pill de controles */
    controlsBar: {
        position: "absolute",
        bottom: 36,
        left: 18,
        right: 18,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "rgba(30,30,30,0.92)",
        borderRadius: 50,
        paddingVertical: 12,
        paddingHorizontal: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },

    btnWhite: {
        width: 55, height: 55, borderRadius: 28,
        backgroundColor: "#fff",
        alignItems: "center", justifyContent: "center",
    },
    btnDark: {
        width: 55, height: 55, borderRadius: 28,
        backgroundColor: "#3a3a3a",
        alignItems: "center", justifyContent: "center",
    },
    btnRed: {
        width: 55, height: 55, borderRadius: 28,
        backgroundColor: "#FF3B30",
        alignItems: "center", justifyContent: "center",
        shadowColor: "#FF3B30",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
    },

    /* Barra home */
    homeBar: {
        position: "absolute",
        bottom: 4, left: 0, right: 0,
        height: 26,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 26,
    },
    homeBarBack: {
        width: 20, height: 20, borderRadius: 4,
        borderWidth: 1.5, borderColor: "rgba(255,255,255,0.3)",
        alignItems: "center", justifyContent: "center",
    },
    homeBarDot: {
        width: 16, height: 16, borderRadius: 8,
        borderWidth: 1.5, borderColor: "rgba(255,255,255,0.3)",
    },
    homeBarSquare: {
        width: 14, height: 14, borderRadius: 3,
        borderWidth: 1.5, borderColor: "rgba(255,255,255,0.3)",
    },
});
