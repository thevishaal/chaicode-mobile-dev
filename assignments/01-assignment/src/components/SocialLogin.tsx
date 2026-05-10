import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

export default function SocialLogin() {
    return (
        <View style={styles.socials}>
            <FontAwesome style={styles.socialIcon} name="facebook" size={24} />
            <FontAwesome style={styles.socialIcon} name="google" size={24} />
            <FontAwesome style={styles.socialIcon} name="instagram" size={24} />
        </View>
    );
}

const styles = StyleSheet.create({
    socials: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 15,
    },
    socialIcon: {
        borderWidth: 2,
        borderRadius: 20,
        borderColor: "#6b728055",
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
});