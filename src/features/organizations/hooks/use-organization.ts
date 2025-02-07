import useSWR from 'swr';
import axios from 'axios';
import { Organization } from '@/features/organizations/datatable-columns/organizations-table';

const useOrganization = (id: string) => {
  const {
    data: response,
    error,
    isLoading,
  } = useSWR<{ data: Organization }>(
    `http://localhost:8080/api/v1/organizations/${id}`,
    (url: string) => axios.get(url).then((res) => res.data),
    {
      shouldRetryOnError: false,
    }
  );

  return {
    organization: response?.data ?? [],
    error,
    isLoading,
  };
};

export default useOrganization;
