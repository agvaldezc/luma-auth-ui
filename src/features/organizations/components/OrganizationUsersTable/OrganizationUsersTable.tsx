import useOrganizationUsers from '@/features/organizations/hooks/use-organization-users';

type OrganizationsUsersTableProps = {
  organizationId: string;
};

const OrganizationsUsersTable = ({ organizationId }: OrganizationsUsersTableProps) => {
  const {
    data: users,
    isLoading,
    error,
  } = useOrganizationUsers(organizationId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <div>Organization {organizationId} Users Table</div>
};

export default OrganizationsUsersTable;
