import { useOrganizations } from '@/features/organizations/hooks/useOrganizations';
import { organizationsTableColumns } from '../datatable-columns/organizations-table';
import { DataTable } from '@/components/ui/datatable';

export const OrganizationsPage = () => {
  const { organizations, error, isLoading } = useOrganizations();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="page p-2" id="users-page">
      <DataTable columns={organizationsTableColumns} data={organizations} />
    </div>
  );
};