// 'use no memo';

// import { Button } from '@/components/ui/button';

// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import {
//   CreateUserFormSchema,
//   CreateUserFormValues,
// } from '@/features/users/schemas/createUserForm';
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from '@/components/ui/alert-dialog';

// type CreateUserDialogProps = {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
//   onSubmit: (data: CreateUserFormValues) => void;
// };

// const CreateUserFormDialog = ({
//   open,
//   onOpenChange,
//   onSubmit,
// }: CreateUserDialogProps) => {
//   const form = useForm<CreateUserFormValues>({
//     resolver: zodResolver(CreateUserFormSchema),
//     defaultValues: {
//       name: '',
//       email: '',
//     },
//   });
//   const submitHandler = (data: CreateUserFormValues) => {
//     onSubmit(data);
//     form.reset();
//   };
//   const openChangeHandler = (open: boolean) => {
//     onOpenChange(open);
//     form.reset();
//   };
//   return (
//     <AlertDialog open={open} onOpenChange={openChangeHandler}>
//       <AlertDialogTrigger asChild>
//         <Button variant="outline">Create User</Button>
//       </AlertDialogTrigger>
//       <AlertDialogContent>
//         <AlertDialogTitle>Create User</AlertDialogTitle>
//         <AlertDialogDescription>
//           This will create a new user on the system.
//         </AlertDialogDescription>
//         <Form {...form}>
//           <form className="space-y-4">
//             <FormField
//               control={form.control}
//               name="name"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>User Name</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Name" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             ></FormField>
//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>User Email</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Email" {...field} type="email" />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             ></FormField>
//             <AlertDialogFooter>
//               <AlertDialogCancel>Cancel</AlertDialogCancel>
//               <AlertDialogAction asChild>
//                 <Button
//                   type="submit"
//                   onClick={form.handleSubmit(submitHandler)}
//                 >
//                   Create User
//                 </Button>
//               </AlertDialogAction>
//             </AlertDialogFooter>
//           </form>
//         </Form>
//       </AlertDialogContent>
//     </AlertDialog>
//   );
// };

// export default CreateUserFormDialog;
