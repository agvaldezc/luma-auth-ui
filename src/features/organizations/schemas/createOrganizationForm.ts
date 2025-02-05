import { z } from 'zod';

export const CreateOrganizationFormSchema = z.object({
  name: z.string().nonempty(),
});

export type CreateOrganizationFormValues = z.infer<typeof CreateOrganizationFormSchema>;
