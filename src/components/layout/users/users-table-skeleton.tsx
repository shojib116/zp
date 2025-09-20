import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

export default function UsersTableSkeleton() {
  return (
    <div className="w-full border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Company</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 20 }).map((_v, idx) => (
            <TableRow key={idx}>
              <TableCell>
                <Skeleton className="h-3 w-30" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-3 w-30" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-3 w-30" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-3 w-30" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
