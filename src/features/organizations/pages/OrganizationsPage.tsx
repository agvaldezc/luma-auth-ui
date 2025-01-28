import { useOrganizations } from '@/features/organizations/hooks/useOrganizations';
import { OrganizationsTable } from '../components/OrganizationsTable/OrganizationsTable';
import { columns } from '../components/OrganizationsTable/columns';

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
      <OrganizationsTable columns={columns} data={organizations ?? []} />
    </div>
  );
};