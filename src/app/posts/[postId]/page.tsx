import PostView from "./view";

export default async function PostPage({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;

  return <PostView id={postId} />;
}
