import React from 'react'

const InstructorCard = ({ image, name, department, description }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 rounded-lg border border-[#cfd7e7] bg-white p-6">
      <img className="size-24 rounded-full object-cover" src={image} alt={`Portrait of ${name}`} />
      <div className="text-center sm:text-left">
        <p className="text-lg font-bold">{name}</p>
        <p className="text-sm text-[#0f49bd] font-medium">{department}</p>
        <p className="mt-2 text-sm text-[#4c669a]">{description}</p>
      </div>
    </div>
  );
};

export default InstructorCard 