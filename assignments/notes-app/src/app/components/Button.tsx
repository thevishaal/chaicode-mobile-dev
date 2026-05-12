import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "..";

interface ButtonProps {
  onPress: () => void;
  isDark?: boolean | null;
  theme?: any;
}

const Button = ({ onPress }: ButtonProps) => {
  return (
    <View style={styles.container} pointerEvents="box-none">
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: colors.gold,
            opacity: pressed ? 0.9 : 1,
            transform: [{ scale: pressed ? 0.96 : 1 }],
          },
        ]}
      >
        <FontAwesome name="plus" size={18} color="#000" />
        <Text style={styles.text}>Add Note</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 999,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 30,
    shadowColor: "#D4AF37",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 10,
    minWidth: 170,
  },
  text: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10,
    letterSpacing: 1,
    textTransform: "uppercase",
  },
});
