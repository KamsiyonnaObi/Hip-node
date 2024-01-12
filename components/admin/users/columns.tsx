"use client";

import { Schema } from "mongoose";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { FormatDate } from "@/lib/formatDate";

import { ShadButton } from "@/components/ui/ShadButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/CheckBox";

export type UserDataTable = {
  _id: Schema.Types.ObjectId;
  fullName: string;
  username: string;
  email: string;
  password: string;
  occupation: string;
  profileImage: string;
  bannerImage: string;
  businessType: string;
  businessStage: string;
  codingLevel: string;
  website: string;
  twitter: string;
  facebook: string;
  instagram: string;
  followers: Schema.Types.ObjectId[];
  following: Schema.Types.ObjectId[];
  pinnedGroups: Schema.Types.ObjectId[];
  points: 0;
  createdAt: Date;
  updatedAt: Date;
};

export const columns: ColumnDef<UserDataTable>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "fullName",
    header: "Full Name",
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <ShadButton
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </ShadButton>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Joined",
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"));
      const formatted = FormatDate({ date });

      return formatted;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <ShadButton variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </ShadButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-bkg-3">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(JSON.stringify(user._id))
              }
            >
              Copy user ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Delete User</DropdownMenuItem>
            <DropdownMenuItem>Ban User</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
