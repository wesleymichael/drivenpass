import { AxiosResponse } from 'axios';
import api from './api';

export interface Credential {
  id: number;
  password: string;
  title: string;
  url: string;
  userId: number;
  username: string;
  createdAt: Date;
  updatedAt: Date;
}

export async function getCredentials(token: string) {
  const response: AxiosResponse = await api.get('/credentials', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data as Credential[];
}
