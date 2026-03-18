import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
    Image,
    ImageBackground,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

/* ─── Paleta WhatsApp ─── */
const WA_DARK_GREEN = "#075E54";
const WA_BG = "#ECE5DD";
const WA_MSG_GREEN = "#D9FDD3";
const WA_TICK_BLUE = "#53BDEB";
const WA_TICK_GRAY = "#8696A0";
const WA_TEXT = "#111B21";
const WA_TIME_GRAY = "#8696A0";
const WA_RECEIVED_BG = "#FFFFFF";
const WA_INPUT_BG = "#F0F2F5";

/* ─── Dados estáticos de mensagens ─── */
const MESSAGES = [
    { id: 1, type: "received", text: "Oi! Tudo bem?", time: "10:28" },
    { id: 2, type: "sent", text: "Tudo ótimo! E você?", time: "10:29", read: true },
    { id: 3, type: "received", text: "Mandei mensagem para avisar que essa tela merece um MB", time: "10:30" },
    { id: 4, type: "sent", text: "Sério?! Que legal", time: "10:31", read: true },
    { id: 5, type: "received", text: "Oseu grupo apesar de ter mais pessoas que o permitido vai levar MB", time: "10:33" },
    { id: 6, type: "received", text: "e quem reclamar vai tirar I", time: "10:33" },
    { id: 7, type: "sent", text: "que bom professor fico muito feliz", time: "10:35", read: true },
    { id: 8, type: "sent", text: "nosso grupo esta muito feliz com a noticia", time: "10:35", read: false },
    { id: 9, type: "received", text: "aproveitem", time: "10:36" },
];

/* ─── Sub-componentes ─── */

function ReceivedBubble({ text, time }: { text: string; time: string }) {
    return (
        <View style={styles.rowReceived}>
            <View style={styles.bubbleReceived}>
                <View style={styles.bubbleInner}>
                    <Text style={styles.bubbleText}>
                        {text}
                        <Text style={styles.ghostSpacer}>{"  " + time}</Text>
                    </Text>
                    <Text style={styles.timeReceived}>{time}</Text>
                </View>
            </View>
        </View>
    );
}

function SentBubble({ text, time, read }: { text: string; time: string; read?: boolean }) {
    return (
        <View style={styles.rowSent}>
            <View style={styles.bubbleSent}>
                <View style={styles.bubbleInner}>
                    <Text style={styles.bubbleText}>
                        {text}
                        <Text style={styles.ghostSpacer}>{"    " + time + "  "}</Text>
                    </Text>
                    <View style={styles.sentMeta}>
                        <Text style={styles.timeSent}>{time}</Text>
                        {read ? (
                            <MaterialIcons name="done-all" size={16} color={WA_TICK_BLUE} style={styles.tick} />
                        ) : (
                            <MaterialIcons name="done-all" size={16} color={WA_TICK_GRAY} style={styles.tick} />
                        )}
                    </View>
                </View>
            </View>
        </View>
    );
}

function DateBadge({ label }: { label: string }) {
    return (
        <View style={styles.dateBadgeWrap}>
            <View style={styles.dateBadge}>
                <Text style={styles.dateBadgeText}>{label}</Text>
            </View>
        </View>
    );
}

function EncryptionNotice() {
    return (
        <View style={styles.encryptionWrap}>
            <View style={styles.encryptionBadge}>
                <MaterialIcons name="lock" size={11} color="#7B8E9B" />
                <Text style={styles.encryptionText}>
                    {" "}As mensagens são protegidas com a{"\n"}
                    <Text style={styles.encryptionLink}>criptografia de ponta a ponta</Text>
                </Text>
            </View>
        </View>
    );
}

