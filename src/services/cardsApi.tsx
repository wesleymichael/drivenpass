import { AxiosResponse } from 'axios';
import api from './api';

export async function getCards(token: string) {
  const response: AxiosResponse = await api.get('/cards', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
