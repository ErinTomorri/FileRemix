"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { ModeToggle } from "./mode-toggle";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed z-50 w-full backdrop-blur-lg bg-background/80 border-b border-border">
      <div className="container mx-auto flex items-center justify-between min-h-[5rem] px-4">
        <Link href="/" className="flex items-center py-2">
          <Image
            alt="logo"
            className=""
            src="/images/logo.png"
            width={130}
            height={130}
          />
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('features-section')} className="text-foreground hover:text-primary transition-colors">Features</button>
          <button onClick={() => scrollToSection('pricing-section')} className="text-foreground hover:text-primary transition-colors">Pricing</button>
          <Link href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
          <ModeToggle />
        </div>
        <div className="md:hidden flex items-center">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-4">
                <button onClick={() => scrollToSection('features-section')} className="text-foreground hover:text-primary transition-colors">Features</button>
                <button onClick={() => scrollToSection('pricing-section')} className="text-foreground hover:text-primary transition-colors">Pricing</button>
                <Link href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
