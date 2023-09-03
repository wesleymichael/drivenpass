import WifiContext from "@/context/WifiContext";
import { useContext } from "react";

export function useWifiContext() {
  const context = useContext(WifiContext);

  if (context === undefined) {
    throw new Error('useWifiContext must be used within a WifiProvider');
  }
  return context;
}