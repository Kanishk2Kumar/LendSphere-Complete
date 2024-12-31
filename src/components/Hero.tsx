import React from "react";
import Link from "next/link";
import { FlipWords } from "./ui/flip-words";

const Hero: React.FC = () => {
  const words = ["Loans", "Investments", "Stable Bonds"];
  return (
    <section className="relative bg-gradient-to-r from-white to-blue-50 py-16 mt-20 min-h-screen">
      <div className="container mx-auto px-6 md:flex md:items-center md:justify-between mt-16">
        {/* Left Section */}
        <div className="md:w-1/2 pl-10">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight ">
            Transforming <FlipWords words={words} /> <br /> Across the Globe
          </h1>
          <p className="mt-6 mr-20 text-gray-700 text-lg font-serif">
            Our platform connects borrowers and investors in a transparent
            marketplace, enabling easy loan applications and stable bond
            investments. With blockchain technology and crypto-based loyalty
            rewards, we ensure secure transactions and incentivize responsible
            borrowing. Join us to experience a revolutionary financial ecosystem
            for growth and trust!
          </p>
          <button className="mt-10 px-6 py-3 bg-white text-blue-600 rounded-full transition-transform transform hover:scale-105 hover:bg-blue-600 hover:text-white shadow-lg">
            <Link href="/get_started" className="transition-colors">
              Get Started
            </Link>
          </button>
        </div>

        {/* Right Section */}
        <div className="mt-10 md:mt-0 md:w-1/2 relative pl-10">
          <img
            src="/HeroImage.png"
            alt="Hero Image"
            className="hidden md:block"
          />
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-10 text-center flex-col">
        <div className="hero_globe_body_text">
          Trusted by <span>7 countries</span> and counting...
        </div>
        <div className="mt-6 flex justify-center space-x-4">
          <img src="/flags/hongkong.png" alt="Hong Kong" className="w-16 h-10" />
          <img src="/flags/uk.png" alt="UK" className="w-16 h-10" />
          <img src="/flags/japan.png" alt="Japan" className="w-16 h-10" />
          <img src="/flags/india.png" alt="India" className="w-16 h-10" />
          <img src="/flags/usa.png" alt="USA" className="w-16 h-10" />
          <img src="/flags/canada.png" alt="Canada" className="w-16 h-10" />
          <img src="/flags/china.png" alt="China" className="w-16 h-10" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
