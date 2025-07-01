import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import { LogoutButton } from "@/components/LogOutButton";

export function Sidebar() {
  return (
    <div className="md:flex md:w-64 md:flex-col hidden border-r border-gray-200 h-screen">
      <div className="flex flex-col justify-between h-full">
        {/* Top nav links */}
        <nav className="p-4 space-y-2">
          <NavLink
            to="/vending"
            className="block px-4 py-2 rounded hover:bg-muted text-start"
          >
            🌱 Vending Machine
          </NavLink>
          <NavLink
            to="/bonsai"
            className="block px-4 py-2 rounded hover:bg-muted text-start"
          >
            ⚙️ Bonsai
          </NavLink>
          <NavLink
            to="/soon"
            className="block px-4 py-2 rounded hover:bg-muted text-start"
          >
            🚪 Coming Soon...
          </NavLink>
        </nav>

        <div className="p-4 flex justify-start">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}

// Mobile sidebar
export function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}
