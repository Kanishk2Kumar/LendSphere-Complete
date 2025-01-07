"use client";

import React, { useState, useEffect } from "react";
import { FaUpload } from "react-icons/fa";

export default function LoanApplicationPage() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2 bg-gray-50">
      {/* Left Section */}
      <div className="flex flex-col gap-6 p-8 md:p-12">
        <div className="flex justify-center gap-4 md:justify-start">
          {/* Placeholder for additional content */}
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-900 text-center mb-6">
              Apply for a Loan
            </h2>
            <LoanApplicationForm />
          </div>
        </div>
      </div>

      {/* Right Section with ImageSlider */}
      <div className="relative hidden bg-blue-100 lg:block">
        <ImageSlider />
      </div>
    </div>
  );
}

function ImageSlider() {
  const images = ["/images/Loan1.jpeg", "/images/Loan2.jpeg"];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, [images.length]);

  return (
    <img
      src={images[currentImage]}
      alt="Loan Background"
      className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000"
    />
  );
}

function LoanApplicationForm() {
  const [image, setImage] = useState<File | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) setImage(file);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {/* Loan Title */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Loan Title
        </label>
        <input
          type="text"
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          placeholder="Enter a title for the loan"
        />
      </div>

      {/* Reason for Loan */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Reason for Loan
        </label>
        <textarea
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          placeholder="Explain why you need this loan"
          rows={4}
        />
      </div>

      {/* Wallet Public Address */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Wallet Public Address
        </label>
        <input
          type="text"
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          placeholder="Enter your public wallet address"
        />
      </div>

      {/* Requested Amount */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Requested Amount
        </label>
        <input
          type="number"
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          placeholder="Enter the requested loan amount"
        />
      </div>

      {/* Collection Deadline */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Collection Deadline
        </label>
        <input
          type="date"
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
      </div>

      {/* Interest Rate */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Interest Rate (%)
        </label>
        <input
          type="number"
          step="0.01"
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          placeholder="Enter the interest rate"
        />
      </div>

      {/* Loan Span */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Loan Span (in months)
        </label>
        <input
          type="number"
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          placeholder="Enter the loan span (e.g., 12 for 1 year)"
        />
      </div>

      {/* Return Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Return Type
        </label>
        <select
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        >
          <option value="advance">All Money in Advance</option>
          <option value="emi">EMI</option>
        </select>
      </div>

      {/* Upload Image */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Upload Supporting Image
        </label>
        <div className="relative flex items-center">
          <label
            htmlFor="file-upload"
            className="flex items-center justify-center w-50 bg-gray-900 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-gray-800 transition"
          >
            <FaUpload className="mr-2" /> Choose File
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </div>
        <p className="mt-2 text-sm text-gray-500">Image (Max: 4MB)</p>
        {image && (
          <p className="mt-2 text-sm text-gray-500">Uploaded: {image.name}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition"
      >
        Submit Loan Application
      </button>
    </form>
  );
}
