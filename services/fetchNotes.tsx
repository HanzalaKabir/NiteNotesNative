import { useNotes } from "../context/NotesContext";

export const fetchNotes = () => {
  const { notes, setNotes } = useNotes();
};
