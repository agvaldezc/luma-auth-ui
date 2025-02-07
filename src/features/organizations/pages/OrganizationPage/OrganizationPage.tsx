import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import OrganizationsProjectsTable from '@/features/organizations/components/OrganizationProjectsTable/OrganizationProjectsTable';
import useOrganization from '@/features/organizations/hooks/use-organization';
import { useParams } from 'react-router';

const OrganizationPage = () => {
  const { id: organizationId } = useParams<{ id: string }>();

  if (!organizationId) {
    throw new Error('Organization ID is required');
  }

  const {
    data: organization,
    isLoading,
    error,
  } = useOrganization(organizationId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="page flex flex-col gap-4" id="users-page">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{organization?.name}</CardTitle>
          <CardDescription>ID: {organization?.id}</CardDescription>
        </CardHeader>
      </Card>
      <div className="flex gap-4 flex-grow">
        <Card className="flex-grow">
          <CardHeader>
            <CardTitle className="text-2xl">Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <OrganizationsProjectsTable organizationId={organizationId} />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default OrganizationPage;
