"use client";

import ErrorFallback from "@/components/layout/error-fallback";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Post from "@/components/layout/posts/post";
import PostSkeleton from "@/components/layout/posts/post-skeleton";

export default function PostView({ id }: { id: string }) {
  return (
    <div className="grow p-6">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <Link href="/posts" className="hover:underline hover:cursor-pointer">
          Posts
        </Link>{" "}
        <ChevronRight /> {id}
      </h1>
      <ErrorBoundary
        fallbackRender={({ resetErrorBoundary }) => (
          <ErrorFallback
            errorText="Sorry! Some error occured while fetching your post! Please try again!"
            resetErrorBoundary={resetErrorBoundary}
          />
        )}
      >
        <Suspense fallback={<PostSkeleton />}>
          <Post id={id} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
