
import { Navigation } from "@/components/Navigation";
import { Carousel } from "@/components/Carousel";
import { Newsletter } from "@/components/Newsletter";
import { Toaster } from "sonner";
import { useState } from "react";

const Index = () => {
  const [currentImage, setCurrentImage] = useState<string>();

  return (
    <div className="min-h-screen">
      <Toaster position="top-center" />
      <main>
        <Carousel onImageChange={setCurrentImage} />
        <Newsletter />
      </main>
    </div>
  );
};

export default Index;
