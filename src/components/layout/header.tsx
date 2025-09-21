import { LogOut, UserCircle } from "lucide-react";
import Link from "next/link";
import { auth } from "@/auth";
import { SignOut } from "./signout-button";

export default async function Header() {
  const session = await auth();

  return (
    <header className="sticky z-50 border-b top-0 left-0 bg-background right-0 h-20">
      <div className="w-full h-full flex items-center px-10 justify-end">
        {session === null || !session.user ? (
          <Link href="/api/auth/signin">
            <UserCircle className="w-8 h-8" />
          </Link>
        ) : (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {session.user.image ? (
                <img
                  src={session.user.image}
                  className="h-8 w-8 rounded-full"
                />
              ) : (
                <UserCircle className="w-8 h-8" />
              )}
              <span className="font-medium">Hi, {session.user.name}</span>
            </div>
            <SignOut>
              <LogOut className="text-red-500" />
            </SignOut>
          </div>
        )}
      </div>
    </header>
  );
}
