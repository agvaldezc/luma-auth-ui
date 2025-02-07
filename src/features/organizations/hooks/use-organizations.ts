import useSWR from 'swr';
import { Organization } from '../datatable-columns/organizations-table';
import axios from 'axios';

export const SWR_OrganizationsKey = 'api/v1/organizations' as const;

const useOrganizations = () => {
  const {
    data: response,
    error,
    isLoading,
    isValidating,
    mutate,
  } = useSWR<{ data: Organization[] }>(
    SWR_OrganizationsKey,
    (url: string) => axios.get(`http://localhost:8080/${url}`).then((res) => res.data),
    {
      shouldRetryOnError: false,
    }
  );

  return {
    organizations: response?.data ?? [],
    error,
    isLoading,
    isValidating,
    mutate
  };
};

export default useOrganizations;
