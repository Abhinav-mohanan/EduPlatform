import React from 'react'

const CourseCard = ({ image, title, instructor }) => {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-[#cfd7e7] bg-white p-4 transition-all hover:shadow-lg hover:-translate-y-1">
      <div 
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
        style={{ backgroundImage: `url("${image}")` }}
      ></div>
      <div>
        <p className="text-base font-semibold leading-normal">{title}</p>
        <p className="text-sm font-normal leading-normal text-[#4c669a]">{instructor}</p>
      </div>
    </div>
  );
};

export default CourseCard