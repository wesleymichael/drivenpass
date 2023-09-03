import useGetNotes from '@/hooks/api/useGetNotes';
import { Note } from '@/services/notesApi';
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';

interface NotesContextProps {
  notesData: Note[];
  setNotesData: Dispatch<SetStateAction<Note[]>>;
}

const NotesContext = createContext<NotesContextProps | undefined>(undefined);


interface NotesProviderProps {
  children: ReactNode;
}

export function NotesProvider({ children }: NotesProviderProps) {
  const { notes } = useGetNotes();
  const [notesData, setNotesData] = useState<Note[]>([]);

  useEffect(() => {
    if (notes !== null) {
      setNotesData(notes);
    }
  }, [notes]);

  return (
    <NotesContext.Provider value={{ notesData, setNotesData }}>
      {children}
    </NotesContext.Provider>
  );
}

export default NotesContext;