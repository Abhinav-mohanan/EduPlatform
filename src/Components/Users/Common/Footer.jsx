import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full border-t border-solid border-[#e7ebf3] bg-white">
      <div className="mx-auto max-w-[960px] px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="size-4">
              <svg className="text-[#0f49bd]" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
              </svg>
            </div>
            <p className="text-sm font-semibold">© 2024 EduPlatform</p>
          </div>
          <div className="flex gap-6 text-sm font-medium text-[#4c669a]">
            <a className="hover:text-[#0f49bd] transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-[#0f49bd] transition-colors" href="#">Contact</a>
            <a className="hover:text-[#0f49bd] transition-colors" href="#">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer