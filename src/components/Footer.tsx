import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-50 to-purple-100 text-purple-800 py-10 mt-20">
      <div className="container mx-auto px-4">
        {/* Logo and Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 border-b border-purple-200 pb-8">
          {/* Logo */}
          <div className="flex flex-col">
            <a href="/" className="mb-4">
              <img
                src="/Logo-BG.png"
                alt="LendSphere"
                className="h-24"
              />
            </a>
          </div>

          <div className=" pl-10">
            <h4 className="text-purple-900 font-semibold text-lg mb-4 font-merriweather-black">About</h4>
            <ul className="space-y-3 text-base">
              <li>
                <a href="/about" className="hover:text-purple-600">
                  About LendSphere
                </a>
              </li>
              <li>
                <a href="/team" className="hover:text-purple-600">
                  Our Team
                </a>
              </li>
              <li>
                <a href="/impact" className="hover:text-purple-600">
                  Our Impact
                </a>
              </li>
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="text-purple-900 font-semibold text-lg mb-4 font-merriweather-black">Products</h4>
            <ul className="space-y-3 text-base">
              <li>
                <a href="/loan-requests" className="hover:text-purple-600">
                  Loan Requests
                </a>
              </li>
              <li>
                <a href="/donations" className="hover:text-purple-600">
                  Donations
                </a>
              </li>
              <li>
                <a href="/staking" className="hover:text-purple-600">
                  Staking Rewards
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-purple-900 font-semibold text-lg mb-4 font-merriweather-black">Legal</h4>
            <ul className="space-y-3 text-base">
              <li>
                <a href="/privacy-policy" className="hover:text-purple-600">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-purple-600">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="/cookie-policy" className="hover:text-purple-600">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h4 className="text-purple-900 font-semibold text-lg mb-4 font-merriweather-black">Contact Us</h4>
            <ul className="space-y-3 text-base">
              <li>
                <a href="/support" className="hover:text-purple-600">
                  24/7 Support
                </a>
              </li>
              <li>
                <a href="/enquiries" className="hover:text-purple-600">
                  General Enquiries
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@lendsphere.com"
                  className="hover:text-purple-600"
                >
                  support@lendsphere.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <p className="text-base text-purple-600  font-merriweather-black">
            Copyright © 2024 LendSphere. All Rights Reserved.
          </p>
          <div className="flex space-x-5 mt-4 md:mt-0">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img
                src="/icons/LinkedIn.svg"
                alt="LinkedIn"
                className="h-8"
              />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <img
                src="/icons/GitHub.svg"
                alt="GitHub"
                className="h-8"
              />
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
