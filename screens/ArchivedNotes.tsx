import { ScrollView, View, StyleSheet, Pressable, Image } from "react-native";
import { useNotes } from "../context/NotesContext";
import { NoteCard } from "../components/NoteCard";
import plusIcon from "../assets/icons/plus.png";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  "All Notes": undefined;
  "Create Note": undefined;
  "Note Details": undefined;
  Login: undefined;
  "Pinned Notes": undefined;
};

type PinnedNotesScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Pinned Notes"
>;

type Props = {
  navigation: PinnedNotesScreenNavigationProp;
};

export const ArchivedNotes: React.FC<Props> = ({ navigation }) => {
  const { notes } = useNotes();

  const handlePlusIconPress = () => {
    navigation.navigate("Create Note");
  };

  const handleNotePress = () => {
    navigation.navigate("Note Details");
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollview}>
        {notes
          .filter((note) => note.isArchived)
          .map((note, index) => (
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
