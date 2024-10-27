import { View, StyleSheet, ScrollView, Pressable, Image } from "react-native";
import { NoteCard } from "../components/NoteCard";
import { NoteType, useNotes } from "../context/NotesContext";
//import { Button } from "react-native-paper";
import plusIcon from "../assets/icons/plus.png";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useAccessToken } from "../context/TokenContext";

type RootStackParamList = {
  "All Notes": undefined;
  "Create Note": undefined;
  "Note Details": undefined;
  Login: undefined;
};

type AllNotesScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "All Notes"
>;

type Props = {
  navigation: AllNotesScreenNavigationProp;
};

export const AllNotes: React.FC<Props> = ({ navigation }) => {
  const { notes, setNotes } = useNotes();
  const { accessToken, setAccessToken } = useAccessToken();

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
  notes.push(otherNote);
  notes.push(newNote);
  setNotes(notes);

  const handlePlusIconPress = () => {
    navigation.navigate("Create Note");
  };

  const handleNotePress = () => {
    navigation.navigate("Note Details");
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollview}>
        {notes.map((note, index) => (
          <NoteCard
            note={note.note}
            title={note.title}
            isArchived={note.isArchived}
            isPinned={note.isPinned}
            key={`${note.title}-${index}`}
            onPress={handleNotePress}
          />
        ))}
      </ScrollView>
      <Pressable style={styles.pressable} onPress={handlePlusIconPress}>
        <Image source={plusIcon} style={styles.icon} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollview: {},
  icon: {
    width: 50,
    height: 50,
  },
  pressable: {
    position: "absolute",
    right: 30,
    bottom: 50,
  },
});
