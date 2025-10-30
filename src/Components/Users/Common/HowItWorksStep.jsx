import React from 'react'

const HowItWorksStep = ({ icon, step, title, description }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0f49bd]/10 text-[#0f49bd]">
        <span className="text-4xl">{icon}</span>
      </div>
      <h3 className="text-lg font-bold">{step}. {title}</h3>
      <p className="text-sm text-[#4c669a]">{description}</p>
    </div>
  );
};

export default HowItWorksStep