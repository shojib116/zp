import useFetch from "@/lib/hooks/use-fetch";
import { UserCircle } from "lucide-react";
import type { Post as PostType, User } from "@/lib/types";
import { capitalize } from "@/lib/utils";

export default function Post({ id }: { id: string }) {
  const { data: post } = useFetch<PostType>(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );

  const { data: user } = useFetch<User>(
    `https://jsonplaceholder.typicode.com/users/${post.userId}`,
  );
  return (
    <div>
      <h2 className="text-2xl font-medium">{capitalize(post.title)}</h2>
      <div className="flex items-center gap-2 mt-2">
        <UserCircle className="w-10 h-10" />
        <div className="flex flex-col text-sm">
          <span>
            {user.name} @{user.username}
          </span>
          <span>{user.company.name}</span>
        </div>
      </div>
      <div className="mt-6">{post.body}</div>
    </div>
  );
}
