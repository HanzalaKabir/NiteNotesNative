import {
  useContext,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

export interface NoteType {
  title: string;
  note: string;
  isArchived: boolean;
  isPinned: boolean;
  onPress?: () => void;
}

interface NotesContextType {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  inputNote: string;
  setInputNote: Dispatch<SetStateAction<string>>;
  notes: NoteType[];
  setNotes: Dispatch<SetStateAction<any[]>>;
  documentId: string;
  setDocumentId: Dispatch<SetStateAction<string>>;
}

const NotesContext = createContext<NotesContextType>({
  title: "",
  setTitle: () => {},
  inputNote: "",
  setInputNote: () => {},
  notes: [],
  setNotes: () => {},
  documentId: "",
  setDocumentId: () => {},
});

export const NotesProvider = (props: { children: React.ReactNode }) => {
  const [title, setTitle] = useState("");
  const [inputNote, setInputNote] = useState("");
  const [notes, setNotes] = useState<any[]>([]);
  const [documentId, setDocumentId] = useState("");

  return (
    <NotesContext.Provider
      value={{
        title,
        setTitle,
        inputNote,
        setInputNote,
        notes,
        setNotes,
        documentId,
        setDocumentId,
      }}
    >
      {props.children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => useContext(NotesContext);
