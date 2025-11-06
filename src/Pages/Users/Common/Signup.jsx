import React, { useState } from 'react';
import { Eye, EyeOff, Upload } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const role = localStorage.getItem('role')
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    university: '',
    coursesTaught: '',
    experience: '',
  });

  const handleInputChange = (e) => {
    const { name, value} = e.target;
    setFormData(prev => ({ 
      ...prev, [name]: value 
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign up submitted:', { ...formData, role, file: selectedFile });
    navigate('/login')
  };
  

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#f6f6f8] dark:bg-[#101622]">
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-gray-200 dark:border-b-gray-700 px-4 sm:px-10 py-3 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-4 text-gray-900 dark:text-gray-100">
            <div className="size-6 text-[#0f49bd]">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"/>
              </svg>
            </div>
            <h2 className="text-gray-900 dark:text-gray-100 text-lg font-bold leading-tight tracking-[-0.015em]">EduPlatform</h2>
          </div>
        </header>

        <main className="flex flex-1 justify-center py-5 px-4">
          <div className="layout-content-container flex flex-col w-full max-w-lg">
            <div className="bg-white dark:bg-[#101622]/50 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 sm:p-10">
              <div className="flex flex-col gap-8">
                <h1 className="text-gray-900 dark:text-white text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em]">
                  Create Your Account
                </h1>

                  <div className="flex">
                    <div className="flex h-10 flex-1 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 p-1">
                      <label className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-medium leading-normal transition-all ${role === 'student' ? 'bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                        <span className="truncate">I am a Student</span>
                      </label>
                      <label className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-medium leading-normal transition-all ${role === 'teacher' ? 'bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                        <span className="truncate">I am a Teacher</span>
                      </label>
                    </div>
                  </div>
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-4">
                    <label className="flex flex-col flex-1">
                      <p className="text-gray-900 dark:text-gray-100 text-sm font-medium leading-normal pb-2">Full Name</p>
                      <input 
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-gray-100 focus:outline-0 focus:ring-2 focus:ring-[#0f49bd]/50 border border-gray-300 dark:border-gray-600 bg-[#f6f6f8] dark:bg-gray-800 h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 px-3 text-sm font-normal leading-normal"
                        placeholder="Enter your full name"
                      />
                    </label>

                    <label className="flex flex-col flex-1">
                      <p className="text-gray-900 dark:text-gray-100 text-sm font-medium leading-normal pb-2">Email Address</p>
                      <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-gray-100 focus:outline-0 focus:ring-2 focus:ring-[#0f49bd]/50 border border-gray-300 dark:border-gray-600 bg-[#f6f6f8] dark:bg-gray-800 h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 px-3 text-sm font-normal leading-normal"
                        placeholder="Enter your email address"
                      />
                    </label>

                    <label className="flex flex-col flex-1">
                      <p className="text-gray-900 dark:text-gray-100 text-sm font-medium leading-normal pb-2">Create Password</p>
                      <div className="relative">
                        <input 
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-gray-100 focus:outline-0 focus:ring-2 focus:ring-[#0f49bd]/50 border border-gray-300 dark:border-gray-600 bg-[#f6f6f8] dark:bg-gray-800 h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 px-3 pr-10 text-sm font-normal leading-normal"
                          placeholder="Enter your password"
                        />
                        <button 
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                        >
                          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                      </div>
                    </label>
                  </div>

                  {role === 'teacher' && (
                    <div className="flex flex-col gap-4">
                      <hr className="border-gray-200 dark:border-gray-700"/>
                      
                      <label className="flex flex-col flex-1">
                        <p className="text-gray-900 dark:text-gray-100 text-sm font-medium leading-normal pb-2">University / Institution</p>
                        <input 
                          type="text"
                          name="university"
                          value={formData.university}
                          onChange={handleInputChange}
                          className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-gray-100 focus:outline-0 focus:ring-2 focus:ring-[#0f49bd]/50 border border-gray-300 dark:border-gray-600 bg-[#f6f6f8] dark:bg-gray-800 h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 px-3 text-sm font-normal leading-normal"
                          placeholder="e.g. calicut University"
                        />
                      </label>

                      <label className="flex flex-col flex-1">
                        <p className="text-gray-900 dark:text-gray-100 text-sm font-medium leading-normal pb-2">Courses</p>
                        <input 
                          type="text"
                          name="coursesTaught"
                          value={formData.coursesTaught}
                          onChange={handleInputChange}
                          className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-gray-100 focus:outline-0 focus:ring-2 focus:ring-[#0f49bd]/50 border border-gray-300 dark:border-gray-600 bg-[#f6f6f8] dark:bg-gray-800 h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 px-3 text-sm font-normal leading-normal"
                          placeholder="e.g. Computer Science, History"
                        />
                      </label>

                      <label className="flex flex-col flex-1">
                        <p className="text-gray-900 dark:text-gray-100 text-sm font-medium leading-normal pb-2">Years of Experience</p>
                        <input 
                          type="number"
                          name="experience"
                          min={0}
                          value={formData.experience}
                          onChange={handleInputChange}
                          className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-gray-100 focus:outline-0 focus:ring-2 focus:ring-[#0f49bd]/50 border border-gray-300 dark:border-gray-600 bg-[#f6f6f8] dark:bg-gray-800 h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 px-3 text-sm font-normal leading-normal"
                          placeholder="e.g. 5"
                        />
                      </label>

                      <div className="flex flex-col gap-2">
                        <p className="text-gray-900 dark:text-gray-100 text-sm font-medium leading-normal">Educational Certificates</p>
                        <div className="flex items-center justify-center w-full">
                          <label 
                            htmlFor="dropzone-file"
                            className="flex flex-col items-center justify-center w-full h-28 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-lg cursor-pointer bg-[#f6f6f8] dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          >
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <Upload className="text-gray-500 dark:text-gray-400 mb-2" size={24} />
                              <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                                <span className="font-semibold">Click to upload</span> or drag and drop
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">PDF, PNG, or JPG (MAX. 5MB)</p>
                              {selectedFile && (
                                <p className="mt-2 text-xs text-[#0f49bd] font-medium">{selectedFile.name}</p>
                              )}
                            </div>
                            <input 
                              id="dropzone-file" 
                              type="file"
                              onChange={handleFileChange}
                              className="hidden"
                              accept=".pdf,.png,.jpg,.jpeg"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  )}
                  <button 
                    type="submit"
                    className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-[#0f49bd] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#0f49bd]/90 transition-colors"
                  >
                    <span className="truncate">Create Account</span>
                  </button>

                  {/* Login Link */}
                  <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                    Already have an account? <Link to='/login' className="font-medium text-[#0f49bd] hover:underline">Log In</Link >
                  </p>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SignUpPage;