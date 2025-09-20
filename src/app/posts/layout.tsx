export default function PostsLayout({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <div className="p-4 w-full grid grid-cols-[1fr_auto]">
      {children}
      {sidebar}
    </div>
  );
}
