import useGetCredentials from '@/hooks/api/useGetCredentials';
import { Credential } from '@/services/credentialApi';
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';

interface CredentialContextProps {
  credentialsData: Credential[];
  setCredentialsData: Dispatch<SetStateAction<Credential[]>>;
}

const CredentialContext = createContext<CredentialContextProps | undefined>(undefined);


interface CredentialProviderProps {
  children: ReactNode;
}

export function CredentialProvider({ children }: CredentialProviderProps) {
  const { credentials } = useGetCredentials();
  const [credentialsData, setCredentialsData] = useState<Credential[]>([]);

  useEffect(() => {
    if (credentials !== null) {
      setCredentialsData(credentials);
    }
  }, [credentials]);

  return (
    <CredentialContext.Provider value={{ credentialsData, setCredentialsData }}>
      {children}
    </CredentialContext.Provider>
  );
}

export default CredentialContext;