import { useContext } from 'react';
import UserContext, { UserContextProps } from '@/context/UserContext';

export default function useToken() {
  const { userData: user } = useContext(UserContext) as UserContextProps;

  return user.token;
}
