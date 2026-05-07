'use client';

export default function Footer() {
  return (
    <footer className="bbb backdrop-blur-xl bg-primary-700 border-t border-primary-450 shadow-2xl mt-20 py-12 px-6 md:px-12 lg:px-24 z-50" > 

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold bg-gradient-to-r  bg-clip-text text-transparent mb-2">
            Mostafa Omar
          </h3>
          <p className="text-center  text-gray-700/80 text-sm text-center md:text-center justify-center md:justify-center ">
            © 2026 Mostafa Omar. All rights reserved.
          </p>
        </div>

      </div>
      
    </footer>
  );
}

