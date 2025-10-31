
import React, { useState } from 'react';
import { School, LayoutDashboard, BookOpen, Compass, Calendar, Settings, LogOut, Search, ChevronDown, Bookmark, FileText, PlayCircle, Music, ChevronUp } from 'lucide-react';
import TopicAccordion from './TopicAccordion';
import CourseCard from './CourseCard';

const StudentDashboardContent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedTopic, setExpandedTopic] = useState(0);
  
  const courses = [
    {
      id: 1,
      title: 'Intro to Psychology',
      instructor: 'Dr. Anya Sharma',
      instructorImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyJdb9D2ihOwbE81-WeXDULZC3dl6WhnZSNSrFmEiSgR5XqC0kRsyd2I-p2oNLQr9iFmDGnI9DNhxVDv7dRZ1id95zwIsdJ-0xUVBxfFdzBU4T_gaQWMNBXn2YctmZLWBT05QpB6yzlmsuetV9kkb-4sAPb9_ZKqgMXUrufKCYvud2y1erINA1nEhk8lrEMarsSAz7ZE2oX727Wl5MZgQrUF8V8-hg24HRKbEjv_O5q8st9_o7T7Zx_eX3V2xkUwOCw_HnpzWnLh8',
      progress: 65,
      bookmarked: false
    },
    {
      id: 2,
      title: 'Calculus I',
      instructor: 'Dr. Leo Martinez',
      instructorImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUDD8Vza0yTUOHyQ5CNo20lGQh9Re3TB3hjX0TrgWUgHnRrk9Klbw1y6o48oM4hDWQxzmewA2XBqxN9dh7ootED2SzxUgUHYRC77owFHfr_dXZeBvmGOGdoxAzjX8yTBIGLZnSebZCRymCRzWVp1Kqh4vAARZR8UxnUyCnmwiDDxBqfBPiyOmp59db5o1KtQkPgxnD0rfA3ANRHQylVF16KTzRGzKbBmneHnnPBNSdYiZh69HglGC6oDq3ieW8FVJIXE8uyE4RsUg',
      progress: 20,
      bookmarked: true
    },
    {
      id: 3,
      title: 'Creative Writing',
      instructor: 'Prof. Eva Chen',
      instructorImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0kNoxpQ4I47x0skvUwlmszYpFjqnGZ_pQzH6wHZq47M6tUDFfk8h5ST3E7JSym3rP8MkRmkC_VC4lUYNCaFvW7tVo4tTGcCVtUfF-k8RA7O7E8ouoaBCfYhh53r4KynWzqywW5I6yxntXAlfU27sSURvpOgWOjE4YN5SorLmM24obTm8OSfuco_sM9dWIwTu-epmX7rQTothAQhM1RQMQ3IXXHyi4KQb70p0HsvaX4yUf0eJLwrXyxdIWKPwtLExN2d-GvBZJ8HE',
      progress: 85,
      bookmarked: false
    }
  ];
  
  const topics = [
    {
      id: 1,
      title: 'Week 1: Foundations of Psychology',
      materials: [
        { name: 'Chapter 1 Reading Notes', type: 'pdf' },
        { name: 'Lecture: What is Psychology?', type: 'video' },
        { name: 'Podcast: The History of the Mind', type: 'audio' }
      ]
    },
    {
      id: 2,
      title: 'Week 2: Biological Psychology',
      materials: null
    },
    {
      id: 3,
      title: 'Week 3: Sensation and Perception',
      materials: null
    }
  ];
  
  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Header: Search and Filters */}
      <header className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <div className="w-full md:max-w-md">
          <div className="flex flex-col min-w-40 h-12 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-white dark:bg-[#1A2233] shadow-sm">
              <div className="text-[#4C669A] dark:text-[#9CA3AF] flex items-center justify-center pl-4">
                <Search size={24} />
              </div>
              <input 
                className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0D121B] dark:text-[#E5E7EB] focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-[#4C669A] dark:placeholder:text-[#9CA3AF] pl-2 text-base font-normal"
                placeholder="Search for a course, topic, or instructor..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
        
        <div className="flex gap-3 overflow-x-auto">
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-[#1A2233] shadow-sm pl-4 pr-3 hover:bg-gray-50 dark:hover:bg-white/5">
            <p className="text-sm font-medium">Filter by Course</p>
            <ChevronDown size={20} />
          </button>
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-[#1A2233] shadow-sm pl-4 pr-3 hover:bg-gray-50 dark:hover:bg-white/5">
            <p className="text-sm font-medium">Filter by Topic</p>
            <ChevronDown size={20} />
          </button>
        </div>
      </header>
      
      {/* Breadcrumbs */}
      <nav className="flex flex-wrap gap-2 py-4">
        <a className="text-[#4C669A] dark:text-[#9CA3AF] text-sm font-medium leading-normal hover:text-[#0A2463]" href="#">
          My Courses
        </a>
        <span className="text-[#4C669A] dark:text-[#9CA3AF] text-sm font-medium leading-normal">/</span>
        <a className="text-[#4C669A] dark:text-[#9CA3AF] text-sm font-medium leading-normal hover:text-[#0A2463]" href="#">
          Intro to Psychology
        </a>
        <span className="text-[#4C669A] dark:text-[#9CA3AF] text-sm font-medium leading-normal">/</span>
        <span className="text-[#0D121B] dark:text-[#E5E7EB] text-sm font-medium leading-normal">Week 1</span>
      </nav>
      
      {/* Headline */}
      <h1 className="text-[#0D121B] dark:text-[#E5E7EB] text-[32px] font-bold leading-tight pb-6 pt-2">
        Continue Learning
      </h1>
      
      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      
      {/* Course Detail Section */}
      <div className="mt-12">
        <h2 className="text-[#0D121B] dark:text-[#E5E7EB] text-2xl font-bold leading-tight pb-6">
          Course Content: Intro to Psychology
        </h2>
        <div className="flex flex-col gap-4">
          {topics.map((topic, idx) => (
            <TopicAccordion 
              key={topic.id}
              topic={topic}
              isExpanded={expandedTopic === idx}
              onToggle={() => setExpandedTopic(expandedTopic === idx ? -1 : idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default StudentDashboardContent