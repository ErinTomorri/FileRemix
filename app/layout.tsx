import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "FileRemix",
    description: `FileRemix - Transform your files for free!`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="h-full">
            <body className={`${inter.className} flex flex-col min-h-screen bg-gradient-to-br from-background to-secondary/20 bg-dot-pattern`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem themes={["light", "dark"]}>
                    <Navbar />
                    <main className="flex-grow">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                            {children}
                        </div>
                    </main>
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
}
