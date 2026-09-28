import React from 'react';
import { Quote, Award, CheckCircle2, ArrowRight, Building2, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { FACULTY_MEMBERS } from '../../data/mockData';

export const PrincipalMessage: React.FC = () => {
  const { language, navigateTo, theme } = useApp();
  const isBn = language === 'bn';

  const principal = FACULTY_MEMBERS[0]; // Engr. Md. Mobarak Hossain

  return (
    <section className={`py-16 sm:py-20 px-4 sm:px-6 relative transition-colors ${
      theme === 'dark' ? 'bg-[#050816]/70' : 'bg-slate-50/70 cyber-grid-light'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className={`relative rounded-3xl p-6 sm:p-10 lg:p-12 border overflow-hidden shadow-xl backdrop-blur-xl ${
          theme === 'dark'
            ? 'glass-panel-dark border-emerald-500/30'
            : 'bg-white/95 border-emerald-200/90 shadow-[0_12px_40px_rgba(5,150,105,0.07)]'
        }`}>
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Principal Portrait */}
            <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden p-1.5 bg-gradient-to-tr from-emerald-500 via-teal-400 to-yellow-400 shadow-2xl group">
                <img
                  src={principal.image}
                  alt={principal.name.en}
                  className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute bottom-2 left-2 right-2 px-2 py-1 rounded-lg bg-black/75 backdrop-blur-md text-white text-[11px] font-semibold text-center border border-white/20">
                  {isBn ? 'অধ্যক্ষ ও প্রতিষ্ঠাতা' : 'Principal & Founder'}
                </div>
              </div>

              <div>
                <h3 className={`font-heading font-extrabold text-xl ${
                  theme === 'dark' ? 'text-white' : 'text-[#0b192c]'
                }`}>
                  {isBn ? principal.name.bn : principal.name.en}
                </h3>
                <p className="text-xs text-emerald-700 dark:text-emerald-400 font-extrabold mt-0.5 tracking-wide">
                  {isBn ? 'অধ্যক্ষ ও প্রতিষ্ঠাতা, বিআইএসটি' : 'Principal & Founder, BIST'}
                </p>
                <p className={`text-[11px] max-w-xs mt-1 leading-normal ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {principal.qualifications}
                </p>
                <div className={`inline-flex items-center gap-1.5 mt-2.5 px-3 py-1 rounded-full text-[10px] font-bold ${
                  theme === 'dark'
                    ? 'bg-emerald-950/80 border border-emerald-500/40 text-emerald-300'
                    : 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                }`}>
                  <Award className="w-3.5 h-3.5 text-amber-500" />
                  <span>President, PIANU Central Committee</span>
                </div>
              </div>
            </div>

            {/* Principal Quote Narrative */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-2xl border shrink-0 ${
                  theme === 'dark'
                    ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                    : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                }`}>
                  <Quote className="w-6 h-6" />
                </div>
                <div>
                  <span className={`text-xs font-bold uppercase tracking-wider block ${
                    theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'
                  }`}>
                    {isBn ? 'অধ্যক্ষ ও প্রতিষ্ঠাতার বাণী' : 'Message from Principal & Founder'}
                  </span>
                  <span className={`text-xs block font-medium ${
                    theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {isBn ? 'টেকসই শিল্পায়ন ও দক্ষ মানবসম্পদ সৃষ্টিতে অবিচল অঙ্গীকার' : 'Empowering Human Capital for 4IR & Industrial Bangladesh'}
                  </span>
                </div>
              </div>

              {/* Updated modern copy */}
              <div className={`space-y-4 text-sm sm:text-base leading-relaxed ${
                theme === 'dark' ? 'text-slate-200' : 'text-slate-700'
              }`}>
                <p className="font-medium italic border-l-4 border-emerald-500 pl-4 py-1">
                  {isBn
                    ? '“জ্ঞান ও প্রযুক্তির দ্রুত পরিবর্তনের এই যুগে শিল্প কারখানা ও গ্লোবাল সাপ্লাই চেইনের জন্য কেবল তাত্ত্বিক শিক্ষা যথেষ্ট নয়। প্রয়োজন বাস্তবমুখী দক্ষতা, উদ্ভাবনী চিন্তা এবং আধুনিক প্রকৌশলের সঠিক প্রয়োগ।”'
                    : '“In this era of rapid technological acceleration and the Fourth Industrial Revolution, textbook theory alone cannot drive industrial growth. Our nation requires pragmatic engineering acumen, creative problem-solving, and hands-on technological literacy.”'}
                </p>

                <p className={`text-xs sm:text-sm leading-relaxed ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {isBn
                    ? '“২০০৭ সালে গাজীপুরের চান্দনা চৌরাস্তায় বিআইএসটি প্রতিষ্ঠিত হয়েছিল তৈরি পোশাক, টেক্সটাইল এবং আধুনিক তথ্যপ্রযুক্তিতে দক্ষ মানবসম্পদ তৈরির লক্ষ্য নিয়ে। আজ আমাদের শিক্ষার্থীরা দেশ-বিদেশের শীর্ষস্থানীয় প্রতিষ্ঠানে কৃতিত্বের সাথে নেতৃত্ব দিচ্ছেন। আমরা প্রতিটি শিক্ষার্থীকে বিশ্বমানের ল্যাবরেটরি প্রশিক্ষণ ও ১০০% পর্যন্ত শিক্ষাবৃত্তির সুযোগ দিয়ে আগামী দিনের স্মার্ট বাংলাদেশের নেতৃত্ব উপযোগী করে গড়ে তুলছি।”'
                    : '“Founded in 2007 at the center of Gazipur’s manufacturing belt, BIST was built to transform enthusiastic young minds into capable industrial engineers, software developers, fashion leaders, and corporate managers. With 16+ modern laboratories and merit-driven scholarships, we are committed to unlocking each student’s highest potential.”'}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => navigateTo('about')}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-yellow-400 hover:from-emerald-400 hover:to-yellow-300 text-slate-950 text-xs font-bold transition-all flex items-center gap-2 shadow-sm cursor-pointer"
                >
                  <span>{isBn ? 'প্রতিষ্ঠানের ইতিহাস জানুন' : 'Read Institutional History'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => navigateTo('faculty')}
                  className={`text-xs font-bold transition-colors cursor-pointer ${
                    theme === 'dark' ? 'text-emerald-400 hover:text-emerald-300' : 'text-emerald-800 hover:text-emerald-950'
                  }`}
                >
                  {isBn ? 'সকল শিক্ষকমণ্ডলীর তালিকা →' : 'Meet Our Distinguished Faculty →'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
