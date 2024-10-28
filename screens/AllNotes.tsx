import { View, StyleSheet, ScrollView, Pressable, Image } from "react-native";
import { NoteCard } from "../components/NoteCard";
import { useNotes } from "../context/NotesContext";
//import { Button } from "react-native-paper";
import plusIcon from "../assets/icons/plus.png";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect } from "react";
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
  const { accessToken, username, setUsername, setAccessToken } =
    useAccessToken();

  useEffect(() => {
    if (!accessToken) {
      setNotes([]);
    }
  }, [accessToken]);

  useEffect(() => {
    const performAsyncOperation = async () => {
      try {
        if (accessToken && username) {
          const getNotes = await fetch(
            `https://notes-app-backend-c0mr.onrender.com/api/notes?username=${encodeURIComponent(
              username
            )}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: accessToken,
              },
            }
          );

          const response = await getNotes.json();
          console.log(response);
          if (response.note) {
            setNotes(response.note);
          } else if (response.error) {
            setAccessToken(null);
            setNotes([]);
            setUsername(null);
          }
        }
      } catch (error) {
        console.log(error, "error");
        setNotes([]);
        setAccessToken(null);
        setUsername(null);
        navigation.navigate("Login");
      }
    };
    performAsyncOperation();
  }, [accessToken, username]);

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
