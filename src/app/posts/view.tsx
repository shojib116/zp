"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useFetch from "@/lib/hooks/use-fetch";
import type { Post, User } from "@/lib/types";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { capitalize } from "@/lib/utils";

export default function PostsView() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <ErrorBoundary
        fallbackRender={({ error }) => <p>Error: {error.message}</p>}
      >
        <Suspense fallback={<p>Loading...</p>}>
          <Posts />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

function Posts() {
  const { data: users } = useFetch<User[]>(
    "https://jsonplaceholder.typicode.com/users",
  );
  const { data: posts } = useFetch<Post[]>(
    "https://jsonplaceholder.typicode.com/posts",
  );

  const usersMap = users.reduce(
    (acc, cur) => {
      acc[cur.id] = cur;
      return acc;
    },
    {} as Record<number, User>,
  );

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {posts.map((post) => {
        const user = usersMap[post.userId];
        return (
          <Link href={`/posts/${post.id}`} key={post.id}>
            <Card className="hover:border-primary transition-color duration-400 group/card">
              <CardHeader>
                <CardTitle className="text-md">
                  {capitalize(post.title)}
                </CardTitle>
                <CardDescription>
                  {user.name}
                  <br />@{user.username}
                </CardDescription>
              </CardHeader>
              <CardContent className="line-clamp-2">{post.body}</CardContent>
              <CardFooter>
                <button
                  type="button"
                  className="group/button border group-hover/card:border-primary overflow-hidden rounded-sm py-2 px-4 flex items-center justify-center gap-2 hover:bg-muted active:rotate-z-4 duration-300 transition-all"
                >
                  View Post{" "}
                  <ArrowRight className="w-5 h-5 group-hover/button:translate-x-1 group-active/button:translate-x-50 transition-all" />
                </button>
              </CardFooter>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
