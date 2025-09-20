import useFetch from "@/lib/hooks/use-fetch";
import type { Post, User } from "@/lib/types";
import PostCard from "./posts-card";

export default function Posts() {
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
        return (
          <PostCard post={post} user={usersMap[post.userId]} key={post.id} />
        );
      })}
    </div>
  );
}
