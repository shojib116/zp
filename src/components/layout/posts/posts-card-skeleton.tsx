import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function PostCardSkeleton() {
  return (
    <Card>
      <CardHeader className="space-y-2">
        <Skeleton className="h-5 w-4/5" />
        <CardDescription className="space-y-1.5">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-4 w-30" />
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-1">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
      </CardContent>
      <CardFooter>
        <Skeleton className="h-10 w-40" />
      </CardFooter>
    </Card>
  );
}
