import { Image, Smile } from "lucide-react";
import { useState } from "react";

export default function PostCreation() {
  const [content, setContent] = useState("");

  const handlePost = () => {
    if (content.trim()) {
      console.log("Posted:", content);
      setContent("");
    }
  };

  return (
    <div className="border-b border-border bg-white p-6">
      {/* Post Creation Card */}
      <div className="flex gap-4">
        {/* Avatar */}
        <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-lg flex-shrink-0">
          You
        </div>

        {/* Input Area */}
        <div className="flex-1">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's on your mind?"
            className="w-full text-xl bg-transparent text-foreground placeholder-muted-foreground resize-none outline-none mb-4 font-medium"
            rows={3}
          />

          {/* Post Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex gap-2">
              <button className="p-2 hover:bg-secondary rounded-full transition-colors text-primary">
                <Image className="h-5 w-5" />
              </button>
              <button className="p-2 hover:bg-secondary rounded-full transition-colors text-primary">
                <Smile className="h-5 w-5" />
              </button>
            </div>

            <button
              onClick={handlePost}
              disabled={!content.trim()}
              className="px-6 py-2 bg-primary hover:opacity-90 text-primary-foreground font-bold rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
