"use client";

import ErrorFallback from "@/components/layout/error-fallback";
import { UserProfile } from "@/components/layout/users/user-profile";
import UserProfileSkeleton from "@/components/layout/users/user-profile-skeleton";
import { notFound } from "next/navigation";

import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default function UserView({ id }: { id: string }) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>

      {/* Profile Info */}
      <ErrorBoundary
        fallbackRender={({ error, resetErrorBoundary }) => {
          if (error.toString().includes("404")) return notFound();
          return (
            <ErrorFallback
              errorText="Sorry! Some error occured! Please try again"
              resetErrorBoundary={resetErrorBoundary}
            />
          );
        }}
      >
        <Suspense fallback={<UserProfileSkeleton />}>
          <UserProfile id={id} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
