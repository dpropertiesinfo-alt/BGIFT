import React, { useState } from 'react';
import { Users, Search, Building, MapPin, GraduationCap, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ALUMNI_DIRECTORY } from '../../data/mockData';

export const AlumniPage: React.FC = () => {
  const { language } = useApp();
  const isBn = language === 'bn';

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('all');

  const filteredAlumni = ALUMNI_DIRECTORY.filter((alumni) => {
    const matchesProgram = selectedProgram === 'all' || alumni.program.includes(selectedProgram);
    const query = searchTerm.toLowerCase();
    const matchesSearch =
      alumni.name.toLowerCase().includes(query) ||
      alumni.company.toLowerCase().includes(query) ||
      alumni.position.toLowerCase().includes(query) ||
      alumni.location.toLowerCase().includes(query);
    return matchesProgram && matchesSearch;
  });

  return (
    <div className="py-12 px-4 sm:px-6 max-w-6xl mx-auto space-y-10">
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold">
          <Users className="w-3.5 h-3.5" />
          <span>{isBn ? 'গৌরবময় অ্যালামনাই নেটওয়ার্ক' : 'Global Alumni Network'}</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {isBn ? 'বিআইএসটি অ্যালামনাই ডিরেক্টরি' : 'Graduates in Industry Leadership'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-400">
          {isBn
            ? 'সফটওয়্যার ডেভেলপমেন্ট, টেক্সটাইল ম্যানেজমেন্ট, আরএমজি মার্চেন্ডাইজিং ও সরকারি দফতরে কর্মরত আমাদের কৃতী প্রাক্তন শিক্ষার্থী।'
            : 'Explore where BIST engineers, tech developers, and managers are shaping the industry today.'}
        </p>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 max-w-xl mx-auto">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name, company, position..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>

          <select
            value={selectedProgram}
            onChange={(e) => setSelectedProgram(e.target.value)}
            className="w-full sm:w-auto p-2 rounded-xl bg-black/40 border border-white/10 text-xs text-white"
          >
            <option value="all">All Disciplines</option>
            <option value="CSE">B.Sc. in CSE</option>
            <option value="TST">B.Sc. in TST</option>
            <option value="FDT">B.Sc. in FDT</option>
            <option value="BBA">Professional BBA</option>
          </select>
        </div>
      </div>

      {/* Alumni Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAlumni.map((alum) => (
          <div
            key={alum.id}
            className="group rounded-2xl glass-panel p-5 border border-white/10 hover:border-cyan-500/40 transition-all space-y-4"
          >
            <div className="flex items-center gap-3.5">
              <img
                src={alum.image}
                alt={alum.name}
                className="w-14 h-14 rounded-xl object-cover shrink-0 border border-white/10"
              />
              <div className="overflow-hidden">
                <h3 className="font-heading font-bold text-base text-white group-hover:text-cyan-300 transition-colors truncate">
                  {alum.name}
                </h3>
                <span className="text-xs text-cyan-400 font-medium block truncate">
                  {alum.position}
                </span>
                <span className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                  <Building className="w-3 h-3 text-slate-500" />
                  <span className="truncate">{alum.company}</span>
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-white/5 space-y-1.5 text-xs text-slate-400">
              <div className="flex justify-between">
                <span>Degree & Batch:</span>
                <span className="text-slate-200 font-mono font-medium">{alum.program} · {alum.batch}</span>
              </div>
              <div className="flex justify-between">
                <span>Location:</span>
                <span className="text-slate-300 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-cyan-500" />
                  {alum.location}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
