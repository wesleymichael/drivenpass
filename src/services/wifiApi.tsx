import { AxiosResponse } from 'axios';
import api from './api';

export async function getWifi(token: string) {
  const response: AxiosResponse = await api.get('/wifi', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
