import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-6 mt-auto border-t-[1px] border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center max-w-5xl mx-auto my-4 gap-4 sm:gap-0">
          <div className="text-center sm:text-left order-2 sm:order-1">
            <p className="text-sm font-medium">© 2024 Anass Kalkhi. All rights reserved.</p>
            <p className="text-sm font-medium">UI/UX Designer & Developer</p>
          </div>
          
          <div className="flex gap-6 sm:gap-8 order-1 sm:order-2">
            <a 
              href="https://github.com/anass-kalkhi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-zinc-200 transition-colors"
            >
              <i className="bx bxl-github text-2xl sm:text-3xl"></i>
            </a>
            <a 
              href="https://discord.com/users/anass-kalkhi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-zinc-200 transition-colors"
            >
              <i className="bx bxl-discord text-2xl sm:text-3xl"></i>
            </a>
            <a 
              href="https://twitter.com/anass-kalkhi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-zinc-200 transition-colors"
            >
              <i className="bx bxl-twitter text-2xl sm:text-3xl"></i>
            </a>
            <a 
              href="https://linkedin.com/in/anass-kalkhi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-zinc-200 transition-colors"
            >
              <i className="bx bxl-linkedin text-2xl sm:text-3xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
