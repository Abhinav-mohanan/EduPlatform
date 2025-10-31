import React, { useState } from 'react';
import { School, LayoutDashboard, BookOpen, Compass, Calendar, Settings, LogOut, Search, ChevronDown, Bookmark, FileText, PlayCircle, Music, ChevronUp } from 'lucide-react';

const CourseCard = ({ course }) => {
  const [isBookmarked, setIsBookmarked] = useState(course.bookmarked);
  
  return (
    <div className="bg-white dark:bg-[#1A2233] rounded-xl shadow-md p-5 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-start">
        <h3 className="font-bold text-lg text-[#0D121B] dark:text-[#E5E7EB]">{course.title}</h3>
        <button 
          onClick={() => setIsBookmarked(!isBookmarked)}
          className="text-[#4C669A] dark:text-[#9CA3AF] hover:text-[#0A2463] dark:hover:text-[#D8B4A0]"
        >
          <Bookmark className={isBookmarked ? 'fill-current text-[#0A2463] dark:text-[#D8B4A0]' : ''} size={20} />
        </button>
      </div>
      
      <div className="flex items-center gap-2">
        <img 
          className="size-6 rounded-full" 
          src={course.instructorImage} 
          alt={`Profile of ${course.instructor}`}
        />
        <p className="text-sm text-[#4C669A] dark:text-[#9CA3AF]">{course.instructor}</p>
      </div>
      
      <div>
        <div className="flex justify-between text-xs text-[#4C669A] dark:text-[#9CA3AF] mb-1">
          <span>Progress</span>
          <span>{course.progress}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div 
            className="bg-[#D8B4A0] h-2 rounded-full transition-all duration-300" 
            style={{width: `${course.progress}%`}}
          />
        </div>
      </div>
      
      <button className="w-full mt-2 py-2 text-center text-white bg-[#0A2463] rounded-lg hover:bg-[#0A2463]/90 transition-colors">
        View Course
      </button>
    </div>
  );
};
export default CourseCard