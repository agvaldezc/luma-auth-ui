import useSWR from 'swr';
import { Organization } from '../datatable-columns/organizations-table';
import axios from 'axios';

export const useOrganizations = () => {
  const {
    data: response,
    error,
    isLoading,
    mutate,
  } = useSWR<{ data: Organization[] }>(
    'http://localhost:8080/api/v1/organizations',
    (url: string) => axios.get(url).then((res) => res.data),
    {
      shouldRetryOnError: false,
    }
  );

  return {
    organizations: response?.data ?? [],
    error,
    isLoading,
    mutate
  };
};
