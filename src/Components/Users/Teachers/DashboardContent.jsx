import { useState } from "react";
import { Plus, Search, Edit, Trash2, Eye, Video, FileAudio } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const DashboardContent = () => {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('');
  
  const courses = [
    {
      id: 1,
      title: 'BCA (Computer Applications)',
      subjects: 4,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDI9T9bfRzVnhW72eQ3DgObs-Rqp-iCnrG0Vp5W8LYUrY1J9sT2yi4ae7oMeV-6Tg7FOIK91952k4F9bBuZ_h19FBqREhi1KJWoth_MMZL8gfp0DmV79autZuImYFdIrAw-kuEK9XrjwFQnMXAwPv_yTGDNzho8Eq9wP2GIRRWv5P8M0laYksyib6CELCpsHg5N0xELL6nIcmIk0SlcXCnCsHyLAEAqWCirHHEtC1trni4ohTgMPy34pbbEV523ylt2jv6sQo0Y6PA'
    },
    {
      id: 2,
      title: 'MCA (Advanced Computing)',
      subjects: 3,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfXoxF_wpzFPSyGc55ESU8q2y22HyUAkFBGKP91fB_m0FHseul2u4xknIMjh1wvNEVl48cFy-_FkKvKemu0E_o9wYh3uawucoOAqgLUnp2IIkPqIW0IjcXyJmprVuhkmyC3HxkRi36qHW69vgk19IpHApclq_HbDmmufUlDQBuV4wxl5w3MoCX8vWA0P4jXNkf2FgibEgU98twpJqLTgGSGYfgOm6TE2tNzh04uc6UFNRoBE0fVLufweKz2iqPAKPQpthI32S05JA'
    },
    {
      id: 3,
      title: 'B.Tech (Information Tech.)',
      subjects: 5,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDx5mZM9KGp492EO1ST-l6UbH4KVIHL6nCdm99WA44r066z_V4MgYr2w1uvv5wdkjfQVygfm8zFr5JXJzF3HW3GBy6rPUoYDjm7B0O9x7SVvoAEklAHvalDluymFFvHqwyjILI1aVBCza57kXIIh1Nytet7srqYaOr1E6rZl3zhTjp6RHOknTJJJyCBu3hPOPazfZ8M7sJi2eqMLE2_e4QnF68zI4ofAqFXhUJ7o6HmNMJEAdCuA2uBcUvJXUcco_r1M-xs-T_7-sc'
    }
  ];
  
  const recentUploads = [
    {
      id: 1,
      fileName: 'Chapter 1 - Intro.pdf',
      subject: 'Data Structures',
      subtopic: 'Linked Lists',
      date: 'Oct 26, 2023',
      type: 'pdf'
    },
    {
      id: 2,
      fileName: 'Singly Linked List Tutorial.mp4',
      subject: 'Data Structures',
      subtopic: 'Linked Lists',
      date: 'Oct 25, 2023',
      type: 'video'
    },
    {
      id: 3,
      fileName: 'Stack vs Queue Lecture.mp3',
      subject: 'Operating Systems',
      subtopic: 'Process Management',
      date: 'Oct 24, 2023',
      type: 'audio'
    }
  ];
  
  const getFileIcon = (type) => {
    switch(type) {
      case 'pdf':
        return <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 2v6h6"/></svg>;
      case 'video':
        return <Video className="w-5 h-5 text-blue-500" />;
      case 'audio':
        return <FileAudio className="w-5 h-5 text-green-500" />;
      default:
        return null;
    }
  };
  
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-slate-900 dark:text-white text-3xl font-bold leading-tight">My Courses</p>
          <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">
            Manage and upload educational materials for your courses.
          </p>
        </div>
        <button
        onClick={()=>navigate('/upload-file')}
         className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-[#0f49bd] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#0f49bd]/90 transition-colors">
          <Plus size={16} />
          <span className="truncate">Add New Course</span>
        </button>
      </div>
      
      <div className="flex flex-wrap items-center justify-between gap-4 mt-8">
        <div className="flex flex-wrap items-center gap-2">
          <a className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal hover:text-[#0f49bd]" href="#">
            BCA
          </a>
          <span className="text-slate-400 dark:text-slate-500 text-sm font-medium leading-normal">/</span>
          <span className="text-slate-900 dark:text-white text-sm font-medium leading-normal">All Subjects</span>
        </div>
        
        <div className="w-full sm:w-auto">
          <div className="flex flex-col min-w-40 h-10 w-full sm:w-72">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div className="text-slate-400 dark:text-slate-500 flex items-center justify-center pl-3">
                <Search size={20} />
              </div>
              <input 
                className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-slate-400 dark:placeholder:text-slate-500 px-2 text-sm font-normal leading-normal"
                placeholder="Search courses or materials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 mt-8">
        {courses.map(course => (
          <div key={course.id} className="flex flex-col gap-3 pb-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            <div 
              className="w-full bg-center bg-no-repeat aspect-video bg-cover" 
              style={{backgroundImage: `url("${course.image}")`}}
            />
            <div className="p-4 flex flex-col gap-1">
              <p className="text-slate-900 dark:text-white text-base font-bold leading-normal">{course.title}</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">
                {course.subjects} Subjects
              </p>
              <a className="text-[#0f49bd] text-sm font-medium leading-normal mt-2 hover:underline" href="#">
                Manage
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Recent Uploads</h3>
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-9 px-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            <span className="truncate">View All</span>
          </button>
        </div>
        
        <div className="mt-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 dark:bg-slate-800 text-xs text-slate-500 dark:text-slate-400 uppercase">
                <tr>
                  <th className="px-6 py-3 font-medium">File Name</th>
                  <th className="px-6 py-3 font-medium">Subject</th>
                  <th className="px-6 py-3 font-medium">Subtopic</th>
                  <th className="px-6 py-3 font-medium">Date Uploaded</th>
                  <th className="px-6 py-3 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentUploads.map(upload => (
                  <tr key={upload.id} className="border-b dark:border-slate-800 last:border-b-0">
                    <td className="px-6 py-4 font-medium text-slate-900 dark:text-white whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        {getFileIcon(upload.type)}
                        <span>{upload.fileName}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{upload.subject}</td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{upload.subtopic}</td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{upload.date}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors">
                          <Edit size={18} />
                        </button>
                        <button className="p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors">
                          <Trash2 size={18} />
                        </button>
                        <button className="p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors">
                          <Eye size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent