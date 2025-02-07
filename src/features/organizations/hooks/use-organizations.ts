import useSWR from 'swr';
import { SWR_OrganizationsKey } from '@/features/organizations/api/contants';
import { buildSWRKey } from '@/lib/utils';
import { Organization } from '@/features/organizations/types/organization';
import { fetcher } from '@/api/fetchers';

const useOrganizations = () => {
  const swr = useSWR<Organization[]>(
    buildSWRKey([SWR_OrganizationsKey]),
    fetcher<Organization[]>
  );

  return {
    ...swr,
    data: swr.data ?? [],
  };
};

export default useOrganizations;
