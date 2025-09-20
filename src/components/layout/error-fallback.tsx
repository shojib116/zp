import type { FallbackProps } from "react-error-boundary";

export default function ErrorFallback({
  errorText,
  resetErrorBoundary,
}: { errorText: string } & Partial<FallbackProps>) {
  return (
    <>
      <p>{errorText}</p>
      <button
        type="button"
        className="px-4 py-2 border bg-muted rounded-md mt-2 font-bold"
        onClick={resetErrorBoundary}
      >
        Reset
      </button>
    </>
  );
}
