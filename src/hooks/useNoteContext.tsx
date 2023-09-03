import NotesContext from "@/context/NotesContext";
import { useContext } from "react";

export function useNotesContext() {
  const context = useContext(NotesContext);

  if (context === undefined) {
    throw new Error('useCredentialContext must be used within a CredentialProvider');
  }
  return context;
}