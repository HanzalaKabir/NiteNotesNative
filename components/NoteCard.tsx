import { StyleSheet, View, Text } from "react-native";
import { NoteType } from "../context/NotesContext";

export const NoteCard: React.FC<NoteType> = ({ title, note }) => {
  return (
    <View style={styles.container}>
      <View style={styles.noteCard}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.note}>{note}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 5,

    marginHorizontal: 8,
    marginVertical: 10,
  },
  noteCard: {
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 10,
    padding: 13,
    overflow: "hidden",
  },
  title: {},
  note: {},
});
