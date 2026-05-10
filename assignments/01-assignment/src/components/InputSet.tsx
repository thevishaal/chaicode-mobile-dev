import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";
import {
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    View,
} from "react-native";

type IoniconName = ComponentProps<typeof Ionicons>["name"];

type InputSetProps = TextInputProps & {
    label: string;
    icon: IoniconName;
    focused: boolean;
    showPasswordToggle?: boolean;
    showPassword?: boolean;
    onTogglePassword?: () => void;
};

export default function InputSet({
    label,
    icon,
    focused,
    showPasswordToggle = false,
    showPassword = false,
    onTogglePassword,
    ...textInputProps
}: InputSetProps) {
    return (
        <View style={styles.inputSet}>
            <Text style={styles.label}>{label}</Text>

            <View
                style={[
                    styles.inputContainer,
                    focused && styles.inputContainerFocused,
                ]}
            >
                <Ionicons name={icon} size={24} />

                <TextInput
                    style={styles.input}
                    placeholderTextColor="#9CA3AF"
                    {...textInputProps}
                />

                {showPasswordToggle && (
                    <Pressable onPress={onTogglePassword}>
                        <Ionicons
                            name={
                                showPassword ? "eye-off-outline" : "eye-outline"
                            }
                            size={22}
                            color="#888"
                        />
                    </Pressable>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputSet: {
        gap: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: "500",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingHorizontal: 14,
        height: 56,
        backgroundColor: "#fff",
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "transparent",
    },
    inputContainerFocused: {
        borderColor: "#1eae19",
    },
    input: {
        fontSize: 16,
        flex: 1,
        color: "#2f2f2f",
    },
});