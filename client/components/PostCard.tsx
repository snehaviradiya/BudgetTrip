import { Heart, MessageCircle, Share } from "lucide-react";
import { useState } from "react";

interface PostCardProps {
  id: string;
  author: string;
  handle: string;
  timestamp: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  liked?: boolean;
}

export default function PostCard({
  id,
  author,
  handle,
  timestamp,
  content,
  image,
  likes,
  comments,
  shares,
  liked = false,
}: PostCardProps) {
  const [isLiked, setIsLiked] = useState(liked);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <article className="border-b border-border bg-white p-6 hover:bg-secondary/30 transition-colors cursor-pointer">
      {/* Post Header */}
      <div className="flex gap-4 mb-4">
        <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-lg flex-shrink-0">
          {author.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2">
            <p className="font-bold text-foreground truncate">{author}</p>
            <p className="text-muted-foreground text-sm">{handle}</p>
            <span className="text-muted-foreground text-sm">·</span>
            <p className="text-muted-foreground text-sm flex-shrink-0">
              {timestamp}
            </p>
          </div>
        </div>
      </div>

      {/* Post Content */}
      <div className="mb-4">
        <p className="text-foreground text-base leading-normal whitespace-pre-wrap break-words">
          {content}
        </p>
      </div>

      {/* Post Image */}
      {image && (
        <div className="mb-4 rounded-2xl overflow-hidden bg-secondary border border-border h-64">
          <img
            src={image}
            alt="Post content"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Post Actions */}
      <div className="flex justify-between text-muted-foreground max-w-md">
        <button className="flex items-center gap-2 group hover:text-accent transition-colors p-2 -ml-2">
          <MessageCircle className="h-5 w-5 group-hover:bg-blue-100 group-hover:rounded-full p-2 w-8 h-8" />
          <span className="text-sm">{comments}</span>
        </button>
        <button
          onClick={handleLike}
          className={`flex items-center gap-2 group transition-colors p-2 -ml-2 ${
            isLiked ? "text-red-500" : ""
          }`}
        >
          <Heart
            className={`h-5 w-5 group-hover:bg-red-100 group-hover:rounded-full p-2 w-8 h-8 ${
              isLiked ? "fill-current" : ""
            }`}
          />
          <span className="text-sm">{likeCount}</span>
        </button>
        <button className="flex items-center gap-2 group hover:text-accent transition-colors p-2 -ml-2">
          <Share className="h-5 w-5 group-hover:bg-blue-100 group-hover:rounded-full p-2 w-8 h-8" />
          <span className="text-sm">{shares}</span>
        </button>
      </div>
    </article>
  );
}
