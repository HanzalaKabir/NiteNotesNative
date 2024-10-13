import { View, StyleSheet, ScrollView } from "react-native";
import { NoteCard } from "../components/NoteCard";
import { NoteType, useNotes } from "../context/NotesContext";

export const AllNotes = () => {
  const { notes, setNotes } = useNotes();
  const newNote: NoteType = {
    title: "Note title",
    note: "Note detail",
    isArchived: false,
    isPinned: false,
  };
  const otherNote: NoteType = {
    title: "Other note title",
    note: "Note detail",
    isArchived: false,
    isPinned: false,
  };
  notes.push(newNote);
  notes.push(otherNote);
  setNotes(notes);

  return (
    <ScrollView style={styles.container}>
      {notes.map((note) => (
        <NoteCard
          note={note.note}
          title={note.title}
          isArchived={note.isArchived}
          isPinned={note.isPinned}
          key={note.title}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
