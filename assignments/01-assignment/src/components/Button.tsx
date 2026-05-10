import { Pressable, StyleSheet, Text} from 'react-native'
import { Ionicons } from "@expo/vector-icons"
import React from 'react'

type props = {
    buttonText: String
}

const Button = ({buttonText}: props) => {
  return (
    <Pressable style={styles.button}>
        <Text style={styles.buttonText}>
            {buttonText}
        </Text>
        <Ionicons name="arrow-forward" size={24} color="#fff" />
    </Pressable>
  )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        borderRadius: 15,
        backgroundColor: "#1eae19",
        height: 56,
    },
    buttonText: {
        fontSize: 20,
        color: "#fff"
    }
})

export default Button