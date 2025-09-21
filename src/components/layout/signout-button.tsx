import { signOut } from "@/auth";
import { cn } from "@/lib/utils";

export function SignOut({
  children,
  className,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit" className={cn(className)} {...props}>
        {children}
      </button>
    </form>
  );
}
