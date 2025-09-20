"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { XCircle } from "lucide-react";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <div
      className="absolute inset-0 bg-foreground/30 flex items-center justify-center w-full h-full"
      onClick={onDismiss}
    >
      <dialog
        ref={dialogRef}
        className="relative rounded-lg overflow-hidden m-auto"
        onClose={onDismiss}
      >
        {children}
        <button
          type="button"
          onClick={onDismiss}
          className="hover:text-primary absolute top-2 right-2"
        >
          <XCircle />{" "}
        </button>
      </dialog>
    </div>,
    document.getElementById("modal-root")!,
  );
}
