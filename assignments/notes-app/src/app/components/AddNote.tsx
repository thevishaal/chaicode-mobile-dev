import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "..";

interface Note {
  id: number;
  title: string;
  desc: string;
  date: string;
  time: string;
}

interface AddNoteProps {
  theme: any;
  isDark: boolean | null;
  onGoBack: () => void;
  onSave: (note: Note) => void;
  existingNote: Note | null;
}

const AddNote = ({
  theme,
  isDark,
  onGoBack,
  onSave,
  existingNote,
}: AddNoteProps) => {
  const date = new Date();

  const [note, setNote] = useState({
    title: "",
    desc: "",
  });

  useEffect(() => {
    if (existingNote) {
      setNote({
        title: existingNote.title,
        desc: existingNote.desc,
      });
    }
  }, [existingNote]);

  const isEditing = !!existingNote;

  const handleSave = () => {
    if (note.title.trim() === "" || note.desc.trim() === "")
      return Alert.alert("Add Note", "Title and Description is required.");

    onSave({
      ...note,
      id: isEditing ? existingNote.id : Date.now(),
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString(),
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[styles.mainContainer, { backgroundColor: theme.background }]}
    >
      <View
        style={[styles.header, { borderBottomColor: isDark ? "#333" : "#eee" }]}
      >
        <Pressable
          onPress={onGoBack}
          style={({ pressed }) => [
            styles.backBtn,
            { opacity: pressed ? 0.5 : 1 },
          ]}
        >
          <FontAwesome name="angle-left" size={28} color={colors.gold} />
          <Text style={[styles.backText, { color: colors.gold }]}>Back</Text>
        </Pressable>

        <Text style={[styles.headerTitle, { color: theme.text }]}>
          {isEditing ? "Edit Note" : "New Note"}
        </Text>

        <Pressable onPress={handleSave} style={styles.saveBtn}>
          <Text style={styles.saveBtnText}>
            {isEditing ? "Update" : "Save"}
          </Text>
        </Pressable>
      </View>

      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        <View style={[styles.inputWrapper, { backgroundColor: theme.surface }]}>
          <TextInput
            value={note.title}
            onChangeText={(text) => setNote({ ...note, title: text })}
            placeholder="Title..."
            placeholderTextColor={theme.textMuted}
            style={[styles.titleInput, { color: theme.text }]}
          />
        </View>

        <View
          style={[
            styles.inputWrapper,
            styles.descWrapper,
            { backgroundColor: theme.surface },
          ]}
        >
          <TextInput
            value={note.desc}
            onChangeText={(text) => setNote({ ...note, desc: text })}
            placeholder="Start typing your thoughts..."
            placeholderTextColor={theme.textMuted}
            style={[styles.descInput, { color: theme.text }]}
            multiline
            textAlignVertical="top"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddNote;

const styles = StyleSheet.create({
  mainContainer: { flex: 1 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  backBtn: {
    flexDirection: "row",
    alignItems: "center",
    minWidth: 60,
  },
  backText: {
    fontSize: 17,
    marginLeft: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
  },
  saveBtn: {
    backgroundColor: colors.gold,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 15,
  },
  saveBtnText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 14,
  },
  body: {
    paddingVertical: 16,
  },
  inputWrapper: {
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "rgba(212, 175, 55, 0.1)",
  },
  descWrapper: {
    minHeight: 300,
    flex: 1,
  },
  titleInput: {
    fontSize: 20,
    fontWeight: "bold",
  },
  descInput: {
    fontSize: 16,
    lineHeight: 24,
    flex: 1,
  },
});
