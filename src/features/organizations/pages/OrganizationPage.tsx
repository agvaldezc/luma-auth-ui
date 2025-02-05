import { useParams } from 'react-router';
import { useOrganization } from '../hooks/useOrganization';

export const OrganizationPage = () => {
  const { id: organizationId } = useParams<{ id: string }>();
  
  if (!organizationId) {
    throw new Error('Organization ID is required');
  }

  const { organization, isLoading, error } = useOrganization(organizationId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="page" id="user-page">
      <pre>
        <code>{JSON.stringify(organization, null, 2)}</code>
      </pre>
    </div>
  );
};
