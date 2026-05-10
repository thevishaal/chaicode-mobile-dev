import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InputSet from "@/components/InputSet";
import SignInButton from "@/components/Button";
import SocialLogin from "@/components/SocialLogin";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/components/Button";
import { navigate } from "expo-router/build/global-state/routing";

export default function SignUpScreen() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [focusedField, setFocusedField] = useState<
    "email" | "password" | "confirmPassword" | null
  >(null);
  const [showPassword, setShowPassword] = useState(false);

  function handleChange(
    field: "email" | "password" | "confirmPassword",
    value: string,
  ) {
    setFormState((prev) => ({
      ...prev,
      [field]: value,
    }));
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.screen}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Header
          heading="Sign Up For Free"
          subHeading="Sign up 1 minute for free!"
        />

        <View style={styles.form}>
          <InputSet
            label="Email Address"
            icon="mail-outline"
            placeholder="Enter your email..."
            value={formState.email}
            onChangeText={(text) => handleChange("email", text)}
            focused={focusedField === "email"}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField(null)}
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <InputSet
            label="Password"
            icon="lock-closed-outline"
            placeholder="Enter your password..."
            value={formState.confirmPassword}
            onChangeText={(text) => handleChange("password", text)}
            focused={focusedField === "password"}
            onFocus={() => setFocusedField("password")}
            onBlur={() => setFocusedField(null)}
            secureTextEntry={!showPassword}
            showPasswordToggle
            showPassword={showPassword}
            onTogglePassword={() => setShowPassword((prev) => !prev)}
          />

          <InputSet
            label="Password Confirmation"
            icon="lock-closed-outline"
            placeholder="Enter your confirm password..."
            value={formState.confirmPassword}
            onChangeText={(text) => handleChange("confirmPassword", text)}
            focused={focusedField === "confirmPassword"}
            onFocus={() => setFocusedField("confirmPassword")}
            onBlur={() => setFocusedField(null)}
            secureTextEntry={!showPassword}
            showPasswordToggle
            showPassword={showPassword}
            onTogglePassword={() => setShowPassword((prev) => !prev)}
          />
          <Button buttonText="Sign Up" />
        </View>
        <Footer
          btnText="Sign In"
          btnPara="Already have an account?"
          showForgotPassword={false}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f6f6f6",
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    gap: 50,
    paddingHorizontal: 30,
  },
  form: {
    gap: 20,
  },
});
