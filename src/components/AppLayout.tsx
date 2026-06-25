"use client";

import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideSidebar =
    pathname === "/login";

  return (
    <div className="flex">
      {!hideSidebar && <Sidebar />}

      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}