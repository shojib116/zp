"use client";
import { cn } from "@/lib/utils";
import {
  Gauge,
  Newspaper,
  SidebarClose,
  SidebarOpen,
  Users,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

const sidenavLinks = [
  { icon: Gauge, title: "Dashboard", href: "/" },
  { icon: Newspaper, title: "Posts", href: "/posts" },
  { icon: Users, title: "Users", href: "/users" },
];

export default function SideNav({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.aside
      animate={{ width: "auto" }}
      layout
      className={cn("overflow-hidden bg-background border-r", className)}
    >
      <div className="px-4 py-2 border-b flex items-center">
        {open ? (
          <motion.button
            type="button"
            initial={{ scale: 0, rotate: "180deg" }}
            animate={{ scale: 1, rotate: 0 }}
            onClick={() => {
              setOpen(false);
            }}
          >
            <SidebarClose className="w-6 h-6 dark:invert" />
          </motion.button>
        ) : (
          <motion.button
            type="button"
            initial={{ scale: 0, rotate: "180deg" }}
            animate={{ scale: 1, rotate: "360deg" }}
            onClick={() => {
              setOpen(true);
            }}
          >
            <SidebarOpen className="w-6 h-6 dark:invert" />
          </motion.button>
        )}
      </div>
      <div className="p-2">
        <nav>
          <ul className="space-y-2 ">
            {sidenavLinks.map((link) => (
              <li key={link.title}>
                <NavLink href={link.href} className="block">
                  <motion.span
                    layout
                    className={cn("flex items-center text-lg overflow-hidden")}
                    whileTap={{ scale: 0.95, rotate: "2deg" }}
                  >
                    {<link.icon className="shrink-0 w-6 h-7" />}{" "}
                    <AnimatePresence>
                      {open && (
                        <>
                          <motion.span
                            initial={{ width: 0 }}
                            animate={{ width: "0.5rem" }}
                            exit={{ width: 0 }}
                          ></motion.span>
                          <motion.span
                            initial={{ width: 0 }}
                            animate={{ width: "auto" }}
                            exit={{ width: 0 }}
                          >
                            {link.title}
                          </motion.span>
                        </>
                      )}
                    </AnimatePresence>
                  </motion.span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.aside>
  );
}

function NavLink({
  children,
  href,
  className,
  ...props
}: React.ComponentProps<typeof Link>) {
  const pathname = usePathname();
  const isActiveLink =
    (href.toString() === "/" && pathname === "/") ||
    (href !== "/" && pathname.startsWith(href.toString()));
  const activeStyle = "bg-sidebar-primary-foreground text-primary";
  return (
    <Link
      href={href}
      className={cn(
        isActiveLink && activeStyle,
        "py-1 px-2 transition-color duration-300 hover:bg-sidebar-primary-foreground hover:text-primary rounded-sm",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
