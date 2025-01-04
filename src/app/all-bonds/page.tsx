"use client";
import React, { useState } from "react";
import { Header } from "@/components/Header";
import { useWallet } from "@aptos-labs/wallet-adapter-react";

const AllBonds = () => {
  const { connected } = useWallet();
  const [activeTab, setActiveTab] = useState("Active"); // Track the active tab

  return (
    <div>
      <Header />
      {connected ? (
        <div className="max-w-7xl mx-auto p-4 mt-20">
          {/* Image Section */}
          <div className="mt-6 h-48 bg-gray-100 flex items-center justify-center text-gray-500 text-lg">Image</div>

          {/* Sliding Status Buttons */}
          <div className="mt-6 relative w-140 mx-auto">
            <div className="flex justify-between bg-gray-200 rounded-full p-1 relative">
              {/* Slider */}
              <div
                className={`absolute top-0 left-0 w-1/3 h-full bg-blue-500 rounded-full transition-transform duration-300 ease-in-out`}
                style={{
                  transform:
                    activeTab === "Active"
                      ? "translateX(0%)"
                      : activeTab === "Pending"
                        ? "translateX(100%)"
                        : "translateX(200%)",
                }}
              ></div>
              {/* Buttons */}
              <button
                className={`w-1/3 py-2 text-center font-medium z-10 ${activeTab === "Active" ? "text-white" : "text-gray-600"}`}
                onClick={() => setActiveTab("Active")}
              >
                Active
              </button>
              <button
                className={`w-1/3 py-2 text-center font-medium z-10 ${activeTab === "Pending" ? "text-white" : "text-gray-600"}`}
                onClick={() => setActiveTab("Pending")}
              >
                Pending
              </button>
              <button
                className={`w-1/3 py-2 text-center font-medium z-10 ${activeTab === "Resolved" ? "text-white" : "text-gray-600"}`}
                onClick={() => setActiveTab("Resolved")}
              >
                Resolved
              </button>
            </div>
          </div>

          {/* Loan Section */}
          <div className="mt-6 flex justify-between">
            {/* Loan Card 1 */}
            <div className="w-1/2 bg-white border rounded-lg shadow p-4 mr-4">
              <div className="flex justify-between mb-4">
                {/* Small Image Section for Loan 1 */}
                <img
                  src="/images/allbonds.png" // Replace with your actual image paths
                  alt="Loan 1 Image 1"
                  width={140}
                  height={80}
                  className="object-cover rounded-md"
                />
                <img
                  src="/images/allbonds.png" // Replace with your actual image paths
                  alt="Loan 1 Image 1"
                  width={140}
                  height={80}
                  className="object-cover rounded-md"
                />
                <img
                  src="/images/allbonds.png" // Replace with your actual image paths
                  alt="Loan 1 Image 2"
                  width={140}
                  height={80}
                  className="object-cover rounded-md"
                />
              </div>
              <p className="text-sm mb-4">
                <strong>1. Yo-gro</strong> <br />
                Category: Ed-tech <br />
                Required Investment: ₹12 Lakh <br />
                Expected Interest: 10%
              </p>
              <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden mb-2">
                <div className="bg-blue-500 h-full" style={{ width: "38%" }}></div>
              </div>
              <p className="text-sm mb-4">38% fund collected</p>
              <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Apply</button>
            </div>

            {/* Loan Card 2 */}
            <div className="w-1/2 bg-white border rounded-lg shadow p-4 mr-4">
              <div className="flex justify-between mb-4">
                {/* Small Image Section for Loan 2 */}
                <img
                  src="/images/allbonds.png" // Replace with your actual image paths
                  alt="Loan 2 Image 1"
                  width={140}
                  height={80}
                  className="object-cover rounded-md"
                />
                <img
                  src="/images/allbonds.png" // Replace with your actual image paths
                  alt="Loan 2 Image 1"
                  width={140}
                  height={80}
                  className="object-cover rounded-md"
                />
                <img
                  src="/images/allbonds.png" // Replace with your actual image paths
                  alt="Loan 2 Image 2"
                  width={140}
                  height={80}
                  className="object-cover rounded-md"
                />
              </div>
              <p className="text-sm mb-4">
                <strong>2. Edu-pro</strong> <br />
                Category: Agri-tech <br />
                Required Investment: ₹15 Lakh <br />
                Expected Interest: 12%
              </p>
              <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden mb-2">
                <div className="bg-blue-500 h-full" style={{ width: "50%" }}></div>
              </div>
              <p className="text-sm mb-4">50% fund collected</p>
              <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Apply</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center flex-col min-h-screen">
          <div className="text-4xl text-blue-500 font-merriweather-black">To Apply For Loans Connect your wallet</div>
        </div>
      )}
    </div>
  );
};

export default AllBonds;
