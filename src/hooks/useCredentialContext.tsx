import CredentialContext from "@/context/CredentialContext";
import { useContext } from "react";

export function useCredentialContext() {
  const context = useContext(CredentialContext);

  if (context === undefined) {
    throw new Error('useCredentialContext must be used within a CredentialProvider');
  }
  return context;
}