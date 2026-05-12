import { Alert, StyleSheet, Text, View, useColorScheme } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import NoteCard from "./components/NoteCard";
import Header from "./components/Header";
import { StatusBar } from "expo-status-bar";
import Button from "./components/Button";
import AddNote from "./components/AddNote";

interface Note {
  id: number;
  title: string;
  desc: string;
  date: string;
  time: string;
}

const app = () => {
  const system = useColorScheme();
  const [isDark, setIsDark] = useState<boolean | null>(null);
  const [currentScreen, setCurrentScreen] = useState("home");
  const [notes, setNotes] = useState<Note[]>([]);
  const [searchQuery, setSearchQurey] = useState<string>("");
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  const filterNotes = notes.filter(
    (note: Note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.desc.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const addNoteToList = (newNote: Note) => {
    if (selectedNote) {
      const updateNotes = notes.map((note: Note) =>
        note.id === selectedNote.id ? { ...newNote, id: note.id } : note,
      );
      setNotes(updateNotes);
    } else {
      setNotes((prevNotes) => [newNote, ...prevNotes]);
    }
    setSelectedNote(null);
    setCurrentScreen("home");
  };

  const onEditNote = (note: Note) => {
    setSelectedNote(note);
    setCurrentScreen("add");
  };

  const deleteNote = (id: number) => {
    Alert.alert("Delete Note", `Do you want to delete this note?`, [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          setNotes(notes.filter((note) => note.id !== id));
        },
      },
    ]);
  };

  useEffect(() => {
    setIsDark(system === "dark");
  }, [system]);

  const theme = isDark ? colors.dark : colors.light;

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <StatusBar style={isDark ? "light" : "dark"} />
      {currentScreen === "home" ? (
        <>
          <Header
            isDark={isDark}
            setIsDark={setIsDark}
            theme={theme}
            onSearch={setSearchQurey}
          />
          <NoteCard
            theme={theme}
            notes={filterNotes}
            onGoUpdateNote={onEditNote}
            searchQuery={searchQuery}
            onDeleteNote={deleteNote}
          />
          <Button
            isDark={isDark}
            theme={theme}
            onPress={() => setCurrentScreen("add")}
          />
        </>
      ) : (
        <AddNote
          theme={theme}
          isDark={isDark}
          onSave={addNoteToList}
          existingNote={selectedNote}
          onGoBack={() => {
            setSelectedNote(null);
            setCurrentScreen("home");
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default app;

export const colors = {
  gold: "#D4AF37",
  goldLight: "#F4E0A1",
  goldDark: "#996515",
  white: "#FFFFFF",
  black: "#000000",

  light: {
    background: "#FFFFFF",
    surface: "#F9F6F0",
    text: "#1A1A1A",
    textMuted: "#666666",
    border: "#E5E5E5",
    tabBar: "#FFFFFF",
  },

  dark: {
    background: "#121212",
    surface: "#1E1E1E",
    text: "#F5F5F5",
    textMuted: "#AAAAAA",
    border: "#333333",
    tabBar: "#181818",
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
