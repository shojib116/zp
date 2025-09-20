"use client";

import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@/components/layout/error-fallback";
import UsersTable from "@/components/layout/users/users-table";
import UsersTableSkeleton from "@/components/layout/users/users-table-skeleton";

export default function UsersView() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <ErrorBoundary
        fallbackRender={({ resetErrorBoundary }) => (
          <ErrorFallback
            errorText="Sorry, some error occured while fetching posts"
            resetErrorBoundary={resetErrorBoundary}
          />
        )}
      >
        <Suspense fallback={<UsersTableSkeleton />}>
          <UsersTable />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
