import React, { useState } from 'react';
import { School, LayoutDashboard, BookOpen, Compass, Calendar, Settings, LogOut, Search, ChevronDown, Bookmark, FileText, PlayCircle, Music, ChevronUp } from 'lucide-react';

const TopicAccordion = ({ topic, isExpanded, onToggle }) => {
  return (
    <div className="bg-white dark:bg-[#1A2233] rounded-xl shadow-sm">
      <button 
        onClick={onToggle}
        className="w-full flex justify-between items-center p-5 text-left"
      >
        <h3 className="font-bold text-lg text-[#0D121B] dark:text-[#E5E7EB]">{topic.title}</h3>
        {isExpanded ? (
          <ChevronUp className="text-[#4C669A] dark:text-[#9CA3AF]" size={24} />
        ) : (
          <ChevronDown className="text-[#4C669A] dark:text-[#9CA3AF]" size={24} />
        )}
      </button>
      
      {isExpanded && topic.materials && (
        <div className="px-5 pb-5">
          <ul className="space-y-3 border-l-2 border-[#D8B4A0] pl-6">
            {topic.materials.map((material, idx) => (
              <li 
                key={idx}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-[#0A2463]/5 dark:hover:bg-white/5 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  {material.type === 'pdf' && <FileText className="text-[#D8B4A0]" size={20} />}
                  {material.type === 'video' && <PlayCircle className="text-[#D8B4A0]" size={20} />}
                  {material.type === 'audio' && <Music className="text-[#D8B4A0]" size={20} />}
                  <p>{material.name}</p>
                </div>
                <span className="text-xs text-[#4C669A] dark:text-[#9CA3AF] uppercase">{material.type}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default TopicAccordion