
import React from 'react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 glass border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Asadbek Ai
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Bosh sahifa</a>
            <a href="#" className="hover:text-white transition-colors">Yutuqlarimiz</a>
            <button className="bg-white text-slate-900 px-5 py-2 rounded-full hover:bg-indigo-50 transition-all font-semibold">
              Bog'lanish
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="glass border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-bold mb-4">Asadbek Ai</h2>
            <p className="text-gray-400 max-w-sm">
              Eng kuchli sun'iy intellekt texnologiyasi yordamida videolaringizni professional o'zbek tiliga dublyaj qiling. 
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Xizmatlar</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white">AI Dublyaj</a></li>
              <li><a href="#" className="hover:text-white">AI Tarjima</a></li>
              <li><a href="#" className="hover:text-white">Video Optimizatsiya</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Ijtimoiy tarmoqlar</h3>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/10">
                <span className="text-xs">TG</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/10">
                <span className="text-xs">IG</span>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-gray-500 text-xs">
          © 2024 Asadbek Ai. Barcha huquqlar himoyalangan.
        </div>
      </footer>
    </div>
  );
};
