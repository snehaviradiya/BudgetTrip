import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Profile from "./pages/Profile";
import Placeholder from "./pages/Placeholder";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/explore"
              element={<Placeholder title="Explore" />}
            />
            <Route
              path="/messages"
              element={<Placeholder title="Messages" />}
            />
            <Route
              path="/notifications"
              element={<Placeholder title="Notifications" />}
            />
            <Route
              path="/bookmarks"
              element={<Placeholder title="Bookmarks" />}
            />
            <Route
              path="/settings"
              element={<Placeholder title="Settings" />}
            />
            <Route
              path="/create"
              element={<Placeholder title="Create Post" />}
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
