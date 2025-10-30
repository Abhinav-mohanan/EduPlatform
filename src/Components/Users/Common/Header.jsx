import React from 'react'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-solid border-[#e7ebf3] bg-[#f6f6f8]/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[960px] items-center justify-between whitespace-nowrap px-4 py-3">
        <div className="flex items-center gap-4 text-[#0f49bd]">
          <div className="size-6">
            <svg className="text-[#0f49bd]" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-xl font-bold tracking-tight text-[#0d121b]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            EduPlatform
          </h2>
        </div>
        <nav className="hidden items-center gap-9 md:flex">
          <a className="text-sm font-medium text-[#0d121b] hover:text-[#0f49bd] transition-colors" href="#">
            Courses
          </a>
          <a className="text-sm font-medium text-[#0d121b] hover:text-[#0f49bd] transition-colors" href="#">
            About Us
          </a>
          <a className="text-sm font-medium text-[#0d121b] hover:text-[#0f49bd] transition-colors" href="#">
            Contact us
          </a>
        </nav>
        <div className="flex gap-2">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#e7ebf3] text-[#0d121b] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#0f49bd]/10 transition-colors">
            <span className="truncate">Log In</span>
          </button>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0f49bd] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-opacity">
            <span className="truncate">Sign Up</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header