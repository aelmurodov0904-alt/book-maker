
import React from 'react';
import { Layout } from './components/Layout';
import { VideoProcessor } from './components/VideoProcessor';

const App: React.FC = () => {
  return (
    <Layout>
      <section className="relative overflow-hidden py-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/20 blur-[120px] -z-10 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-semibold tracking-wide animate-pulse">
            Asadbek Ai: Dublyaj san'atida yangi davr!
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
            Videolarni <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              O'zbekchaga o'giring
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Video hajmi va tili endi to'siq emas. Asadbek Ai orqali videolaringizni professional ovoz va aniq tarjima bilan o'zbekchada tomosha qiling.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#dubbing-studio" className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-lg shadow-xl shadow-indigo-600/20 transition-all transform hover:-translate-y-1">
              Hozir boshlash
            </a>
          </div>
        </div>
      </section>

      <section id="dubbing-studio" className="pb-24">
        <VideoProcessor />
      </section>

      <section className="py-24 glass">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Asadbek Ai qanday ishlaydi?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                <div className="text-4xl mb-4">1</div>
                <h4 className="text-xl font-bold mb-2">Yuklash</h4>
                <p className="text-gray-400">Video fayl yoki linkni kiriting. Tizim avtomatik tahlil qiladi.</p>
             </div>
             <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                <div className="text-4xl mb-4">2</div>
                <h4 className="text-xl font-bold mb-2">AI Tarjima</h4>
                <p className="text-gray-400">Gemini 3 Flash modeli videoni boshidan oxirigacha tushunib, tarjima qiladi.</p>
             </div>
             <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                <div className="text-4xl mb-4">3</div>
                <h4 className="text-xl font-bold mb-2">Dublyaj</h4>
                <p className="text-gray-400">Yuqori sifatli ovoz bilan o'zbekcha variant tayyor bo'ladi.</p>
             </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default App;
