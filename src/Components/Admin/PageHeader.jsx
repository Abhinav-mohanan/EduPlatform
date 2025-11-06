import React from 'react'
const PageHeader = () => {
  return (
    <div className="flex flex-wrap justify-between items-start gap-4">
      <div className="flex flex-col gap-1">
        <p className="text-slate-900 dark:text-white text-3xl font-bold leading-tight tracking-tight">Student Management</p>
        <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">View, search, and manage student accounts.</p>
      </div>
    </div>
  );
};

export default PageHeader