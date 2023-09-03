import { AxiosResponse } from 'axios';
import api from './api';

interface Cards {
  id: number;
  title: string;
  number: string;
  name: string;
  cvv: string;
  exp: string;
  password: string;
  isVirtual: boolean;
  isCredit: boolean;
  isDebit: boolean;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}

export async function getCards(token: string) {
  const response: AxiosResponse = await api.get('/cards', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data as Cards[];
}
