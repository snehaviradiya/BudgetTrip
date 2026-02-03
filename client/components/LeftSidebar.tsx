import { Home, Compass, Mail, Bell, Bookmark, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Compass, label: "Explore", path: "/explore" },
  { icon: Mail, label: "Messages", path: "/messages" },
  { icon: Bell, label: "Notifications", path: "/notifications" },
  { icon: Bookmark, label: "Bookmarks", path: "/bookmarks" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export default function LeftSidebar() {
  const location = useLocation();

  return (
    <aside className="hidden lg:flex flex-col w-64 border-r border-border bg-white p-6 gap-8 h-screen sticky top-16">
      {/* Navigation Menu */}
      <nav className="flex flex-col gap-3">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-4 px-4 py-3 rounded-lg transition-colors font-medium text-base",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-secondary"
              )}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Post Button */}
      <button className="w-full bg-primary hover:opacity-90 text-primary-foreground font-semibold py-3 px-4 rounded-full transition-all text-base">
        Post
      </button>
    </aside>
  );
}
