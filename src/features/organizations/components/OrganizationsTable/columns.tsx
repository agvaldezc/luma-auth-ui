import { ColumnDef } from '@tanstack/react-table';

export type Organization = {
  id: string;
  name: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
};

export const columns: ColumnDef<Organization>[] = [
 { accessorKey: 'name', header: 'Name'},
 { accessorKey: 'createdAt', header: 'Created At', cell: (info) => { const date = new Date(info.getValue() as string); return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`; }  },
 { accessorKey: 'createdBy', header: 'Created By' },
 { accessorKey: 'updatedAt', header: 'Updated At', cell: (info) => { const date = new Date(info.getValue() as string); return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`; }  },
 { accessorKey: 'updatedBy', header: 'Updated By'},
];
