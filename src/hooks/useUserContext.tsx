import UserContext from "@/context/UserContext";
import { useContext } from "react";

export function useUserContext() {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useNotesContext must be used within a NotesProvider');
  }
  return context;
}
