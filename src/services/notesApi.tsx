import { AxiosResponse } from 'axios';
import api from './api';

export async function getNotes(token: string) {
  const response: AxiosResponse = await api.get('/notes', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
