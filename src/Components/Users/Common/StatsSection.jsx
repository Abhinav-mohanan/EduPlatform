import React from 'react'
import StatsCard from './StatsCard'

const StatsSection = () => {
  const stats = [
    { label: 'Courses Offered', value: '100+' },
    { label: 'Expert Instructors', value: '50+' },
    { label: 'Students Enrolled', value: '10,000+' }
  ];

  return (
    <div className="my-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
      {stats.map((stat, index) => (
        <StatsCard key={index} label={stat.label} value={stat.value} />
      ))}
    </div>
  );
};

export default StatsSection