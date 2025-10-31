import React from 'react';
import { School, LayoutDashboard, BookOpen, Calendar, MessageSquare, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate()
  return (
    <div className="fixed top-0 left-0 flex h-full min-h-screen w-64 flex-col justify-between border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-2">
          <School className="text-[#0f49bd] text-3xl" size={32} />
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">EduPlatform</h2>
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="flex gap-3">
            <div 
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" 
              style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA9p5k0nwl4UKbkdmiJjHpXi4z3K587vOZ1JrRYpFD3QYDCIqn7cpT-5CWLb8fHiGvWOSWUZg8b11n-dWLqlvPQf1tjfi_xCz6xCW65Pp8n6khy3NWMQ0CTjRPVcmP4fpeMBjl8uGNK8XBII16I1iZT-jmQL13WuIqiP2iZT3roa7kb6RzPsKTzsIv-tx_ZnNCCyfCrRfYNUS03yKPnUBGNDOZxzv97m0XnmAofSYK0knrNMl80PjlW356aaedZr5nPa9e8Mpvz5As")'}}
            />
            <div className="flex flex-col">
              <h1 className="text-slate-900 dark:text-white text-base font-medium leading-normal">Dr. Eleanor Vance</h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">Professor of CS</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-2 pt-4">
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800" href="#">
              <LayoutDashboard size={20} className="text-slate-500 dark:text-slate-400" />
              <p className="text-sm font-medium leading-normal">Dashboard</p>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#0f49bd]/10 dark:bg-[#0f49bd]/20 text-[#0f49bd]" href="#">
              <BookOpen size={20} />
              <p className="text-sm font-medium leading-normal">My Courses</p>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800" href="#">
              <Calendar size={20} className="text-slate-500 dark:text-slate-400" />
              <p className="text-sm font-medium leading-normal">Calendar</p>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800" href="#">
              <MessageSquare size={20} className="text-slate-500 dark:text-slate-400" />
              <p className="text-sm font-medium leading-normal">Messages</p>
            </a>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col gap-1">
        <a
        onClick={()=>navigate('/role-selection')}
         className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800" href="#">
          <LogOut size={20} className="text-slate-500 dark:text-slate-400" />
          <p className="text-sm font-medium leading-normal">Logout</p>
        </a>
      </div>
    </div>
  );
};


export default Sidebar;