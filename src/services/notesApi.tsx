import { AxiosResponse } from 'axios';
import api from './api';

export interface Note {
  id: number;
  title: string;
  anotation: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}

export async function getNotes(token: string) {
  const response: AxiosResponse = await api.get('/notes', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data as Note[];
}
