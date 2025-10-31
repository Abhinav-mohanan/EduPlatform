import React from 'react';
import { School, LayoutDashboard, BookOpen, Calendar, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StudentSidebar = () => {
  const navigate = useNavigate()
  return (
    <aside className="flex flex-col w-64 p-4 bg-white dark:bg-[#1A2233] border-r border-gray-200 dark:border-gray-700 fixed h-full">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-[#0A2463] rounded-lg">
          <School className="text-white" size={24} />
        </div>
        <h1 className="text-xl font-bold text-[#0A2463] dark:text-white">EduPlatform</h1>
      </div>
      
      <div className="flex flex-col gap-4 mb-auto">
        <div className="flex items-center gap-3">
          <div 
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" 
            style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAtrOp2fDtbhpuAX4tCgMb_X9TAN_4_CcA6cLxXWEYRsm8Jwwg0O-iyM9Nt2dcfSQatLSmSNmqrQidJcZbjTSZo5R67hX7RWc50vs5uChu_f1shx6N4bAqFNtQEy2cN3qK5Nuzie3FozsJFq3jq_zCQ5j7VQNwvgiBp1UTJ1DQiIjVt2Vx-r9W2UYq9sY0bmZ_ZWhb-dc2CtN0Hnnne_U51XyMa4KqI3_g-pWhZt40fpSI3q18tlXj2JrUA70lHOE0NlYBgQuWIRUA")'}}
          />
          <div className="flex flex-col">
            <h2 className="text-base font-medium text-[#0D121B] dark:text-[#E5E7EB]">Amelia Vance</h2>
            <p className="text-sm font-normal text-[#4C669A] dark:text-[#9CA3AF]">Student</p>
          </div>
        </div>
        
        <nav className="flex flex-col gap-2 mt-4">
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#0A2463]/10 dark:bg-[#0A2463]" href="#">
            <LayoutDashboard className="text-[#0A2463] dark:text-white" size={24} />
            <p className="text-sm font-medium text-[#0A2463] dark:text-white">Dashboard</p>
          </a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#0A2463]/5 dark:hover:bg-white/10" href="#">
            <BookOpen className="text-[#0D121B] dark:text-[#E5E7EB]" size={24} />
            <p className="text-sm font-medium">My Courses</p>
          </a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#0A2463]/5 dark:hover:bg-white/10" href="#">
            <Calendar className="text-[#0D121B] dark:text-[#E5E7EB]" size={24} />
            <p className="text-sm font-medium">Calendar</p>
          </a>
        </nav>
      </div>
      
      <div className="flex flex-col gap-2">
        <a
        onClick={()=>navigate('/role-selection')}
         className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#0A2463]/5 dark:hover:bg-white/10" href="#">
          <LogOut className="text-[#0D121B] dark:text-[#E5E7EB]" size={24} />
          <p className="text-sm font-medium">Log Out</p>
        </a>
      </div>
    </aside>
  );
};
export default StudentSidebar