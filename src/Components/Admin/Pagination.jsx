import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react'

const Pagination = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <span className="text-sm text-slate-500 dark:text-slate-400">Showing 1 to 5 of 97 results</span>
      <div className="flex items-center">
        <a className="flex size-9 items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400" href="#">
          <ChevronLeft className="h-5 w-5" />
        </a>
        <a className="text-sm font-bold flex size-9 items-center justify-center text-white bg-primary rounded-lg" href="#">1</a>
        <a className="text-sm font-normal flex size-9 items-center justify-center text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800" href="#">2</a>
        <a className="text-sm font-normal flex size-9 items-center justify-center text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800" href="#">3</a>
        <span className="text-sm font-normal flex size-9 items-center justify-center text-slate-500 dark:text-slate-400" href="#">...</span>
        <a className="text-sm font-normal flex size-9 items-center justify-center text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800" href="#">8</a>
        <a className="text-sm font-normal flex size-9 items-center justify-center text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800" href="#">9</a>
        <a className="text-sm font-normal flex size-9 items-center justify-center text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800" href="#">10</a>
        <a className="flex size-9 items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400" href="#">
          <ChevronRight className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
};

export default Pagination