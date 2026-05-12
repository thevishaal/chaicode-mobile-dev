import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "..";
import { FontAwesome } from "@expo/vector-icons";

interface Note {
  id: number;
  title: string;
  desc: string;
  date: string;
  time: string;
}

interface NoteCardProps {
  theme: {
    surface: string;
    text: string;
    textMuted: string;
    background: string;
  };
  notes: Note[];
  onGoUpdateNote: (note: Note) => void;
  onDeleteNote: (id: number) => void;
  searchQuery: string;
}

const NoteCard = ({
  theme,
  notes,
  onGoUpdateNote,
  searchQuery,
  onDeleteNote,
}: NoteCardProps) => {
  const isSearching = searchQuery && searchQuery.length > 0;

  const renderItem = ({ item }: { item: Note }) => {
    const isRecentlyAdded = Date.now() - item.id < 60000;

    return (
      <Pressable
        onPress={() => onGoUpdateNote(item)}
        style={({ pressed }) => [
          styles.noteCard,
          {
            backgroundColor: theme.surface,
            opacity: pressed ? 0.9 : 1,
            transform: [{ scale: pressed ? 0.98 : 1 }],
          },
        ]}
      >
        {isRecentlyAdded && (
          <View style={[styles.newBadge, { backgroundColor: colors.gold }]}>
            <Text style={styles.newBadgeText}>NEW</Text>
          </View>
        )}

        <View style={styles.headerRow}>
          <Text
            numberOfLines={1}
            style={[styles.title, { color: colors.goldDark }]}
          >
            {item.title}
          </Text>
          <Text style={[styles.dateText, { color: theme.textMuted }]}>
            {item.date}
          </Text>
        </View>

        <Text numberOfLines={3} style={[styles.desc, { color: theme.text }]}>
          {item.desc}
        </Text>

        <View style={styles.footerRow}>
          <Pressable
            onPress={() => onDeleteNote(item.id)}
            hitSlop={10} // Click area badhane ke liye
            style={({ pressed }) => [
              styles.deleteBtn,
              { opacity: pressed ? 0.5 : 1 },
            ]}
          >
            <FontAwesome name="trash-o" size={18} color="#ff4444" />
          </Pressable>

          <View
            style={[
              styles.timeBadge,
              { backgroundColor: colors.goldLight + "30" },
            ]}
          >
            <Text style={[styles.timeText, { color: colors.goldDark }]}>
              {item.time}
            </Text>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={notes}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <View
              style={[styles.iconCircle, { backgroundColor: theme.surface }]}
            >
              <FontAwesome
                name={isSearching ? "search" : "sticky-note-o"}
                size={40}
                color={theme.textMuted}
                style={{ transform: [{ rotate: "-10deg" }] }}
              />
            </View>

            <Text style={[styles.emptyTitle, { color: theme.text }]}>
              {isSearching ? "No Results Found" : "No Notes Yet"}
            </Text>

            <Text style={[styles.emptySubtitle, { color: theme.textMuted }]}>
              {isSearching
                ? "Try searching with a different keyword."
                : "Your thoughts are empty. Tap the button below to add your first note!"}
            </Text>
          </View>
        )}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default NoteCard;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  listContainer: {
    paddingBottom: 100,
    paddingTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    marginRight: 10,
  },
  dateText: {
    fontSize: 12,
  },
  desc: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  timeBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  timeText: {
    fontSize: 11,
    fontWeight: "600",
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    paddingHorizontal: 40,
  },
  iconCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "rgba(212, 175, 55, 0.1)",
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    textAlign: "center",
    lineHeight: 20,
  },

  noteCard: {
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "rgba(212, 175, 55, 0.1)",
    position: "relative",
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  newBadge: {
    position: "absolute",
    top: 0,
    left: 0,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderBottomRightRadius: 12,
    zIndex: 10,
  },
  newBadgeText: {
    color: "#000",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 0.5,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    marginTop: 5,
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  deleteBtn: {
    padding: 5,
  },
});
