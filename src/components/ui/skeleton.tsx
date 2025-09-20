import { cn } from "@/lib/utils";

export function Skeleton({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props}
    >
      {children}
    </div>
  );
}
