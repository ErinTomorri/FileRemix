'use client';

import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Dropzone from "@/components/dropzone";
import Features from "@/components/features";
import Pricing from "@/components/pricing";
import HeaderButtons from "@/components/header-buttons";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="container mx-auto pb-8">
      <header className="py-24 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-8 text-left mb-12 md:mb-0">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground">
            File<span className="bg-gradient-to-r from-primary to-orange-500 text-transparent bg-clip-text">Remix</span>
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Transform Your Files with AI
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-xl">
            Convert, compress, and enhance your files instantly. Powered by advanced AI technology.
          </p>
          <HeaderButtons />
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Image 
            src="/images/logo.png" 
            alt="FileRemix Hero" 
            width={600} 
            height={600} 
            className="max-w-full h-auto rounded-lg shadow-2xl"
          />
        </div>
      </header>

      <main>
        <div id="dropzone-section">
          <Dropzone />
        </div>
        <div id="features-section">
          <Features />
        </div>
        <div id="pricing-section">
          <Pricing />
        </div>
        
        <section className="py-24 from-background">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Supported File Formats</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8">
              {[ 
                { format: 'PDF', icon: '📄' },
                { format: 'DOCX', icon: '📝' },
                { format: 'JPG', icon: '🖼️' },
                { format: 'PNG', icon: '🎨' },
                { format: 'MP3', icon: '🎵' },
                { format: 'MP4', icon: '🎬' },
                { format: 'CSV', icon: '📊' },
                { format: 'XLSX', icon: '📈' },
              ].map(({ format, icon }) => (
                <div key={format} className="bg-card hover:bg-card/80 transition-colors duration-300 p-6 rounded-xl text-center shadow-lg">
                  <div className="text-4xl mb-4">{icon}</div>
                  <div className="font-semibold">{format}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
