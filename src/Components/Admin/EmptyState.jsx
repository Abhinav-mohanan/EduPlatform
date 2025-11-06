import React from 'react'
import { CheckCircle } from 'lucide-react';

const EmptyState = () => {
  return (
    <div className="hidden mt-8 text-center bg-white dark:bg-[#181f2b] rounded-xl border border-dashed border-slate-300 dark:border-slate-700 p-12">
      <div className="flex flex-col items-center justify-center">
        <CheckCircle className="h-12 w-12 text-green-500" />
        <h3 className="mt-4 text-lg font-medium text-slate-900 dark:text-white">All Caught Up!</h3>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">No applications are currently pending verification.</p>
      </div>
    </div>
  );
};

export default EmptyState