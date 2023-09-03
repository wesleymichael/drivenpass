import useGetCards from '@/hooks/api/useGetCards';
import { Cards } from '@/services/cardsApi';
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';

interface CardsContextProps {
  cardsData: Cards[];
  setCardsData: Dispatch<SetStateAction<Cards[]>>;
}

const CardsContext = createContext<CardsContextProps | undefined>(undefined);

interface CardsProviderProps {
  children: ReactNode;
}

export function CardsProvider({ children }: CardsProviderProps) {
  const { cards } = useGetCards();
  const [cardsData, setCardsData] = useState<Cards[]>([]);

  useEffect(() => {
    if (cards !== null) {
      setCardsData(cards);
    }
  }, [cards]);

  return (
    <CardsContext.Provider value={{ cardsData, setCardsData }}>
      {children}
    </CardsContext.Provider>
  );
}

export default CardsContext;