import React, { useEffect, useState, useRef } from 'react';
import { Users, BookOpen, GraduationCap, Award, Building, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { UNIVERSITY_INFO } from '../../data/mockData';

export const StatsSection: React.FC = () => {
  const { language, theme } = useApp();
  const isBn = language === 'bn';

  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Animated counters starting with base numbers so they NEVER show 0!
  const [counts, setCounts] = useState({
    students: 3500,
    programs: 12,
    faculty: 60,
    labs: 10,
    placement: 85,
    scholarships: 900,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1600;
          const steps = 30;
          const stepTime = duration / steps;

          const target = {
            students: UNIVERSITY_INFO.stats.students,
            programs: UNIVERSITY_INFO.stats.programs,
            faculty: UNIVERSITY_INFO.stats.facultyCount,
            labs: UNIVERSITY_INFO.stats.labsCount,
            placement: UNIVERSITY_INFO.stats.placementRate,
            scholarships: UNIVERSITY_INFO.stats.scholarshipsAwarded,
          };

          let currentStep = 0;
          const interval = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            setCounts({
              students: Math.floor(3500 + (target.students - 3500) * progress),
              programs: Math.floor(12 + (target.programs - 12) * progress),
              faculty: Math.floor(60 + (target.faculty - 60) * progress),
              labs: Math.floor(10 + (target.labs - 10) * progress),
              placement: Math.floor(85 + (target.placement - 85) * progress),
              scholarships: Math.floor(900 + (target.scholarships - 900) * progress),
            });

            if (currentStep >= steps) {
              clearInterval(interval);
              setCounts(target);
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const stats = [
    {
      label: isBn ? 'সফল শিক্ষার্থী ও স্নাতক' : 'Enrolled Students & Alumni',
      value: `${counts.students.toLocaleString()}+`,
      icon: Users,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    },
    {
      label: isBn ? 'অনুমোদিত শিক্ষা কোর্স' : 'Academic Programs',
      value: `${counts.programs}+`,
      icon: BookOpen,
      color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    },
    {
      label: isBn ? 'দক্ষ শিক্ষকমণ্ডলী' : 'Expert Faculty Members',
      value: `${counts.faculty}+`,
      icon: GraduationCap,
      color: 'text-amber-500 bg-yellow-50 border-yellow-200',
    },
    {
      label: isBn ? 'আধুনিক গবেষণাগার ও ল্যাব' : 'Specialized Tech Labs',
      value: `${counts.labs}+`,
      icon: Building,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    },
    {
      label: isBn ? 'ইন্ডাস্ট্রিয়াল প্লেসমেন্ট হার' : 'Graduate Career Placement',
      value: `${counts.placement}%`,
      icon: Award,
      color: 'text-amber-600 bg-yellow-50 border-yellow-200',
    },
    {
      label: isBn ? 'প্রদত্ত শিক্ষাবৃত্তি' : 'Scholarships Granted',
      value: `${counts.scholarships}+`,
      icon: Sparkles,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    },
  ];

  return (
    <section ref={containerRef} className={`py-14 px-4 sm:px-6 border-y relative overflow-hidden transition-colors ${
      theme === 'dark' ? 'bg-[#050816]/95 border-white/5' : 'bg-white border-emerald-100 shadow-[0_4px_20px_-4px_rgba(5,150,105,0.04)]'
    }`}>
      {/* Subtle Background Campus Photo */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.06] dark:opacity-[0.04]">
        <img
          src="/src/assets/images/hero_bist_campus_1790590235440.jpg"
          alt="BIST Campus Background"
          className="w-full h-full object-cover object-center filter blur-xs"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-2 group">
              <div className={`p-2.5 rounded-xl border group-hover:scale-110 transition-transform ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <div className={`font-heading font-extrabold text-2xl sm:text-3xl tracking-tight tabular-nums ${
                theme === 'dark' ? 'text-white' : 'text-[#0b192c]'
              }`}>
                {stat.value}
              </div>
              <div className={`text-[11px] sm:text-xs font-medium leading-tight ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
              }`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
