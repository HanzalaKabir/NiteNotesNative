import { StyleSheet, View, Text, Pressable } from "react-native";
import { NoteType } from "../context/NotesContext";

export const NoteCard: React.FC<NoteType> = ({ title, note, onPress }) => {
  return (
    <Pressable style={styles.noteCard} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.note}>{note}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  noteCard: {
    backgroundColor: "#FFC67D",
    marginHorizontal: 8,
    marginVertical: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 10,
    padding: 13,
  },
  title: {},
  note: {},
});
