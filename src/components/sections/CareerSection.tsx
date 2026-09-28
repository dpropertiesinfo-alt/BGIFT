import React from 'react';
import { Briefcase, Building, ExternalLink, ArrowRight, Award, CheckCircle } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { UNIVERSITY_INFO } from '../../data/mockData';

export const CareerSection: React.FC = () => {
  const { language, navigateTo, theme } = useApp();
  const isBn = language === 'bn';

  const hiringCompanies = [
    'Brain Station 23',
    'DBL Group',
    'Enosis Solutions',
    'Ha-Meem Group',
    'Square Textiles',
    'Beximco Apparels',
    'Walton Hi-Tech',
    'Apex Footwear',
  ];

  return (
    <section className={`py-20 px-4 sm:px-6 relative transition-colors ${
      theme === 'dark' ? 'bg-[#070b1a]/60' : 'bg-white'
    }`}>
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-5">
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
              theme === 'dark'
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
            }`}>
              <Briefcase className="w-3.5 h-3.5 text-emerald-600" />
              <span>{isBn ? 'ক্যারিয়ার ও কর্মসংস্থান সেল' : 'Career Development & Placement Cell'}</span>
            </div>

            <h2 className={`font-heading text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-[#0b192c]'
            }`}>
              {isBn ? (
                <>
                  ক্যাম্পাস থেকে সরাসরি{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-500">
                    শীর্ষ করপোরেট ও টেক
                  </span>{' '}
                  প্রতিষ্ঠানে চাকরির সুযোগ
                </>
              ) : (
                <>
                  Direct Pathway to{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-500">
                    Leading Tech & Textile
                  </span>{' '}
                  Conglomerates
                </>
              )}
            </h2>

            <p className={`text-sm leading-relaxed ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {isBn
                ? 'বিআইএসটি সেন্ট্রাল ক্যারিয়ার সেল প্রতি বছর ক্যাম্পাস রিক্রুটমেন্ট, সিভি রিভিউ সেশন, বিডিজবস ক্যারিয়ার মেলা এবং সফটওয়্যার ও অ্যাপারেল কোম্পানিতে ইন্টার্নশিপ সমন্বয়ের মাধ্যমে শিক্ষার্থীদের কর্মসংস্থান নিশ্চিত করে।'
                : 'BIST’s proactive Placement Cell bridges graduating talents with industry through mock technical interviews, portfolio reviews, direct factory internships, and annual recruitment drives.'}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className={`p-4 rounded-2xl border space-y-1 ${
                theme === 'dark' ? 'glass-panel-dark' : 'bg-emerald-50/70 border-emerald-200/80 shadow-sm'
              }`}>
                <span className={`font-heading font-extrabold text-2xl ${
                  theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'
                }`}>94%</span>
                <span className={`text-xs block font-medium ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  {isBn ? 'স্নাতক কর্মসংস্থান হার' : 'Placement Rate within 6 mos'}
                </span>
              </div>
              <div className={`p-4 rounded-2xl border space-y-1 ${
                theme === 'dark' ? 'glass-panel-dark' : 'bg-yellow-50/70 border-yellow-200/80 shadow-sm'
              }`}>
                <span className={`font-heading font-extrabold text-2xl ${
                  theme === 'dark' ? 'text-yellow-400' : 'text-amber-700'
                }`}>40+</span>
                <span className={`text-xs block font-medium ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  {isBn ? 'সহযোগী করপোরেট কোম্পানি' : 'Hiring Industry Partners'}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={UNIVERSITY_INFO.contact.jobPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl font-heading font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-emerald-500 to-yellow-400 hover:from-emerald-400 hover:to-yellow-300 transition-all flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>{isBn ? 'বিআইএসটি জব পোর্টাল খুলুন' : 'Open BIST Job Portal'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => navigateTo('alumni')}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5 cursor-pointer ${
                  theme === 'dark'
                    ? 'text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10'
                    : 'text-emerald-800 hover:text-emerald-950 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200'
                }`}
              >
                <span>{isBn ? 'অ্যালামনাই নেটওয়ার্ক' : 'View Alumni Directory'}</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
              </button>
            </div>
          </div>

          {/* Right: Lab Image + Recruiter Grid */}
          <div className={`lg:col-span-5 rounded-3xl border overflow-hidden p-6 space-y-5 ${
            theme === 'dark' ? 'glass-panel-dark' : 'bg-white/95 border-emerald-100 shadow-[0_8px_30px_rgb(5,150,105,0.06)]'
          }`}>
            {/* Visual Engineering Lab Photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-md aspect-video group">
              <img
                src="/src/assets/images/bist_engineering_lab_1790592275533.jpg"
                alt="Engineering Lab at BIST"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-3">
                <span className="text-xs font-bold text-yellow-300">
                  {isBn ? 'ব্যবহারিক ল্যাব থেকে সরাসরি কর্মক্ষেত্র' : 'Hands-on Engineering to Career'}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <span className={`text-xs font-bold uppercase tracking-wider block ${
                theme === 'dark' ? 'text-slate-300' : 'text-emerald-800'
              }`}>
                {isBn ? 'আমাদের স্নাতকদের প্রধান নিয়োগদাতা প্রতিষ্ঠান:' : 'Top Employers of BIST Graduates:'}
              </span>

              <div className="grid grid-cols-2 gap-2.5">
                {hiringCompanies.map((comp, idx) => (
                  <div
                    key={idx}
                    className={`p-2.5 rounded-xl border flex items-center gap-2 text-xs font-semibold transition-all ${
                      theme === 'dark'
                        ? 'bg-white/[0.03] border-white/10 text-white hover:border-emerald-500/30'
                        : 'bg-slate-50 border-emerald-100 text-slate-800 hover:border-emerald-300 hover:bg-emerald-50/50'
                    }`}
                  >
                    <Building className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{comp}</span>
                  </div>
                ))}
              </div>

              <div className={`pt-1 text-[11px] flex items-center gap-2 ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
              }`}>
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>
                  {isBn
                    ? 'সফটওয়্যার ডেভেলপার, মার্চেন্ডাইজার, আইই ও কোয়ালিটি ম্যানেজার পদে কর্মরত।'
                    : 'Employed in software dev, IT infrastructure, apparel merchandising & QA roles.'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
