import PostCardSkeleton from "./posts-card-skeleton";

export default function PostsSkeleton() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 40 }).map((_, idx) => {
        return <PostCardSkeleton key={idx} />;
      })}
    </div>
  );
}
