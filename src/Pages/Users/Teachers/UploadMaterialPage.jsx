import React, { useState } from 'react';
import { Upload, CheckCircle, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const UploadMaterialPage = () => {
  const navigate = useNavigate()
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [formData, setFormData] = useState({
    course: 'Introduction to Physics',
    subject: 'Mechanics',
    subtopic: "Newton's Laws",
    title: '',
    description: ''
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setUploadProgress(0);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
      setUploadProgress(0);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpload = () => {
    if (!selectedFile) return;
    
    setIsUploading(true);

    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          setShowSuccessToast(true);
          setTimeout(() => setShowSuccessToast(false), 3000);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#faf8f0] dark:bg-[#101622]">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#cfd7e7] dark:border-[#374151] px-4 sm:px-10 py-3 bg-white dark:bg-[#18202f] shadow-sm">
        <div className="flex items-center gap-4 text-[#333333] dark:text-[#e5e7eb]">
          <div className="size-6 text-[#0f49bd]">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"/>
            </svg>
          </div>
          <h2 className="text-[#333333] dark:text-[#e5e7eb] text-lg font-bold leading-tight tracking-[-0.015em]">CoursePlatform</h2>
        </div>
        
        <div className="hidden md:flex flex-1 justify-center items-center gap-9">
          <Link className="text-[#333333] dark:text-[#e5e7eb]/80 hover:text-[#0f49bd] dark:hover:text-[#0f49bd] text-sm font-medium leading-normal" to='/teacher-dashboard'>Dashboard</Link>
          <a className="text-[#333333] dark:text-[#e5e7eb]/80 hover:text-[#0f49bd] dark:hover:text-[#0f49bd] text-sm font-medium leading-normal" href="#">Courses</a>
          <a className="text-[#0f49bd] dark:text-[#0f49bd] text-sm font-bold leading-normal" href="#">Materials</a>
          <a className="text-[#333333] dark:text-[#e5e7eb]/80 hover:text-[#0f49bd] dark:hover:text-[#0f49bd] text-sm font-medium leading-normal" href="#">Students</a>
          <a className="text-[#333333] dark:text-[#e5e7eb]/80 hover:text-[#0f49bd] dark:hover:text-[#0f49bd] text-sm font-medium leading-normal" href="#">Settings</a>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0f49bd]/10 dark:bg-[#0f49bd]/20 text-[#0f49bd] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#0f49bd]/20 dark:hover:bg-[#0f49bd]/30 transition-colors">
            <span className="truncate">Log Out</span>
          </button>
          <div 
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" 
            style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDlp_9PFTjkouELiNfbsd3RxR3F25vXWR-yd8OY4NUsc9G7DgwS0dUTjoIet17U6r8eKGBFmu6a_gumkHvyx2_YTtvq0NZTMMFY_sbr9YvD1g3iKqtR41HE9aWKySgNYQbXCo5d9ahEfW6d1clUSeQw8-b9pdMCOHqZ-_RZAKhe3-iHXAK5-vKKNQqpDsmrIyzwr0nxa6jyat8tQIEssRbh5t6iN0n1fTXunxfZ25AVDLWbU_UHQlJGDH6Mh2dcZaJboEGfRVjl9eM")'}}
          />
        </div>
      </header>

      <main className="flex flex-1 justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col w-full max-w-4xl flex-1 space-y-8">
          <div className="flex flex-wrap items-center gap-2">
            <Link className="text-[#333333]/70 dark:text-[#e5e7eb]/70 hover:text-[#0f49bd] text-sm font-medium leading-normal" to="/teacher-dashboard">Dashboard</Link>
            <span className="text-[#333333]/50 dark:text-[#e5e7eb]/50 text-sm font-medium leading-normal">/</span>
            <a className="text-[#333333]/70 dark:text-[#e5e7eb]/70 hover:text-[#0f49bd] text-sm font-medium leading-normal" href="#">Course Materials</a>
            <span className="text-[#333333]/50 dark:text-[#e5e7eb]/50 text-sm font-medium leading-normal">/</span>
            <span className="text-[#333333] dark:text-[#e5e7eb] text-sm font-medium leading-normal">Upload New</span>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-[#333333] dark:text-[#e5e7eb] text-4xl font-black leading-tight tracking-tight" style={{fontFamily: 'Lora, serif'}}>
              Upload Course Material
            </h1>
            <p className="text-[#333333]/80 dark:text-[#e5e7eb]/80 text-base font-normal leading-normal">
              Select the course details and choose a file to upload.
            </p>
          </div>

          <div className="bg-white dark:bg-[#18202f] border border-[#cfd7e7] dark:border-[#374151] p-6 sm:p-8 rounded-xl shadow-sm w-full space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <label className="flex flex-col col-span-1">
                <p className="text-[#333333] dark:text-[#e5e7eb] text-sm font-medium leading-normal pb-2">Course</p>
                <select 
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  className="w-full rounded-lg text-[#333333] dark:text-[#e5e7eb] focus:outline-0 focus:ring-2 focus:ring-[#0f49bd]/50 border border-[#cfd7e7] dark:border-[#374151] bg-[#faf8f0] dark:bg-[#101622] h-12 text-base font-normal leading-normal px-4"
                >
                  <option>Introduction to Physics</option>
                  <option>Advanced Calculus</option>
                  <option>History of Art</option>
                </select>
              </label>
              
              <label className="flex flex-col col-span-1">
                <p className="text-[#333333] dark:text-[#e5e7eb] text-sm font-medium leading-normal pb-2">Subject</p>
                <select 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full rounded-lg text-[#333333] dark:text-[#e5e7eb] focus:outline-0 focus:ring-2 focus:ring-[#0f49bd]/50 border border-[#cfd7e7] dark:border-[#374151] bg-[#faf8f0] dark:bg-[#101622] h-12 text-base font-normal leading-normal px-4"
                >
                  <option>Mechanics</option>
                  <option>Thermodynamics</option>
                  <option>Electromagnetism</option>
                </select>
              </label>
              
              <label className="flex flex-col col-span-1">
                <p className="text-[#333333] dark:text-[#e5e7eb] text-sm font-medium leading-normal pb-2">Subtopic</p>
                <select 
                  name="subtopic"
                  value={formData.subtopic}
                  onChange={handleInputChange}
                  className="w-full rounded-lg text-[#333333] dark:text-[#e5e7eb] focus:outline-0 focus:ring-2 focus:ring-[#0f49bd]/50 border border-[#cfd7e7] dark:border-[#374151] bg-[#faf8f0] dark:bg-[#101622] h-12 text-base font-normal leading-normal px-4"
                >
                  <option>Newton's Laws</option>
                  <option>Work and Energy</option>
                  <option>Rotational Motion</option>
                </select>
              </label>
            </div>

            <div className="space-y-2">
              <p className="text-[#333333] dark:text-[#e5e7eb] text-sm font-medium leading-normal">File Upload</p>
              <div className="flex items-center justify-center w-full">
                <label 
                  htmlFor="dropzone-file"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-[#cfd7e7] dark:border-[#374151] border-dashed rounded-lg cursor-pointer bg-[#faf8f0] dark:bg-[#101622] hover:bg-[#faf8f0]/80 dark:hover:bg-[#101622]/80 transition-colors"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-12 h-12 text-[#333333]/50 dark:text-[#e5e7eb]/50 mb-3" />
                    <p className="mb-2 text-sm text-[#333333]/80 dark:text-[#e5e7eb]/80">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-[#333333]/60 dark:text-[#e5e7eb]/60">
                      Supports: PDF, DOCX, MP4, MP3. Max size: 100MB.
                    </p>
                    {selectedFile && (
                      <p className="mt-2 text-sm font-medium text-[#0f49bd]">
                        Selected: {selectedFile.name} ({formatFileSize(selectedFile.size)})
                      </p>
                    )}
                  </div>
                  <input 
                    id="dropzone-file" 
                    type="file" 
                    className="hidden"
                    onChange={handleFileChange}
                    accept=".pdf,.docx,.mp4,.mp3"
                  />
                </label>
              </div>
            </div>

            <div className="space-y-6">
              <label className="flex flex-col w-full">
                <p className="text-[#333333] dark:text-[#e5e7eb] text-sm font-medium leading-normal pb-2">Material Title</p>
                <input 
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full rounded-lg text-[#333333] dark:text-[#e5e7eb] focus:outline-0 focus:ring-2 focus:ring-[#0f49bd]/50 border border-[#cfd7e7] dark:border-[#374151] bg-[#faf8f0] dark:bg-[#101622] h-12 placeholder:text-gray-600 text-base font-normal leading-normal px-4"
                  placeholder="e.g., Lecture 3: Introduction to Thermodynamics"
                />
              </label>
              
              <label className="flex flex-col w-full">
                <div className="flex justify-between items-center pb-2">
                  <p className="text-[#333333] dark:text-[#e5e7eb] text-sm font-medium leading-normal">Description</p>
                  <span className="text-[#333333]/60 dark:text-[#e5e7eb]/60 text-xs">Optional</span>
                </div>
                <textarea 
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full rounded-lg text-[#333333] dark:text-[#e5e7eb] focus:outline-0 focus:ring-2 focus:ring-[#0f49bd]/50 border border-[#cfd7e7] dark:border-[#374151] bg-[#faf8f0] dark:bg-[#101622] placeholder:text-gray-600 text-base font-normal leading-normal p-4 resize-none"
                  placeholder="Add a brief description or notes for the students..."
                  rows="4"
                />
              </label>
            </div>

            {selectedFile && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium text-[#333333] dark:text-[#e5e7eb]">
                    <span>{selectedFile.name}</span>
                    <span>{uploadProgress}%</span>
                  </div>
                  <div className="w-full bg-[#faf8f0] dark:bg-[#101622] rounded-full h-2.5 border border-[#cfd7e7] dark:border-[#374151]">
                    <div 
                      className="bg-[#0f49bd] h-2.5 rounded-full transition-all duration-300" 
                      style={{width: `${uploadProgress}%`}}
                    />
                  </div>
                </div>
                
                <div className="flex justify-end pt-2">
                  <button 
                    onClick={handleUpload}
                    disabled={isUploading || uploadProgress === 100}
                    className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#0f49bd] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#0f49bd]/90 transition-colors disabled:bg-gray-300 disabled:dark:bg-gray-600 disabled:cursor-not-allowed"
                  >
                    <span className="truncate">
                      {uploadProgress === 100 ? 'Uploaded!' : isUploading ? 'Uploading...' : 'Upload Material'}
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {showSuccessToast && (
        <div className="fixed top-5 right-5 flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 dark:bg-[#18202f] animate-in slide-in-from-right">
          <CheckCircle className="text-green-500" size={24} />
          <div className="ps-4 text-sm font-normal text-[#333333] dark:text-[#e5e7eb]">
            Success! Your file has been uploaded.
          </div>
          <button 
            onClick={() => setShowSuccessToast(false)}
            className="ml-auto"
          >
            <X size={16} className="text-gray-400 hover:text-gray-600" />
          </button>
        </div>
      )}
    </div>
  );
};

export default UploadMaterialPage;