import { Checkbox } from '@/components/ui/checkbox';
import { DataTableColumnHeader } from '@/components/ui/datatable-headers';
import { ColumnDef } from '@tanstack/react-table';

export type Organization = {
  id: string;
  name: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
};

export const organizationsTableColumns: ColumnDef<Organization>[] = [
  {
    id: 'select',
    header: ({ table }) => {
      return (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate')
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      );
    },
    cell: ({ row }) => {
      return (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  { accessorKey: 'name', header: ({ column }) => <DataTableColumnHeader column={column} title="Name" /> },
  {
    accessorKey: 'createdAt',
    header: 'Created At',
    cell: (context) => {
      const date = new Date(context.getValue() as string);
      return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
    },
  },
  { accessorKey: 'createdBy', header: 'Created By' },
  {
    accessorKey: 'updatedAt',
    header: 'Updated At',
    cell: (context) => {
      const date = new Date(context.getValue() as string);
      return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
    },
  },
  { accessorKey: 'updatedBy', header: 'Updated By' },
];
