import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SWR_OrganizationsKey } from '@/features/organizations/api/contants';
import { createOrganization } from '@/features/organizations/api/organizations';
import CreateOrganizationFormDialog from '@/features/organizations/components/CreateOrganizationFormDialog';
import OrganizationsTable from '@/features/organizations/components/OrganizationsTable';
import { CreateOrganizationFormValues } from '@/features/organizations/schemas/createOrganizationForm';
import { buildSWRKey } from '@/lib/utils';
import { useState } from 'react';
import { mutate } from 'swr';

const OrganizationsPage = () => {
  const [open, setOpen] = useState(false);
  const handleCreateOrganization = async (
    data: CreateOrganizationFormValues
  ) => {
    const swrKey = buildSWRKey([SWR_OrganizationsKey]);
    mutate(swrKey, await createOrganization(swrKey, data));
    setOpen(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Organizations</CardTitle>
      </CardHeader>
      <CardContent>
        <section className="page flex flex-col gap-4" id="users-page">
          <div className="toolbar flex gap-4">
            <CreateOrganizationFormDialog
              onOpenChange={setOpen}
              open={open}
              onSubmit={handleCreateOrganization}
            />
          </div>
          <OrganizationsTable />
        </section>
      </CardContent>
    </Card>
  );
};

export default OrganizationsPage;
