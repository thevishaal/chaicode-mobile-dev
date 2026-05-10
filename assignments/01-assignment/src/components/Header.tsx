import { StyleSheet, Text, View } from "react-native";

import Logo from "../components/Logo";

type props = {
    heading: String,
    subHeading: String
}

export default function Header({heading, subHeading}: props) {
    return (
        <View style={styles.header}>
            <Logo />
            <Text style={styles.title}>{heading}</Text>
            <Text style={styles.para}>
                {subHeading}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        gap: 10,
    },
    title: {
        fontSize: 40,
        fontWeight: "600",
        textAlign: "center",
    },
    para: {
        textAlign: "center",
        color: "#6b7280",
        fontSize: 16,
    },
});