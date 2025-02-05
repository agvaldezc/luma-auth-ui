import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { DataTableColumnHeader } from '@/components/ui/datatable-headers';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LinkButton } from '@/components/ui/link-button';
import { ColumnDef } from '@tanstack/react-table';
import { LucideMoreHorizontal } from 'lucide-react';

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
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => {
      const organization = row.original;
      return (
        <LinkButton href={`/organizations/${organization.id}`}>
          {organization.name}
        </LinkButton>
      );
    },
  },
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
  {
    id: 'actions',
    cell: ({ row }) => {
      const organization = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <LucideMoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(organization.id)}
            >
              Copy Organization ID
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
