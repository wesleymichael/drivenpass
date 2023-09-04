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

export interface CredentialBody {
  password: string;
  title: string;
  url: string;
  username: string;
}

export async function getCredentials(token: string) {
  const response: AxiosResponse = await api.get('/credentials', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data as Credential[];
}

export async function createCredential(token: string, body: CredentialBody) {
  const response: AxiosResponse = await api.post('/credentials', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data as Credential;
}

export async function deleteCredential(token: string, id: number) {
  const response: AxiosResponse = await api.delete(`/credentials/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data as Credential;
}