import useSWRMutation from 'swr/mutation';
import { CreateOrganizationFormValues } from '../schemas/createOrganizationForm';
import axios from 'axios';

export const useCreateOrganization = () => {
  const { trigger } = useSWRMutation(
    'http://localhost:8080/api/v1/organizations',
    async (url, { arg }: { arg: CreateOrganizationFormValues}) => {
      const resp = await axios.post(url, arg);
      return resp.data;
    },
  );

  return {
    createOrganization: trigger
  }
};
