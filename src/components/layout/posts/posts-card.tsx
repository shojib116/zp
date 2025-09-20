import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Post, User } from "@/lib/types";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { capitalize } from "@/lib/utils";

export default function PostCard({ post, user }: { post: Post; user: User }) {
  return (
    <Link href={`/posts/${post.id}`} key={post.id}>
      <Card className="hover:border-primary transition-color duration-400 group/card">
        <CardHeader>
          <CardTitle className="text-md">{capitalize(post.title)}</CardTitle>
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
}
