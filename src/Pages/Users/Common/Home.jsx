import React from 'react'
import Header from '../../../Components/Users/Common/Header';
import HeroSection from '../../../Components/Users/Common/HeroSection';
import StatsSection from '../../../Components/Users/Common/StatsSection';
import PopularCoursesSection from '../../../Components/Users/Common/PopularCoursesSection ';
import CTASection from '../../../Components/Users/Common/CTASection';
import Footer from '../../../Components/Users/Common/Footer';
import HowItWorksSection from '../../../Components/Users/Common/HowItWorkSection';
import InstructorsSection from '../../../Components/Users/Common/InstructorsSection';

const Home = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#f6f6f8] text-[#0d121b]">
      <Header />
      <main className="flex flex-col items-center w-full">
        <div className="w-full max-w-[960px] px-4 py-5">
          <HeroSection />
          <StatsSection />
          <PopularCoursesSection />
          <InstructorsSection />
          <HowItWorksSection />
          <CTASection />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home