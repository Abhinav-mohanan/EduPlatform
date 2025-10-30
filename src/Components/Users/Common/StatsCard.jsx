import React from 'react'

const StatsCard = ({ label, value }) => {
  return (
    <div className="flex flex-1 flex-col gap-2 rounded-lg p-6 border border-[#cfd7e7] bg-white">
      <p className="text-base font-medium leading-normal text-[#4c669a]">{label}</p>
      <p className="text-3xl font-bold leading-tight">{value}</p>
    </div>
  );
};

export default StatsCard