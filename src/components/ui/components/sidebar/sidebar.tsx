// app/dashboard/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Home,
  Users,
  FileText,
  ShoppingCart,
  UserCog,
  BookOpen,
  Menu,
  ChevronDown,
  ChevronRight,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

function CollapsibleMenu({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-1">
      <Button
        variant="ghost"
        className="w-full justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          {icon}
          {title}
        </div>
        {isOpen ? (
          <ChevronDown className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />
        )}
      </Button>
      {isOpen && <div className="space-y-1">{children}</div>}
    </div>
  );
}

export function SidebarNav() {
  return (
    <nav className="space-y-1">
      <Button asChild variant="ghost" className="w-full justify-start mb-4">
        <Link href="/" className="flex items-center gap-2">
          <Home className="h-4 w-4" />
          Return Home
        </Link>
      </Button>

      <div className="space-y-2">
        <h3 className="px-4 text-sm font-medium text-slate-400">Management</h3>
        <div className="space-y-1">
          <CollapsibleMenu
            title="My Profile"
            icon={<User className="h-4 w-4" />}
          >
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start pl-8"
            >
              <Link href="/dashboard/users/create">My Profile</Link>
            </Button>
          </CollapsibleMenu>
          <CollapsibleMenu
            title="Manage Users"
            icon={<Users className="h-4 w-4" />}
          >
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start pl-8"
            >
              <Link href="/dashboard/users/create">Create User</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start pl-8"
            >
              <Link href="/dashboard/users">All Users</Link>
            </Button>
          </CollapsibleMenu>

          <CollapsibleMenu
            title="Manage Blogs"
            icon={<FileText className="h-4 w-4" />}
          >
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start pl-8"
            >
              <Link href="/dashboard/blogs/create">Create Blog</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start pl-8"
            >
              <Link href="/dashboard/blogs">All Blogs</Link>
            </Button>
          </CollapsibleMenu>

          <CollapsibleMenu
            title="Manage Shop"
            icon={<ShoppingCart className="h-4 w-4" />}
          >
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start pl-8"
            >
              <Link href="/dashboard/shop/create">Create Product</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start pl-8"
            >
              <Link href="/dashboard/shop">All Products</Link>
            </Button>
          </CollapsibleMenu>

          <CollapsibleMenu
            title="Manage Executives"
            icon={<UserCog className="h-4 w-4" />}
          >
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start pl-8"
            >
              <Link href="/dashboard/executives/create">Add Executive</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start pl-8"
            >
              <Link href="/dashboard/executives">All Executives</Link>
            </Button>
          </CollapsibleMenu>

          <CollapsibleMenu
            title="Manage Magazine"
            icon={<BookOpen className="h-4 w-4" />}
          >
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start pl-8"
            >
              <Link href="/dashboard/magazine/create">Create Magazine</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start pl-8"
            >
              <Link href="/dashboard/magazine">All Magazines</Link>
            </Button>
          </CollapsibleMenu>
        </div>
      </div>
    </nav>
  );
}

export default function DashboardPage() {
  return (
    <div className="lg:min-h-screen bg-slate-900 text-slate-100">
      {/* Mobile Header */}
      <header className="lg:hidden bg-slate-800 p-4 flex items-center justify-between sticky top-0 z-50 border-b border-slate-700">
        <h1 className="text-xl font-bold px-4 py-2">Astronomy Club</h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-slate-700 focus-visible:ring-slate-400"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="bg-slate-800 text-slate-100 w-64 p-0"
          >
            <div className="sticky top-0 bg-slate-800 p-4 border-b border-slate-700">
              <h1 className="text-xl font-bold px-2">Astronomy Club</h1>
            </div>
            <div className="overflow-y-auto h-[calc(100vh-57px)]">
              <SidebarNav />
            </div>
          </SheetContent>
        </Sheet>
      </header>

      <div className="flex">
        {/* Sidebar - Hidden on mobile */}
        <aside className="hidden lg:block w-64 h-screen bg-slate-800 p-4 sticky top-0">
          <h1 className="text-2xl font-bold mb-8">Astronomy Club</h1>
          <SidebarNav />
        </aside>
      </div>
    </div>
  );
}
