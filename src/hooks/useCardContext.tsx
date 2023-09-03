import CardsContext from "@/context/CardsContext";
import { useContext } from "react";

export function useCardsContext() {
  const context = useContext(CardsContext);

  if (context === undefined) {
    throw new Error('useCardsContext must be used within a CardsProvider');
  }
  return context;
}