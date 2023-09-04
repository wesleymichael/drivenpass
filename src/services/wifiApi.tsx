import api from './api';
import { AxiosResponse } from 'axios';

export interface Wifi {
  id: number;
  title: string;
  name: string;
  password: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface WifiBody {
  title: string;
  name: string;
  password: string;
}

export async function getWifis(token: string) {
  const response: AxiosResponse = await api.get('/wifi', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data as Wifi[];
}

export async function createWifi(token: string, body: WifiBody) {
  const response: AxiosResponse = await api.post('/wifi', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data as Wifi;
}

export async function deleteWifi(token: string, id: number) {
  const response: AxiosResponse = await api.delete(`/wifi/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data as Wifi;
}