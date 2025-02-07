'use no memo';

import { DataTable } from '@/components/ui/datatable';
import { Skeleton } from '@/components/ui/skeleton';
import { organizationsTableColumns } from '@/features/organizations/datatable-columns/organizations-table';
import useOrganizations from '@/features/organizations/hooks/use-organizations';

const OrganizationsTable = () => {
  const {
    data: organizations,
    error,
    isLoading,
  } = useOrganizations();

  if (isLoading) {
    return <div className="w-full h-64">
      <Skeleton className="w-full h-full" />
    </div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <DataTable columns={organizationsTableColumns} data={organizations} />;
};

export default OrganizationsTable;
