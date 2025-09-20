import useFetch from "@/lib/hooks/use-fetch";
import type { Post } from "@/lib/types";
import { capitalize } from "@/lib/utils";
import Link from "next/link";

export default function Sidebar() {
  const { data: posts } = useFetch<Post[]>(
    "https://jsonplaceholder.typicode.com/posts",
  );
  return (
    <div className="relative w-120 shrink-0 mt-20">
      <div className="sticky top-45 w-114 border rounded-sm p-4">
        <h2 className="text-xl font-bold mb-6">Trending Posts</h2>
        <ul className="space-y-4 text-base">
          {posts.slice(0, 10).map((post) => (
            <li key={post.id}>
              <Link
                href={`/posts/${post.id}`}
                className="font-medium hover:underline"
              >
                {capitalize(post.title)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 space-y-2">
          <h2 className="text-lg font-semibold">Subscribe to our newsletter</h2>
          <form>
            <div className="relative overflow-hidden rounded-sm">
              <input
                className="w-full border rounded-sm py-2 px-4"
                type="email"
                name="email"
                placeholder="john@example.com"
              />
              <button
                className="absolute right-0 bottom-0 top-0 border font-bold bg-secondary px-4"
                type="submit"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
