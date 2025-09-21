import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useFetch from "@/lib/hooks/use-fetch";
import type { User } from "@/lib/types";

export default function UsersTable() {
  const { data: users } = useFetch<User[]>(
    "https://jsonplaceholder.typicode.com/users",
  );
  return (
    <div className="w-full border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Company</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user, idx) => (
            <TableRow key={user.id}>
              <TableCell className="px-8 w-20">{idx + 1}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.company.name}</TableCell>
              <TableCell>
                <Link href={`/users/${user.id}`} className="hover:underline">
                  View Profile
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
