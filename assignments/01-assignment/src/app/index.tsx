import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InputSet from "@/components/InputSet";
import SocialLogin from "@/components/SocialLogin";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/components/Button";

function SignInScreen() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const [focusedField, setFocusedField] = useState<"email" | "password" | null>(
    null,
  );
  const [showPassword, setShowPassword] = useState(false);

  function handleChange(field: "email" | "password", value: string) {
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
          heading="Sign In"
          subHeading="Let's experience the joy of telecare AI"
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
            value={formState.password}
            onChangeText={(text) => handleChange("password", text)}
            focused={focusedField === "password"}
            onFocus={() => setFocusedField("password")}
            onBlur={() => setFocusedField(null)}
            secureTextEntry={!showPassword}
            showPasswordToggle
            showPassword={showPassword}
            onTogglePassword={() => setShowPassword((prev) => !prev)}
          />

          <Button buttonText="Sign In" />
        </View>

        <SocialLogin />

        <Footer
          btnText="Sign Up"
          btnPara="Don't have an account?"
          showForgotPassword={true}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const index = () => {
  return <SignInScreen />;
};

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

export default index;
