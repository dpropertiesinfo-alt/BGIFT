import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { PrincipalMessage } from '../sections/PrincipalMessage';
import { AdmissionHighlight } from '../sections/AdmissionHighlight';
import { TrustBar } from '../sections/TrustBar';
import { AboutSection } from '../sections/AboutSection';
import { StatsSection } from '../sections/StatsSection';
import { ProgramExplorer } from '../sections/ProgramExplorer';
import { WhyChooseSection } from '../sections/WhyChooseSection';
import { NoticeBoardSection } from '../sections/NoticeBoardSection';
import { EventsSection } from '../sections/EventsSection';
import { ProjectsPartnersMarquee } from '../sections/ProjectsPartnersMarquee';
import { CareerSection } from '../sections/CareerSection';
import { TestimonialsSection } from '../sections/TestimonialsSection';
import { LatestNewsSection } from '../sections/LatestNewsSection';
import { CtaBand } from '../sections/CtaBand';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* 1. HERO WITH BACKGROUND CAMPUS IMAGE */}
      <HeroSection />

      {/* 2. MESSAGE FROM PRINCIPAL & FOUNDER (2ND SECTION) */}
      <PrincipalMessage />

      {/* 3. ADMISSION HIGHLIGHT */}
      <AdmissionHighlight />

      {/* 4. TRUST BAR */}
      <TrustBar />

      {/* 5. WELCOME / ABOUT */}
      <AboutSection />

      {/* 6. ANIMATED STATS */}
      <StatsSection />

      {/* 7. PROGRAM EXPLORER */}
      <ProgramExplorer />

      {/* 8. WHY CHOOSE BIST */}
      <WhyChooseSection />

      {/* 9. NOTICE BOARD */}
      <NoticeBoardSection />

      {/* 10. UPCOMING EVENTS */}
      <EventsSection />

      {/* 11. PROJECTS & PARTNERS */}
      <ProjectsPartnersMarquee />

      {/* 12. CAREER & PLACEMENT */}
      <CareerSection />

      {/* 13. TESTIMONIALS */}
      <TestimonialsSection />

      {/* 14. LATEST NEWS */}
      <LatestNewsSection />

      {/* 15. FINAL CTA BAND */}
      <CtaBand />
    </div>
  );
};
