import { DataTable } from '@/components/ui/datatable';
import { createOrganization } from '@/features/organizations/api/organizations';
import CreateOrganizationFormDialog from '@/features/organizations/components/CreateOrganizationFormDialog';
import { organizationsTableColumns } from '@/features/organizations/datatable-columns/organizations-table';
import useOrganizations from '@/features/organizations/hooks/use-organizations';
import { CreateOrganizationFormValues } from '@/features/organizations/schemas/createOrganizationForm';
import { useState } from 'react';

const OrganizationsPage = () => {
  const { organizations, error, isLoading, isValidating, mutate } = useOrganizations();
  const [open, setOpen] = useState(false);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleCreateOrganization = async (
    data: CreateOrganizationFormValues
  ) => {
    await mutate(createOrganization(data));
    setOpen(false);
  };

  return (
    <section className="page flex flex-col gap-4" id="users-page">
      <div className="toolbar flex gap-4">
        <CreateOrganizationFormDialog
          onOpenChange={setOpen}
          open={open}
          onSubmit={handleCreateOrganization}
        />
        {isValidating && <div>Validating...</div>}
      </div>
      <DataTable columns={organizationsTableColumns} data={organizations} />
    </section>
  );
};

export default OrganizationsPage;
