import { Search, Bell, Mail, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function TopNavigation() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white">
      <div className="flex items-center justify-between h-16 px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <div className="text-2xl font-bold text-primary">Connectify</div>
        </Link>

        {/* Center Search Bar */}
        <div className="hidden md:flex flex-1 max-w-xs mx-auto">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search Connectify"
              className="w-full px-4 py-2 rounded-full bg-secondary text-foreground placeholder-muted-foreground text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <Search className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
          </div>
        </div>

        {/* Right Navigation Icons */}
        <div className="flex items-center gap-2 md:gap-4 ml-auto">
          {/* Search for mobile */}
          <button className="md:hidden p-2 hover:bg-secondary rounded-full transition-colors">
            <Search className="h-5 w-5 text-foreground" />
          </button>

          {/* Notifications */}
          <button className="p-2 hover:bg-secondary rounded-full transition-colors relative">
            <Bell className="h-5 w-5 text-foreground" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Messages */}
          <button className="p-2 hover:bg-secondary rounded-full transition-colors">
            <Mail className="h-5 w-5 text-foreground" />
          </button>

          {/* Profile Avatar */}
          <Link
            to="/profile"
            className="p-2 hover:bg-secondary rounded-full transition-colors"
          >
            <User className="h-5 w-5 text-foreground" />
          </Link>
        </div>
      </div>
    </header>
  );
}
