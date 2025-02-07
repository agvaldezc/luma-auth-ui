import useSWR from 'swr';
import { SWR_OrganizationsKey } from '@/features/organizations/api/contants';
import { buildSWRKey } from '@/lib/utils';
import { Organization } from '@/features/organizations/types/organization';
import { fetcher } from '@/api/fetchers';

const useOrganization = (organizationId: string) => {
  return useSWR(
    buildSWRKey([SWR_OrganizationsKey, organizationId]),
    fetcher<Organization>
  );
};

export default useOrganization;
