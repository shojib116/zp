import { auth } from "@/auth";
import SignIn from "@/components/layout/signin-button";

export default async function UserLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const session = await auth();

  if (!session)
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="space-y-4 text-center">
          <h2 className="text-xl font-semibold">
            Please login to view this page
          </h2>
          <SignIn>Sign in with Google</SignIn>
        </div>
      </div>
    );
  return (
    <>
      {props.children}
      {props.modal}
    </>
  );
}
