import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className=" text-center space-y-4">
        <h2 className="text-2xl font-bold">Not Found</h2>
        <p className="text-lg font-medium">
          Sorry, we could not find requested resource
        </p>
        <Link href="/">
          <button
            type="button"
            className="px-6 py-3 border rounded-md active:translate-y-2"
          >
            Return Home
          </button>
        </Link>
      </div>
    </div>
  );
}
