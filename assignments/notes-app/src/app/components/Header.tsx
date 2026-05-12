import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "..";
import { FontAwesome } from "@expo/vector-icons";

interface HeaderProps {
  isDark: boolean | null;
  setIsDark: (val: boolean) => void;
  theme: {
    background: string;
    surface: string;
    text: string;
    textMuted: string;
  };
  onSearch: (text: string) => void;
}

const Header = ({ isDark, setIsDark, theme, onSearch }: HeaderProps) => {
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <View
      style={[styles.headerContainer, { backgroundColor: theme.background }]}
    >
      <View style={styles.topRow}>
        <Text style={[styles.headerTitle, { color: colors.goldDark }]}>
          My Notes
        </Text>
        <View style={styles.toggleContainer}>
          <Pressable
            onPress={toggleTheme}
            style={({ pressed }) => [
              styles.iconButton,
              {
                backgroundColor: theme.surface,
                borderColor: isDark ? "rgba(212, 175, 55, 0.4)" : "#eee",
                opacity: pressed ? 0.6 : 1,
              },
            ]}
          >
            <FontAwesome
              name={isDark ? "sun-o" : "moon-o"}
              size={20}
              color={isDark ? colors.gold : "#333"}
            />
          </Pressable>
        </View>
      </View>
      <View style={[styles.searchSection, { backgroundColor: theme.surface }]}>
        <FontAwesome
          name="search"
          size={16}
          color={theme.textMuted}
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Search notes..."
          onChangeText={(text) => onSearch(text)}
          placeholderTextColor={theme.textMuted}
          style={[styles.input, { color: theme.text }]}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "900",
    letterSpacing: -0.5,
  },
  toggleContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
    paddingHorizontal: 15,
    height: 50,
    borderWidth: 1,
    borderColor: "rgba(212, 175, 55, 0.2)",
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    height: "100%",
  },
});
