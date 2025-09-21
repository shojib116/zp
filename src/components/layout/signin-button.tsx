import { signIn } from "@/auth";
import { cn } from "@/lib/utils";

export default function SignIn({
  children,
  className,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button
        type="submit"
        className={cn("px-6 py-3 border rounded-md", className)}
        {...props}
      >
        {children}
      </button>
    </form>
  );
}
