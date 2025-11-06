import React from 'react'
import { Award, Check, File, FileText, X, XCircle } from 'lucide-react';

const DetailsModal = ({ onClose }) => {
  return (
    <>
      <div className="fixed inset-0 bg-black/30 z-40"></div>
      <div className="fixed top-0 right-0 h-full w-full max-w-2xl bg-white dark:bg-[#181f2b] shadow-2xl z-50 flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-800">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Application Details</h2>
          <button className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 cursor-pointer" onClick={onClose}>
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-background-light dark:bg-background-dark">
          {/* Personal Info Card */}
          <div className="bg-white dark:bg-[#181f2b] p-6 rounded-xl border border-slate-200 dark:border-slate-800">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">Personal Information</h3>
            <div className="flex items-center gap-4 mb-6">
              <img 
                className="w-16 h-16 rounded-full object-cover" 
                alt="Profile picture of Olivia Chen" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcdp9HKaXdy3uJ-cXfVf3fZSfkuupKvvVQ_PTjQqpoZbROfp2-tftn_let6aJJMsyu8XdCAjW2PovwxdN7XKbIceLtO-Cq10oY3RBuTyhuWBMgD8KeB5EzAPYQliPvVIg60NdoRAHTcjVcr5TDLbJco6h_Y7eYkDxG8ljSaaa56sqJQTafqdFHhajZhKW63ZewANEg3Ej5I_T_WHSZjvQFwU6ukY1SweJuVEHSH9i291H_yLYk3lwi1OdGneipxjEpfn1LfAk5kmo" 
              />
              <div>
                <p className="text-lg font-bold text-slate-900 dark:text-white">Olivia Chen</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">olivia.chen@email.com</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">(555) 123-4567</p>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">Academic Background</h4>
              <p className="text-slate-800 dark:text-slate-300">PhD in Computer Science, Stanford University</p>
            </div>
          </div>
          {/* Professional Experience Card */}
          <div className="bg-white dark:bg-[#181f2b] p-6 rounded-xl border border-slate-200 dark:border-slate-800">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">Professional Experience</h3>
            <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <p><span className="font-medium text-slate-700 dark:text-slate-300">Summary:</span> 8+ years of experience in software engineering and university-level teaching.</p>
              <p><span className="font-medium text-slate-700 dark:text-slate-300">Proposed Courses:</span></p>
              <ul className="list-disc list-inside pl-2">
                <li>Introduction to Machine Learning</li>
                <li>Advanced Algorithms</li>
                <li>Data Structures in Python</li>
              </ul>
            </div>
          </div>
          {/* Uploaded Documents Card */}
          <div className="bg-white dark:bg-[#181f2b] p-6 rounded-xl border border-slate-200 dark:border-slate-800">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">Uploaded Documents</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50" href="#">
                <FileText className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">University_Transcript.pdf</span>
              </a>
              <a className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50" href="#">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Teaching_Certificate.pdf</span>
              </a>
              <a className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50" href="#">
                <File className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Curriculum_Vitae.pdf</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-4 p-6 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#181f2b]">
          <button 
          onClick={onClose} 
          className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 bg-red-100/50 dark:bg-red-900/20 text-red-600 dark:text-red-400 gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-6 border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-900/40">
            <XCircle className="h-4 w-4" />
            Reject
          </button>
          <button 
          onClick={onClose}
          className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 bg-primary text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-6 hover:bg-primary/90">
            <Check className="h-4 w-4" />
            Approve
          </button>
        </div>
      </div>
    </>
  );
};

export default DetailsModal