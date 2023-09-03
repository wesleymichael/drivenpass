import { AxiosResponse } from 'axios';
import api from './api';

export async function getCredentials(token: string) {
  const response: AxiosResponse = await api.get('/credentials', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
