import { LumaApiResponse } from '@/types/api';
import axios from 'axios';

export const fetcher = async <T>(url: string) => {
  const resp = await axios.get<LumaApiResponse<T>>(
    `http://localhost:8080/${url}`
  );
  return resp.data.data;
};