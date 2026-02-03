import TopNavigation from "./TopNavigation";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import BottomNavigation from "./BottomNavigation";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Top Navigation */}
      <TopNavigation />

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <LeftSidebar />

        {/* Feed / Main Content */}
        <main className="flex-1 border-r border-border max-w-2xl overflow-y-auto">
          {children}
        </main>

        {/* Right Sidebar */}
        <RightSidebar />
      </div>

      {/* Bottom Navigation for Mobile */}
      <BottomNavigation />
    </div>
  );
}
