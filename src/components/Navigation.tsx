import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const categories = [
  "Sports",
  "Lifestyle",
  "Fashion",
  "Politics",
  "Press",
  "World",
];

interface NavigationProps {
  currentPostImage?: string;
}

export const Navigation = ({ currentPostImage }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50">
      <div className="relative">
        {/* Remove the background image logic here */}
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-semibold text-white">The Resonance</h1>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {categories.map((category) => (
                <a
                  key={category}
                  href={`#${category.toLowerCase()}`}
                  className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  {category}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="outline" 
                className="text-sm border-white/20 text-white hover:bg-white hover:text-black bg-white/10 backdrop-blur"
              >
                Sign In
              </Button>
              <Button className="text-sm bg-white text-black hover:bg-white/90">
                Subscribe
              </Button>
            </div>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 text-white"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {categories.map((category) => (
              <a
                key={category}
                href={`#${category.toLowerCase()}`}
                className="block px-3 py-2 text-base font-medium text-white/90 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {category}
              </a>
            ))}
            <div className="mt-4 space-y-2 px-3">
              <Button variant="outline" className="w-full text-white border-white/20 bg-white/10 hover:bg-white hover:text-black">
                Sign In
              </Button>
              <Button className="w-full bg-white text-black hover:bg-white/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
