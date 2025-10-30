import React from 'react'
import InstructorCard from './InstructorCard '

const InstructorsSection = () => {
  const instructors = [
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuClZJsjEe-HPtJEEIERbH12P_wTZchsCxG6mCxQqW02XgQ4x2EPsDZcxsTgTAwBqJEfxx0I02eB2jadxH3ThdR-ISAcIdx2A79sY1JL3HhJFAhP9ChMKbbiSzQZ63yvER3_dJjbshu2gvT8Nzcqd0oWHnVo8Tygv3gWKSbNOL-W_N2e5Q_Q_z79ipE6VAuN8IvFrytFydO2v6IL3mzbRXya-DtYalYIeM5CkQ7EOziS_rXahfFxzWBrVOaDi3om2KUTraQ620jzBXo",
      name: "Dr. Evelyn Reed",
      department: "Computer Science",
      description: "Expert in Artificial Intelligence and Machine Learning, with over 15 years of research experience."
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtEUOtOQltJBK5ZcfGzsesZStWUpMP6IhJgRBbGH4NN54BKhHAo86i-sCNBI2hMTfuxyTN-MNArO8TknTLOQQyABtXCVrMGq6G6KjEgAd1nl7AGMwccjSiK6RaIFKWxRWIRGWbpp1WUoTXZpYRnlTz95dF8-NlD4mozVkuRjZv-SvDkpJi2_ZNvBITzaiwqnk0G0n6SrrxIO3wTHO9k-MjGTp-cYMQkzsEz2FaVKvw8Vjm01x3xkToeckUsqcWMfE0zAPIm_b8HnU",
      name: "Prof. Samuel Chen",
      department: "Business & Economics",
      description: "Specializes in market strategy and behavioral economics, author of 'The Modern Marketplace'."
    }
  ];

  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold leading-tight tracking-tight pb-6 pt-5 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
        Meet Our  Instructors
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {instructors.map((instructor, index) => (
          <InstructorCard key={index} {...instructor} />
        ))}
      </div>
    </section>
  );
};

export default InstructorsSection