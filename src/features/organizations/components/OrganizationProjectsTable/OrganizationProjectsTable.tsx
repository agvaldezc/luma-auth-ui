import { DataTable } from '@/components/ui/datatable';
import { organizationProjectsTableColumns } from '@/features/organizations/datatable-columns/organization-projects-table';
import useOrganizationProjects from '@/features/organizations/hooks/use-organization-projects';

type OrganizationsProjectsTableProps = {
  organizationId: string;
};

const OrganizationsProjectsTable = ({ organizationId }: OrganizationsProjectsTableProps) => {
  const {
    data: projects,
    isLoading,
    error,
  } = useOrganizationProjects(organizationId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <DataTable data={projects} columns={organizationProjectsTableColumns} />;
};

export default OrganizationsProjectsTable;
