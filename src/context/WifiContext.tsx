import useGetWifi from '@/hooks/api/useGetWifi';
import { Wifi } from '@/services/wifiApi';
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';

interface WifiContextProps {
  wifisData: Wifi[];
  setWifisData: Dispatch<SetStateAction<Wifi[]>>;
}

const WifiContext = createContext<WifiContextProps | undefined>(undefined);


interface WifiProviderProps {
  children: ReactNode;
}

export function WifiProvider({ children }: WifiProviderProps) {
  const { wifis } = useGetWifi();
  const [wifisData, setWifisData] = useState<Wifi[]>([]);

  useEffect(() => {
    if (wifis !== null) {
      setWifisData(wifis);
    }
  }, [wifis]);

  return (
    <WifiContext.Provider value={{ wifisData, setWifisData }}>
      {children}
    </WifiContext.Provider>
  );
}

export default WifiContext;