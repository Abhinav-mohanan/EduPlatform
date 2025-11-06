import React from 'react'
import { Filter, Plus, Search } from 'lucide-react';

const Toolbar = () => {
  return (
    <div className="flex flex-wrap justify-between items-center gap-4 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
      <div className="flex items-center gap-2 flex-1 min-w-64">
        <Search className="text-slate-500 dark:text-slate-400 h-4 w-4" />
        <input 
          className="w-full bg-transparent border-0 focus:ring-0 p-0 text-slate-800 dark:text-slate-200 placeholder:text-slate-500 dark:placeholder:text-slate-400" 
          placeholder="Search by name, email, or ID..." 
          type="text"
        />
      </div>
      <div className="flex items-center gap-2">
        <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700">
          <Filter className="h-4 w-4" />
          <span className="truncate">Filter</span>
        </button>
        <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-primary text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-4 hover:bg-primary/90">
          <Plus className="h-4 w-4" />
          <span className="truncate">Add Student</span>
        </button>
      </div>
    </div>
  );
};

export default Toolbar