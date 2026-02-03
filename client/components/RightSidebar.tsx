import { UserPlus } from "lucide-react";

const suggestedUsers = [
  { id: 1, name: "Sarah Johnson", handle: "@sarahjohnson", avatar: "SJ" },
  { id: 2, name: "Mike Chen", handle: "@mikechen", avatar: "MC" },
  { id: 3, name: "Emma Davis", handle: "@emmadavis", avatar: "ED" },
  { id: 4, name: "Alex Kumar", handle: "@alexkumar", avatar: "AK" },
];

const trendingHashtags = [
  { tag: "#WebDesign", posts: "45.2K" },
  { tag: "#ReactJS", posts: "128.5K" },
  { tag: "#TailwindCSS", posts: "89.3K" },
  { tag: "#Connectify", posts: "234.1K" },
];

export default function RightSidebar() {
  return (
    <aside className="hidden xl:flex flex-col w-72 gap-6 h-screen sticky top-16 pl-6 pr-6">
      {/* Suggested Users Card */}
      <div className="bg-white rounded-2xl border border-border p-6">
        <h2 className="text-xl font-bold text-foreground mb-4">
          Who to follow
        </h2>
        <div className="flex flex-col gap-4">
          {suggestedUsers.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between pb-4 border-b border-border last:border-b-0 last:pb-0"
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm flex-shrink-0">
                  {user.avatar}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-foreground text-sm truncate">
                    {user.name}
                  </p>
                  <p className="text-muted-foreground text-xs truncate">
                    {user.handle}
                  </p>
                </div>
              </div>
              <button className="ml-2 px-4 py-1.5 bg-primary hover:opacity-90 text-primary-foreground rounded-full font-semibold text-sm transition-all flex-shrink-0 flex items-center gap-1">
                <UserPlus className="h-4 w-4" />
                <span className="hidden sm:inline">Follow</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Hashtags Card */}
      <div className="bg-white rounded-2xl border border-border p-6">
        <h2 className="text-xl font-bold text-foreground mb-4">
          What's trending
        </h2>
        <div className="flex flex-col gap-4">
          {trendingHashtags.map((trend) => (
            <button
              key={trend.tag}
              className="hover:bg-secondary p-3 rounded-lg transition-colors text-left"
            >
              <p className="font-bold text-foreground text-sm">{trend.tag}</p>
              <p className="text-muted-foreground text-xs">
                {trend.posts} Posts
              </p>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
