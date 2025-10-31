import React, { useState } from 'react';
import { School, GraduationCap, BookOpen, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RoleSelectionPage = () => {
  const navigate = useNavigate()
  const [selectedRole, setSelectedRole] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setIsAnimating(true);
    
    setTimeout(() => {
      navigate(`/${role}-dashboard`)
    }, 800);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0A2463] via-[#0f49bd] to-[#3E7CB1] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl">
              <School className="text-white" size={48} />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-3">Welcome to EduPortal</h1>
          <p className="text-xl text-white/80">Choose your role to continue</p>
        </div>

        {/* Role Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Teacher Card */}
          <div
            onClick={() => handleRoleSelect('teacher')}
            className={`group relative bg-white rounded-3xl p-8 cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
              selectedRole === 'teacher' ? 'scale-105 ring-4 ring-white' : ''
            } ${isAnimating && selectedRole === 'teacher' ? 'animate-pulse' : ''}`}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0f49bd]/5 rounded-bl-full"></div>
            
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0f49bd] to-[#0A2463] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="text-white" size={40} />
              </div>
              
              <h2 className="text-3xl font-bold text-[#0D121B] mb-3">Teacher</h2>
              <p className="text-[#4C669A] text-lg mb-6 leading-relaxed">
                Manage courses, upload materials, track student progress, and create engaging learning experiences.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-[#4C669A]">
                  <div className="w-2 h-2 bg-[#D8B4A0] rounded-full"></div>
                  <span>Create & manage courses</span>
                </div>
                <div className="flex items-center gap-3 text-[#4C669A]">
                  <div className="w-2 h-2 bg-[#D8B4A0] rounded-full"></div>
                  <span>Upload educational materials</span>
                </div>
                <div className="flex items-center gap-3 text-[#4C669A]">
                  <div className="w-2 h-2 bg-[#D8B4A0] rounded-full"></div>
                  <span>Monitor student performance</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-[#0f49bd] font-semibold group-hover:text-[#0A2463] transition-colors">
                  Continue as Teacher
                </span>
                <ChevronRight className="text-[#0f49bd] group-hover:translate-x-1 transition-transform" size={24} />
              </div>
            </div>
          </div>

          {/* Student Card */}
          <div
            onClick={() => handleRoleSelect('student')}
            className={`group relative bg-white rounded-3xl p-8 cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
              selectedRole === 'student' ? 'scale-105 ring-4 ring-white' : ''
            } ${isAnimating && selectedRole === 'student' ? 'animate-pulse' : ''}`}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D8B4A0]/10 rounded-bl-full"></div>
            
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-[#D8B4A0] to-[#C09880] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="text-white" size={40} />
              </div>
              
              <h2 className="text-3xl font-bold text-[#0D121B] mb-3">Student</h2>
              <p className="text-[#4C669A] text-lg mb-6 leading-relaxed">
                Access courses, view materials, track your progress, and engage with interactive learning content.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-[#4C669A]">
                  <div className="w-2 h-2 bg-[#0f49bd] rounded-full"></div>
                  <span>Browse available courses</span>
                </div>
                <div className="flex items-center gap-3 text-[#4C669A]">
                  <div className="w-2 h-2 bg-[#0f49bd] rounded-full"></div>
                  <span>Access learning materials</span>
                </div>
                <div className="flex items-center gap-3 text-[#4C669A]">
                  <div className="w-2 h-2 bg-[#0f49bd] rounded-full"></div>
                  <span>Track your learning progress</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-[#D8B4A0] font-semibold group-hover:text-[#C09880] transition-colors">
                  Continue as Student
                </span>
                <ChevronRight className="text-[#D8B4A0] group-hover:translate-x-1 transition-transform" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-white/60 text-sm">
            Need help? <a href="#" className="text-white underline hover:text-white/80">Contact Support</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoleSelectionPage;