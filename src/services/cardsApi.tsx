import { AxiosResponse } from 'axios';
import api from './api';

export interface CardBody {
  title: string;
  number: string;
  name: string;
  cvv: string;
  exp: string;
  password: string;
  isVirtual: boolean;
  isCredit: boolean;
  isDebit: boolean;
}
export interface Cards extends CardBody {
  id: number;
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

export async function createCard(token: string, body: CardBody ) {
  const response: AxiosResponse = await api.post('/cards', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data as Cards;
}

export async function deleteCards(token: string, id: number) {
  const response: AxiosResponse = await api.delete(`/cards/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data as Cards;
}