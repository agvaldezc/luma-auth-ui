import useSWR from 'swr';
import { Organization } from '../components/OrganizationsTable/columns';

export const useOrganizations = () => {
  const {
    data: response,
    error,
    isLoading,
  } = useSWR<{ data: Organization[] }>(`http://localhost:8080/api/v1/organizations`, {
    shouldRetryOnError: false,
  });

  return {
    organizations: response?.data ?? [],
    error,
    isLoading,
  };
};
