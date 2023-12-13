import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api'

export interface Employee {
  id: number;
  created_at: string;
  first_name: string;
  last_name: string;
  email: string;
  description: string;
  image: string;
}


export const fetchEmployees = createAsyncThunk<Employee[]>('users/fetchEmployees', async () => {
  const response = await api.get('/users');
  return response.data;
});
