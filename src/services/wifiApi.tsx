import { AxiosResponse } from 'axios';
import api from './api';

export interface Wifi {
  id: number;
  title: string;
  name: string;
  password: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}

export async function getWifis(token: string) {
  const response: AxiosResponse = await api.get('/wifi', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data as Wifi[];
}
