import { StyleSheet, View } from "react-native";

export default function Logo() {
    return (
        <View style={styles.container}>
            <View style={styles.vertical} />

            <View style={styles.middleRow}>
                <View style={styles.horizontal} />
                <View style={styles.horizontal} />
            </View>

            <View style={styles.vertical} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    vertical: {
        width: 16,
        height: 20,
        backgroundColor: "#1eae19",
        borderRadius: 20,
    },
    horizontal: {
        width: 20,
        height: 16,
        backgroundColor: "#1eae19",
        borderRadius: 20,
    },
    middleRow: {
        flexDirection: "row",
        marginVertical: -2,
        gap: 8,
    },
});