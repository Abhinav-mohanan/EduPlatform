import React from 'react'

const HeroSection = () => {
  return (
    <div className="my-10">
      <div 
        className="flex min-h-[480px] flex-col gap-6 rounded-xl bg-cover bg-center bg-no-repeat items-center justify-center p-4 text-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(15, 73, 189, 0.5) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCFjYu9DoID-BlcspLlablVvwOvOtOWkgAM0jOhgRWimT_wPYIm4eAO09-ffpiH6XqS9EQumTEP7hYyMUiWODQEdrm0Rx8VyxBg9gIHBpgzgCoZStlL1C3w_JNIa1zOwQ9H2JPD6hL5mFFTmL-9KQVpj2go3YFdemXuzUcPMKaB2ThloThZ7W3JPwP1dtQ3EePfmKlzQdOZ9giQk6Sq_lMFoLciSQN4Wj4c2AF8U2WxP1xGuxfubTSuxf-3T5_w3_t1rTNdW6XduUE")'
        }}
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Elevate Your Learning Journey
          </h1>
          <h2 className="max-w-2xl text-base font-normal leading-normal text-white/90 sm:text-lg">
            Experience a new era of collaborative and modern education designed for today's college students.
          </h2>
        </div>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#0f49bd] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-opacity">
          <span className="truncate">Explore Courses</span>
        </button>
      </div>
    </div>
  );
};

export default HeroSection