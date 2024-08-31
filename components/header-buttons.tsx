"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

const MAX_FILE_SIZE = 200 * 1024 * 1024; // 200MB in bytes

export default function HeaderButtons() {
  const [isMaxFileSizeExceeded, setIsMaxFileSizeExceeded] = useState(false);


  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex space-x-4">
      <Button 
        size="lg" 
        variant="outline" 
        className="text-lg px-8 py-6" 
        onClick={() => scrollToSection('dropzone-section')}
      >
        Get Started 
      </Button>
      <Button 
        size="lg" 
        variant="outline" 
        className="text-lg px-8 py-6" 
        onClick={() => scrollToSection('features-section')}
      >
        Learn More
      </Button>
    </div>
  );
}