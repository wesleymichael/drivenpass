
import WifiContext from "@/context/WifiContext";
import { useContext } from "react";

export function useWifiContext() {
  const context = useContext(WifiContext);

  if (context === undefined) {
    throw new Error('useCredentialContext must be used within a CredentialProvider');
  }
  return context;
}