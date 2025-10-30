import React from 'react'
import HowItWorksStep from './HowItWorksStep';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: "👤",
      step: 1,
      title: "Create an Account",
      description: "Sign up in minutes and create your student profile to get started."
    },
    {
      icon: "🎓",
      step: 2,
      title: "Enroll in a Course",
      description: "Browse our extensive catalog and enroll in courses that match your interests."
    },
    {
      icon: "🚀",
      step: 3,
      title: "Start Learning",
      description: "Access course materials, collaborate with peers, and start your learning journey."
    }
  ];

  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold leading-tight tracking-tight pb-8 pt-5 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
        Getting Started is Easy
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {steps.map((step, index) => (
          <HowItWorksStep key={index} {...step} />
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection