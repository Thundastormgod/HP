import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Navigation } from "@/components/Navigation";

const posts = [
  {
    id: 1,
    title: "The Future of Digital Journalism",
    category: "Press",
    image: "photo-1486312338219-ce68d2c6f44d",
  },
  {
    id: 2,
    title: "Impact of Social Media on Modern PR",
    category: "Politics",
    image: "photo-1581091226825-a6a2a5aee158",
  },
  {
    id: 3,
    title: "Evolution of Sports Coverage",
    category: "Sports",
    image: "photo-1605810230434-7631ac76ec81",
  },
  {
    id: 4,
    title: "Sustainable Fashion Trends",
    category: "Fashion",
    image: "photo-1519389950473-47ba0277781c",
  },
];

export interface CarouselProps {
  onImageChange?: (imageUrl: string) => void;
}

export const Carousel = ({ onImageChange }: CarouselProps) => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout>();

  const nextGroup = () => {
    const nextIndex = (currentGroup + 1) % posts.length;
    setCurrentGroup(nextIndex);
    onImageChange?.(
      `https://images.unsplash.com/${posts[nextIndex].image}?auto=format&fit=crop&w=1920&q=80`
    );
  };

  const prevGroup = () => {
    const prevIndex = currentGroup === 0 ? posts.length - 1 : currentGroup - 1;
    setCurrentGroup(prevIndex);
    onImageChange?.(
      `https://images.unsplash.com/${posts[prevIndex].image}?auto=format&fit=crop&w=1920&q=80`
    );
  };

  useEffect(() => {
    // Initialize the first image
    onImageChange?.(
      `https://images.unsplash.com/${posts[currentGroup].image}?auto=format&fit=crop&w=1920&q=80`
    );
  }, []);

  useEffect(() => {
    if (isHovered) {
      clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      nextGroup();
    }, 5000);

    return () => clearInterval(timerRef.current);
  }, [isHovered]);

  return (
    <div
      className="relative w-full overflow-hidden bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex flex-col transition-transform duration-500 ease-out"
        style={{ transform: `translateY(-${currentGroup * 100}vh)` }}
      >
        {posts.map((post) => (
          <div
            key={post.id}
            className="relative min-h-screen w-full"
          >
            <img
              src={`https://images.unsplash.com/${post.image}?auto=format&fit=crop&w=1920&q=80`}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 hover:bg-black/50 transition-colors" />
            
            {/* Navigation header integrated into each post */}
            <Navigation currentPostImage={`https://images.unsplash.com/${post.image}?auto=format&fit=crop&w=1920&q=80`} />
            
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="max-w-4xl mx-auto p-6 text-white text-center">
                <BookOpen className="w-12 h-12 mb-6 mx-auto opacity-75" />
                <span className="inline-block px-4 py-2 mb-4 text-sm font-medium bg-white/10 backdrop-blur rounded-full">
                  {post.category}
                </span>
                <h2 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
                  {post.title}
                </h2>
                <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  Discover the latest insights and analysis in {post.category.toLowerCase()} journalism.
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white hover:bg-white hover:text-black transition-colors"
                >
                  Read More
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className={cn(
          "absolute left-1/2 top-8 -translate-x-1/2 rotate-90 bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white hover:text-black transition-colors",
          !isHovered && "opacity-0"
        )}
        onClick={prevGroup}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className={cn(
          "absolute left-1/2 bottom-8 -translate-x-1/2 rotate-90 bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white hover:text-black transition-colors",
          !isHovered && "opacity-0"
        )}
        onClick={nextGroup}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};
