import { Outlet } from "react-router-dom";
import { Sidebar, MobileSidebar } from "@/components/SideBar";

export default function Layout() {
  return (
    <div className="flex min-h-full w-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="p-4 border-b flex items-center justify-between">
          <MobileSidebar />
          <h1 className="text-lg font-semibold">🌿 Pupstore</h1>
        </header>

        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
