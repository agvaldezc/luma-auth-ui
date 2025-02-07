import { SWR_OrganizationsKey } from '@/features/organizations/api/contants';
import { getOrganizationUsers } from '@/features/organizations/api/organizations';
import { Organization } from '@/features/organizations/types/organization';
import { buildSWRKey } from '@/lib/utils';
import useSWR from 'swr';

const useOrganizationUsers = (organizationId: string) => {
  const swr = useSWR<Organization>(
    buildSWRKey([SWR_OrganizationsKey, organizationId, 'users']),
    (path: string) => getOrganizationUsers(path)
  );

  return swr;
};

export default useOrganizationUsers;
