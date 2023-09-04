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

export interface NoteBody {
  title: string;
  anotation: string;
}

export async function getNotes(token: string) {
  const response: AxiosResponse = await api.get('/notes', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data as Note[];
}

export async function createNote(token: string, body: NoteBody) {
  const response: AxiosResponse = await api.post('/notes', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data as Note;
}

export async function deleteNote(token: string, id: number) {
  const response: AxiosResponse = await api.delete(`/notes/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data as Note;
}