/* ─── Tela de Chat ─── */
export default function WhatsTelaChatScreen() {
    const isWeb = Platform.OS === "web";
    const router = useRouter();

    const screen = (
        <View style={styles.device}>
            {/* Status Bar Android */}
            <View style={styles.statusBar}>
                <Text style={styles.statusTime}>01:18</Text>
                <View style={styles.statusRight}>
                    <MaterialIcons name="signal-cellular-alt" size={13} color="#fff" />
                    <MaterialIcons name="wifi" size={13} color="#fff" style={{ marginLeft: 5 }} />
                    <MaterialIcons name="battery-full" size={13} color="#fff" style={{ marginLeft: 5 }} />
                </View>
            </View>

            {/* Header WhatsApp */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
                    <MaterialIcons name="arrow-back" size={23} color="#fff" />
                </TouchableOpacity>

                <Image
                    source={require("../../assets/whatsapp/user1.png")}
                    style={styles.avatar}
                />

                <View style={styles.headerMid}>
                    <Text style={styles.headerName} numberOfLines={1}>Siles</Text>
                    <Text style={styles.headerSub}>Jogando Pokemon</Text>
                </View>

                <View style={styles.headerActions}>
                    <TouchableOpacity style={styles.headerBtn} onPress={() => router.push("/videocall")}>
                        <MaterialIcons name="videocam" size={23} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.headerBtn}>
                        <MaterialIcons name="call" size={21} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.headerBtn}>
                        <MaterialIcons name="more-vert" size={23} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Área de mensagens com Wallpaper */}
            <ImageBackground
                source={require("../../assets/whatsapp/user1.png")} // Utilizando imagem do seu projeto
                style={styles.chatArea}
                imageStyle={{ opacity: 0.15 }} // Opacidade reduzida
                resizeMode="cover"
            >
                <ScrollView
                    contentContainerStyle={styles.chatContent}
                    showsVerticalScrollIndicator={false}
                >
                    <EncryptionNotice />
                    <DateBadge label="HOJE" />

                    {MESSAGES.map((msg) =>
                        msg.type === "received" ? (
                            <ReceivedBubble key={msg.id} text={msg.text} time={msg.time} />
                        ) : (
                            <SentBubble key={msg.id} text={msg.text} time={msg.time} read={msg.read} />
                        )
                    )}
                </ScrollView>
            </ImageBackground>

            {/* Barra de input */}
            <View style={styles.inputBar}>
                <View style={styles.inputBox}>
                    <TouchableOpacity style={styles.iconBtn}>
                        <MaterialIcons name="insert-emoticon" size={24} color={WA_TICK_GRAY} />
                    </TouchableOpacity>
                    <Text style={styles.inputPlaceholder}>Mensagem</Text>
                    <TouchableOpacity style={styles.iconBtn}>
                        <MaterialIcons name="attach-file" size={24} color={WA_TICK_GRAY} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconBtn}>
                        <MaterialIcons name="camera-alt" size={24} color={WA_TICK_GRAY} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.micBtn}>
                    <MaterialIcons name="mic" size={24} color="#fff" />
                </TouchableOpacity>
            </View>

            {/* Barra home Android */}
            <View style={styles.homeBar}>
                <TouchableOpacity style={styles.homeBarBack} onPress={() => router.back()}>
                    <MaterialIcons name="chevron-left" size={18} color="#8696A0" />
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

