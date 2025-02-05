import { useOrganizations } from '@/features/organizations/hooks/useOrganizations';
import { organizationsTableColumns } from '../datatable-columns/organizations-table';
import { DataTable } from '@/components/ui/datatable';
import { CreateOrganizationFormValues } from '../schemas/createOrganizationForm';
import { CreateOrganizationFormDialog } from '../components/CreateOrganizationFormDialog';
import { useState } from 'react';
import { useCreateOrganization } from '../hooks/useCreateOrganization';

export const OrganizationsPage = () => {
  const { organizations, error, isLoading } = useOrganizations();
  const { createOrganization } = useCreateOrganization();
  const [open, setOpen] = useState(false);
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleCreateOrganization = async (data: CreateOrganizationFormValues) => {
    await createOrganization(data);
    setOpen(false);
  };
    
  return (
    <section className="page flex flex-col gap-4" id="users-page">
      <div className="toolbar">
        <CreateOrganizationFormDialog onOpenChange={setOpen} open={open} onSubmit={handleCreateOrganization} />
      </div>
      <DataTable columns={organizationsTableColumns} data={organizations} />
    </section>
  );
};
