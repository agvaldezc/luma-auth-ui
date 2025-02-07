import { fetcher } from '@/api/fetchers';
import { SWR_OrganizationsKey } from '@/features/organizations/api/contants';
import { Project } from '@/features/organizations/types/organization';
import { buildSWRKey } from '@/lib/utils';
import useSWR from 'swr';

const useOrganizationProjects = (organizationId: string) => {
  const swr = useSWR(
    buildSWRKey([SWR_OrganizationsKey, organizationId, 'projects']),
    fetcher<Project[]>
  );

  return {
    ...swr,
    data: swr.data ?? [],
  };
};

export default useOrganizationProjects;
