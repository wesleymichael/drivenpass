import api from './api';

export async function register(email: string, password: string) {
  const response = await api.post('/auth/register', { email, password });
  return response.data;
}