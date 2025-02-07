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
import { Project } from '@/features/organizations/types/organization';
import { ColumnDef } from '@tanstack/react-table';
import { LucideMoreHorizontal } from 'lucide-react';

export const organizationProjectsTableColumns: ColumnDef<Project>[] = [
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
      const project = row.original;
      return (
        <LinkButton href={`/organizations/${project.id}`}>
          {project.name}
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
      const project = row.original;
      return (
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <LucideMoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(project.id)}
            >
              Copy Project ID
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
