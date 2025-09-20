"use client";

import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Posts from "@/components/layout/posts/posts";
import PostsSkeleton from "@/components/layout/posts/posts-skeleton";
import ErrorFallback from "@/components/layout/error-fallback";

export default function PostsView() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <ErrorBoundary
        fallbackRender={({ resetErrorBoundary }) => (
          <ErrorFallback
            errorText="Sorry, some error occured while fetching posts"
            resetErrorBoundary={resetErrorBoundary}
          />
        )}
      >
        <Suspense fallback={<PostsSkeleton />}>
          <Posts />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
