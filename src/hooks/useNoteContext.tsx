import NotesContext from "@/context/NotesContext";
import { useContext } from "react";

export function useNotesContext() {
  const context = useContext(NotesContext);

  if (context === undefined) {
    throw new Error('useNotesContext must be used within a NotesProvider');
  }
  return context;
}