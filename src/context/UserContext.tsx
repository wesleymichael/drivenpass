import React, { createContext, Dispatch, ReactNode, SetStateAction } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

interface UserData {
  token: string;
}
export interface UserContextProps {
  userData: UserData;
  setUserData: Dispatch<SetStateAction<UserData>>;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [userData, setUserData] = useLocalStorage<UserData>('userData', { token: '' });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
