import { Skeleton } from "@/components/ui/skeleton";

export default function PostSkeleton() {
  return (
    <div>
      <Skeleton className="h-6 w-1/2" />
      <div className="flex items-center gap-2 mt-2">
        <Skeleton className="w-10 h-10 rounded-full" />
        <div className="flex flex-col gap-2 text-sm">
          <span className="flex gap-4">
            <Skeleton className="h-3 w-30" />
            <Skeleton className="h-3 w-30" />
          </span>
          <Skeleton className="h-3 w-50" />
        </div>
      </div>
      <div className="space-y-1 mt-6">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-3 w-1/2" />
      </div>
    </div>
  );
}
