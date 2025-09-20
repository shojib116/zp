"use client";

import type React from "react";

import { cn } from "@/lib/utils";

function Table({
  children,
  className,
  ...props
}: React.ComponentProps<"table">) {
  return (
    <table
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    >
      {children}
    </table>
  );
}

function TableHeader({
  children,
  className,
  ...props
}: React.ComponentProps<"thead">) {
  return (
    <thead className={cn("[&_tr]:border-b", className)} {...props}>
      {children}
    </thead>
  );
}

function TableBody({
  children,
  className,
  ...props
}: React.ComponentProps<"tbody">) {
  return (
    <tbody className={cn("[&_tr:last-child]:border-0", className)} {...props}>
      {children}
    </tbody>
  );
}

function TableRow({
  children,
  className,
  ...props
}: React.ComponentProps<"tr">) {
  return (
    <tr
      className={cn("hover:bg-muted/50 border-b transition-colors", className)}
      {...props}
    >
      {children}
    </tr>
  );
}

function TableHead({
  children,
  className,
  ...props
}: React.ComponentProps<"th">) {
  return (
    <th
      className={cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap",
        className,
      )}
      {...props}
    >
      {children}
    </th>
  );
}

function TableCell({
  children,
  className,
  ...props
}: React.ComponentProps<"td">) {
  return (
    <td
      className={cn("p-2 align-middle whitespace-nowrap", className)}
      {...props}
    >
      {children}
    </td>
  );
}

export { Table, TableHeader, TableBody, TableHead, TableRow, TableCell };
