"use client";
import Link from 'next/link';
import { FaGithub, FaGlobe, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © 2024 FileRemix. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://github.com/ErinTomorri" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <FaGithub size={20} />
            </a>
            <a href="https://www.erintomorri.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <FaGlobe size={20} />
            </a>
            <a href="https://www.linkedin.com/in/erin-tomorri/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;