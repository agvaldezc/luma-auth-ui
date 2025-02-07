import { SWR_OrganizationsKey } from '@/features/organizations/hooks/use-organizations';
import { CreateOrganizationFormValues } from '@/features/organizations/schemas/createOrganizationForm';
import axios from 'axios';

export const createOrganization = async (
  data: CreateOrganizationFormValues
) => {
  const resp = await axios.post(
    `http://localhost:8080/${SWR_OrganizationsKey}`,
    data
  );
  return resp.data;
};

export const deleteOrganization = async (id: string) => {
  const resp = await axios.delete(
    `http://localhost:8080/${SWR_OrganizationsKey}/${id}`
  );
  return resp.data;
};
