'use no memo';

import { Button } from '@/components/ui/button';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CreateOrganizationFormSchema,
  CreateOrganizationFormValues,
} from '@/features/organizations/schemas/createOrganizationForm';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

type CreateOrganizationDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: CreateOrganizationFormValues) => void;
};

const CreateOrganizationFormDialog = ({
  open,
  onOpenChange,
  onSubmit,
}: CreateOrganizationDialogProps) => {
  const form = useForm<CreateOrganizationFormValues>({
    resolver: zodResolver(CreateOrganizationFormSchema),
    defaultValues: {
      name: '',
    },
  });
  const submitHandler = (data: CreateOrganizationFormValues) => {
    onSubmit(data);
    form.reset();
  };
  const openChangeHandler = (open: boolean) => {
    onOpenChange(open);
    form.reset();
  };
  return (
    <AlertDialog open={open} onOpenChange={openChangeHandler}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Create Organization</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>Create Organization</AlertDialogTitle>
        <AlertDialogDescription>
          This will create a new organization on the system.
        </AlertDialogDescription>
        <Form {...form}>
          <form className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Organization Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction asChild>
                <Button
                  type="submit"
                  onClick={form.handleSubmit(submitHandler)}
                >
                  Create Organization
                </Button>
              </AlertDialogAction>
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CreateOrganizationFormDialog;
