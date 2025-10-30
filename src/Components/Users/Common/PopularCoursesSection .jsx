import React from 'react'
import CourseCard from './CourseCard'

const PopularCoursesSection = () => {
  const courses = [
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeBy62S7qlTM1hCjRUdNnm52-_LAo3ak5mbMJpn6wah9f7UVO2IoyAdEt-nQ-y1oUXQKK6RQuVVtxUb1XpXmk1u2nFLax59tYLS2fjXEMyx9wMXZSVeih1X661EsWcs3SYXtYZdyaODycSFxkJt_sT7rkfQnbxjGH3pMauiVJgVmWD9eqqFrpgHPux6-OmdNERaJPvJ9IcMBoXGNlFnRZPUdS2DsImarRbJFBuzE8Ulxlc0d3Pq0V6mHvCBT93vubHW-binoxqyDw",
      title: "Introduction to Quantum Computing",
      instructor: "Dr. Aris Thorne"
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5FwusGaiMj3nvoCaCLb2D-WJZZJqQT0py2ZgOPYxRlJt9LrHlVQsQ4ONwRiw-bo6-xt8eLDk9osUK7HMREqYZkPs_ZN1V9PpEMUoGqDk1O9T1jKiDWwDv8MSTYQd1UugJUjigiTSTOEJYF3fBmAPva7qgS0iFB1koH2ulET27AhzMKN7jORcSAXqaNHLfuya7BgnllwW1nZXATYmmp5isC41Q3V4YY3T6acSXh98iO_uQTwH_VzM5QQ63KfFvvKJlp-GWC82QPgM",
      title: "Digital Marketing Fundamentals",
      instructor: "Prof. Lena Vance"
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5e8K_tC1ZD9zH_CxMgVtwxcF1slvjb-_jxGr2EAJA-0D6hYK9tE_jxIM6kMWwSzR420XZmoLe2CImx3E2jZSNCPO2dSwM0HcnsAZizBR8hBOuQAdlCHE6iF5oboRLuGcGHaIg9RjYDY7CCLUY8dWkYeBNCoA7lMUXUAGP4ZIoV2Z4xHwxzblTZg1351DRBJOKU73KpgMStUtddHn9BgIJb7hLL6tpD918H-RhCl3i1EpZ3sgowCY64lMkINVzn6vsf6ZGZSc_4Pk",
      title: "Advanced Organic Chemistry",
      instructor: "Dr. Marcus Finn"
    }
  ];

  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold leading-tight tracking-tight pb-6 pt-5 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
        Explore Our Popular Courses
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </section>
  );
};

export default PopularCoursesSection 