
import React from 'react';
import Layout from './components/Layout';
import { VideoProcessor } from './components/VideoProcessor';

const App: React.FC = () => {
  return (
    <Layout>
      <section className="relative overflow-hidden py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
            Videolarni <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              O'zbekchaga o'giring
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Video hajmi va tili endi to'siq emas. Asadbek Ai orqali videolaringizni professional ovoz va aniq tarjima bilan o'zbekchada tomosha qiling.
          </p>
        </div>
      </section>

      <section id="dubbing-studio" className="pb-24">
        <VideoProcessor />
      </section>
    </Layout>
  );
};

export default App;
