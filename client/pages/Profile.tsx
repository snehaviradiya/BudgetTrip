import MainLayout from "@/components/MainLayout";
import { Link } from "react-router-dom";
import { MessageCircle, Heart } from "lucide-react";

const userPosts = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop",
    likes: 2450,
    comments: 342,
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop",
    likes: 1823,
    comments: 256,
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1516534775068-bb57d4b0aed1?w=400&h=400&fit=crop",
    likes: 3421,
    comments: 567,
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop",
    likes: 2156,
    comments: 413,
  },
  {
    id: "5",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
    likes: 1542,
    comments: 198,
  },
  {
    id: "6",
    image:
      "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=400&fit=crop",
    likes: 2789,
    comments: 445,
  },
];

export default function Profile() {
  return (
    <MainLayout>
      <div className="pb-16 lg:pb-0">
        {/* Cover Photo */}
        <div className="relative">
          <div className="h-48 bg-gradient-to-r from-primary/20 to-accent/20"></div>

          {/* Profile Info */}
          <div className="px-6 pb-6">
            <div className="flex flex-col sm:flex-row gap-4 -mt-20 mb-4">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="h-32 w-32 rounded-full bg-primary text-primary-foreground border-4 border-white flex items-center justify-center font-bold text-4xl shadow-lg">
                  Y
                </div>
              </div>

              {/* Profile Details */}
              <div className="flex-1 pt-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold text-foreground">
                      You
                    </h1>
                    <p className="text-muted-foreground text-lg">@yourhandle</p>
                  </div>
                  <button className="px-6 py-2 border-2 border-primary text-primary hover:bg-primary/10 font-semibold rounded-full transition-colors w-full sm:w-auto">
                    Edit Profile
                  </button>
                </div>

                {/* Bio */}
                <p className="mt-4 text-foreground leading-relaxed max-w-2xl">
                  Passionate about design, development, and creating meaningful
                  connections. Building beautiful products that make a difference.
                </p>

                {/* Stats */}
                <div className="flex gap-6 mt-4 text-sm">
                  <div>
                    <p className="font-bold text-foreground">1,234</p>
                    <p className="text-muted-foreground">Following</p>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">56,789</p>
                    <p className="text-muted-foreground">Followers</p>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">432</p>
                    <p className="text-muted-foreground">Posts</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-border mt-6 flex gap-8">
              <button className="pb-4 font-bold text-foreground border-b-2 border-primary">
                Posts
              </button>
              <button className="pb-4 text-muted-foreground hover:text-foreground transition-colors">
                Likes
              </button>
              <button className="pb-4 text-muted-foreground hover:text-foreground transition-colors">
                Replies
              </button>
            </div>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="px-6 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {userPosts.map((post) => (
              <button
                key={post.id}
                className="group relative overflow-hidden rounded-xl bg-secondary aspect-square hover:bg-secondary/80 transition-all"
              >
                <img
                  src={post.image}
                  alt="Post"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100">
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <Heart className="h-5 w-5 fill-white" />
                    {post.likes}
                  </div>
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <MessageCircle className="h-5 w-5" />
                    {post.comments}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