/* ─── Estilos ─── */
const styles = StyleSheet.create({
    webCanvas: {
        flex: 1,
        backgroundColor: "#1A1A2E",
        alignItems: "center",
        justifyContent: "center",
    },
    phoneFrame: {
        width: 390,
        height: 844,
        borderRadius: 44,
        backgroundColor: WA_DARK_GREEN,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 24 },
        shadowOpacity: 0.7,
        shadowRadius: 40,
        borderWidth: 1,
        borderColor: "#2A2A3E",
    },
    cameraRow: {
        height: 12,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: WA_DARK_GREEN,
        paddingTop: 6,
    },
    camera: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: "#1a3a36",
        borderWidth: 1,
        borderColor: "#0a2a26",
    },
    device: {
        flex: 1,
        backgroundColor: WA_BG,
        flexDirection: "column",
    },
    statusBar: {
        height: 24,
        backgroundColor: "#054e45",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 14,
    },
    statusTime: {
        color: "#fff",
        fontSize: 11,
        fontWeight: "600",
        letterSpacing: 0.2,
    },
    statusRight: {
        flexDirection: "row",
        alignItems: "center",
    },
    header: {
        height: 56,
        backgroundColor: WA_DARK_GREEN,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 8,
        paddingRight: 6,
    },
    backBtn: { padding: 6 },
    avatar: {
        width: 38,
        height: 38,
        borderRadius: 19,
        backgroundColor: "#128C7E",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 2,
        marginRight: 10,
    },
    avatarLetter: { color: "#fff", fontSize: 17, fontWeight: "700" },
    headerMid: { flex: 1, justifyContent: "center" },
    headerName: { color: "#fff", fontSize: 16, fontWeight: "600", letterSpacing: 0.1 },
    headerSub: { color: "#b2dfdb", fontSize: 12, marginTop: 1 },
    headerActions: { flexDirection: "row", alignItems: "center" },
    headerBtn: { padding: 7 },
    chatArea: { flex: 1 },
    chatContent: { paddingTop: 6, paddingBottom: 8, paddingHorizontal: 6 },
    encryptionWrap: { alignItems: "center", marginTop: 4, marginBottom: 10, paddingHorizontal: 30 },
    encryptionBadge: {
        backgroundColor: "#FEFDE7",
        borderRadius: 7,
        paddingVertical: 7,
        paddingHorizontal: 12,
        flexDirection: "row",
        alignItems: "flex-start",
    },
    encryptionText: { fontSize: 11.5, color: "#4A5568", lineHeight: 16, textAlign: "center" },
    encryptionLink: { color: "#128C7E" },
    dateBadgeWrap: { alignItems: "center", marginBottom: 10 },
    dateBadge: {
        backgroundColor: "#D1F0E8",
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 1,
    },
    dateBadgeText: { fontSize: 11.5, color: "#54656F", fontWeight: "600", letterSpacing: 0.3 },
    rowReceived: { alignSelf: "flex-start", marginBottom: 3, maxWidth: "75%" },
    bubbleReceived: {
        backgroundColor: WA_RECEIVED_BG,
        borderRadius: 8,
        borderTopLeftRadius: 2,
        paddingTop: 7,
        paddingLeft: 9,
        paddingRight: 9,
        paddingBottom: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 1,
        elevation: 1,
    },
    rowSent: { alignSelf: "flex-end", marginBottom: 3, maxWidth: "75%" },
    bubbleSent: {
        backgroundColor: WA_MSG_GREEN,
        borderRadius: 8,
        borderTopRightRadius: 2,
        paddingTop: 7,
        paddingLeft: 9,
        paddingRight: 9,
        paddingBottom: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 1,
        elevation: 1,
    },
    bubbleInner: { flexDirection: "column" },
    bubbleText: { fontSize: 14.5, color: WA_TEXT, lineHeight: 19, flexShrink: 1, flexWrap: "wrap" },
    ghostSpacer: { color: "transparent", fontSize: 11 },
    sentMeta: { flexDirection: "row", alignItems: "center", alignSelf: "flex-end", marginTop: 2 },
    timeReceived: { fontSize: 11, color: WA_TIME_GRAY, alignSelf: "flex-end", marginTop: 2 },
    timeSent: { fontSize: 11, color: WA_TIME_GRAY },
    tick: { marginLeft: 2 },
    inputBar: {
        flexDirection: "row",
        alignItems: "flex-end",
        paddingHorizontal: 8,
        paddingVertical: 7,
        backgroundColor: WA_INPUT_BG,
        gap: 7,
    },
    inputBox: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 24,
        minHeight: 44,
        paddingHorizontal: 4,
    },
    inputPlaceholder: { flex: 1, fontSize: 15, color: "#9BA5AD", paddingHorizontal: 6 },
    iconBtn: { padding: 8 },
    micBtn: {
        width: 46,
        height: 46,
        borderRadius: 23,
        backgroundColor: WA_DARK_GREEN,
        alignItems: "center",
        justifyContent: "center",
    },
    homeBar: {
        height: 32,
        backgroundColor: WA_INPUT_BG,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 28,
    },
    homeBarBack: {
        width: 22,
        height: 22,
        borderRadius: 4,
        borderWidth: 1.5,
        borderColor: "#8696A0",
        alignItems: "center",
        justifyContent: "center",
    },
    homeBarDot: { width: 18, height: 18, borderRadius: 9, borderWidth: 1.5, borderColor: "#8696A0" },
    homeBarSquare: { width: 16, height: 16, borderRadius: 3, borderWidth: 1.5, borderColor: "#8696A0" },
});
