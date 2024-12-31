'use client'; // Ensures this is a client component

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // Import the navigation CSS
import 'swiper/css/autoplay'; // Import the autoplay CSS
import { Navigation, Autoplay } from 'swiper/modules'; // Import Autoplay

const TopInvestor = () => {
  const investors = [
    {
      name: 'John Doe',
      investment: '$150,000',
      growth: '25%',
      organization: 'Tech Innovators Inc.',
      logo: 'https://images.squarespace-cdn.com/content/v1/5ede2122e582b96630a4a73e/1609375192718-I0ZXRLLRWALNQI5S7JWA/Mitsubishi-logo+2021.jpg',
      review: '"Their insights and support have been invaluable to our platform\'s growth and success."',
      rating: 5,
    },
    {
      name: 'Jane Smith',
      investment: '$120,000',
      growth: '18%',
      organization: 'Future Ventures LLC',
      logo: 'https://inkbotdesign.com/wp-content/uploads/2015/07/Chanel-Logo-Design-1024x683.png.webp',
      review: '"A true partner in innovation and excellence."',
      rating: 4,
    },
    {
      name: 'Michael Brown',
      investment: '$95,000',
      growth: '22%',
      organization: 'Global Investments Ltd.',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsLvD_jfgBJk_tUeV3nDYWxnlmWoVj5oimcA&s',
      review: '"Their expertise and vision have been transformative."',
      rating: 4.5,
    },
  ];

  return (
    <section className="bg-gradient-to-r from-white to-blue-50 pt-10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#1a1a1a] mb-12">
          Meet Our <span className="text-[#3a50e0]">Top Investors</span>
        </h2>
        <Swiper
          modules={[Navigation, Autoplay]} // Add Autoplay module
          spaceBetween={40}
          slidesPerView={1}
          grabCursor={true} // Enables grab cursor for better touch UX
          simulateTouch={true} // Allows touch/trackpad swiping
          autoplay={{
            delay: 3000, // Delay between slides in milliseconds
            disableOnInteraction: false, // Keeps autoplay running after user interaction
          }}
          speed={1000} // Transition duration in milliseconds (slower movement)
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
        >
          {investors.map((investor, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row items-center p-6 bg-white shadow-md rounded-lg transform hover:scale-105">
                <div className="flex-shrink-0 mb-4 lg:mb-0 lg:mr-4">
                  <img
                    src={investor.logo}
                    alt={`${investor.organization} logo`}
                    className="w-14 h-14 rounded-full border border-gray-300"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#1a1a1a] mb-1">
                    {investor.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2 font-medium">
                    {investor.organization}
                  </p>
                  <p className="text-base text-gray-600 mb-1">
                    Investment: <span className="text-[#3a50e0] font-bold">{investor.investment}</span>
                  </p>
                  <p className="text-base text-gray-600">
                    Growth: <span className="text-green-500 font-bold">{investor.growth}</span>
                  </p>
                  <div className="flex items-center space-x-1 mt-3">
                    {Array.from({ length: Math.floor(investor.rating) }).map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="gold"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="none"
                        className="w-5 h-5"
                      >
                        <path d="M12 .587l3.668 7.572 8.332 1.21-6.044 5.985 1.428 8.316L12 18.897l-7.384 3.773 1.428-8.316L0 9.369l8.332-1.21L12 .587z" />
                      </svg>
                    ))}
                    {investor.rating % 1 !== 0 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="url(#halfStar)"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="none"
                        className="w-5 h-5"
                      >
                        <defs>
                          <linearGradient id="halfStar">
                            <stop offset="50%" stopColor="gold" />
                            <stop offset="50%" stopColor="lightgray" />
                          </linearGradient>
                        </defs>
                        <path d="M12 .587l3.668 7.572 8.332 1.21-6.044 5.985 1.428 8.316L12 18.897l-7.384 3.773 1.428-8.316L0 9.369l8.332-1.21L12 .587z" />
                      </svg>
                    )}
                  </div>
                  <blockquote className="mt-3 text-sm italic text-gray-700 border-l-4 border-[#3a50e0] pl-3">
                    {investor.review}
                  </blockquote>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TopInvestor;
