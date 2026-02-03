import MainLayout from "@/components/MainLayout";
import PostCreation from "@/components/PostCreation";
import PostCard from "@/components/PostCard";

const samplePosts = [
  {
    id: "1",
    author: "Alice Johnson",
    handle: "@alicejohnson",
    timestamp: "2h",
    content:
      "Just launched our new design system! Excited to share what our team has been working on. The attention to detail and thoughtful approach to components really makes a difference.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=300&fit=crop",
    likes: 2450,
    comments: 342,
    shares: 512,
  },
  {
    id: "2",
    author: "Bob Smith",
    handle: "@bobsmith",
    timestamp: "4h",
    content:
      "The sunrise view from my new office is incredible. Nothing beats starting the day with this perspective. Can't wait to build great things here with the team!",
    image: "https://images.unsplash.com/photo-1500375592092-40eb0e37410d?w=600&h=300&fit=crop",
    likes: 1823,
    comments: 256,
    shares: 189,
  },
  {
    id: "3",
    author: "Carol White",
    handle: "@carolwhite",
    timestamp: "6h",
    content:
      "React 18 performance improvements are amazing! Anyone else seeing significant speed gains in their projects? Let's discuss optimization techniques in the comments.",
    likes: 3421,
    comments: 567,
    shares: 892,
  },
  {
    id: "4",
    author: "David Lee",
    handle: "@davidlee",
    timestamp: "8h",
    content:
      "Just finished deploying our biggest feature yet. Special thanks to the entire team for the incredible effort. This wouldn't have been possible without everyone's dedication.",
    likes: 2156,
    comments: 413,
    shares: 324,
  },
  {
    id: "5",
    author: "Emma Wilson",
    handle: "@emmawilson",
    timestamp: "10h",
    content:
      "Beautiful day for a walk. Sometimes the best ideas come when you step away from the screen. Feeling refreshed and ready to tackle new challenges!",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=300&fit=crop",
    likes: 1542,
    comments: 198,
    shares: 276,
  },
];

export default function Index() {
  return (
    <MainLayout>
      <div className="pb-16 lg:pb-0">
        <PostCreation />
        {samplePosts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </MainLayout>
  );
}
