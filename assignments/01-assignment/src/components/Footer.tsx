import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { router } from "expo-router";

type props = {
  btnPara: String;
  btnText: String;
  showForgotPassword: Boolean;
};

export default function Footer({
  btnPara,
  btnText,
  showForgotPassword = false,
}: props) {
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        onPress={() => {
          if (btnText === "Sign Up") {
            router.push("/signup");
          } else {
            router.push("/");
          }
        }}
      >
        <Text style={styles.footerText}>
          {btnPara} <Text style={styles.footerLink}>{btnText}</Text>
        </Text>
      </TouchableOpacity>
      {showForgotPassword && (
        <TouchableOpacity>
          <Text style={[styles.footerText, styles.footerLink]}>
            Forgot your password?
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    alignItems: "center",
    gap: 5,
  },
  footerText: {
    fontSize: 14,
  },
  footerLink: {
    color: "#1eae19",
  },
});
