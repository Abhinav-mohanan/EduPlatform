import React from 'react'
import { ChevronDown, Filter } from 'lucide-react';

const Filters = () => {
  return (
    <div className="flex gap-3 pb-6 flex-wrap pr-4">
      <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 pl-3 pr-3 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">
        <Filter className="h-5 w-5" />
        <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal">Sort by Name</p>
        <ChevronDown className="h-5 w-5" />
      </button>
      <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 pl-3 pr-3 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">
        <Filter className="h-5 w-5" />
        <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal">Filter by Date</p>
        <ChevronDown className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Filters