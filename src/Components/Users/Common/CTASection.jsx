import React from 'react'

const CTASection = () => {
  return (
    <section className="my-16 text-center">
      <div className="rounded-xl bg-[#0f49bd] p-10">
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Ready to Elevate Your Education?
        </h2>
        <p className="mt-2 text-white/90">Join thousands of students and instructors on the platform of the future.</p>
        <button className="mt-6 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white text-[#0f49bd] text-base font-bold leading-normal tracking-[0.015em] mx-auto hover:bg-opacity-90 transition-opacity">
          <span className="truncate">Get Started for Free</span>
        </button>
      </div>
    </section>
  );
};

export default CTASection