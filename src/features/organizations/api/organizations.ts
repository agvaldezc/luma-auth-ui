import { CreateOrganizationFormValues } from '@/features/organizations/schemas/createOrganizationForm';
import axios from 'axios';

export const createOrganization = async (
  path: string,
  data: CreateOrganizationFormValues
) => {
  const resp = await axios.post(
    `http://localhost:8080/${path}`,
    data
  );
  return resp.data.data;
};

export const deleteOrganization = async (path: string) => {
  const resp = await axios.delete(
    `http://localhost:8080/${path}`
  );
  return resp.data.data;
};
