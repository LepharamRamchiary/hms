import Logo from "../../assets/white logo.png";
import { Linkedin, Github, Twitter, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 w-full">
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-10 pb-8">
        {/* Top section */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-between gap-10 border-b border-gray-700 pb-10">

          {/* Brand block */}
          <div className="w-full sm:w-auto sm:max-w-xs lg:max-w-sm">
            <div className="flex items-center gap-2">
              <img
                alt="logo"
                src={Logo}
                className="h-12 w-12 sm:h-14 sm:w-14 object-contain"
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Our Hospital Management System has been developed following
              industry-standard healthcare practices, ensuring reliable, secure,
              and efficient hospital operations.
            </p>
            {/* App store buttons */}
            <div className="flex flex-wrap items-center gap-2 mt-5">
              <img
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/googlePlayBtnBlack.svg"
                alt="google play"
                className="h-9 w-auto border border-gray-600 rounded hover:border-gray-400 transition"
              />
              <img
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/appleStoreBtnBlack.svg"
                alt="app store"
                className="h-9 w-auto border border-gray-600 rounded hover:border-gray-400 transition"
              />
            </div>
          </div>

          {/* Links block */}
          <div className="flex flex-row flex-wrap gap-10 sm:gap-12 lg:gap-20">
            {/* Company */}
            <div className="min-w-[100px]">
              <h2 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                Company
              </h2>
              <ul className="text-sm space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">Home</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">About us</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">Stories</a>
                </li>
              </ul>
            </div>

            {/* Get in touch */}
            <div className="min-w-[140px]">
              <h2 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                Get in touch
              </h2>
              <div className="text-sm space-y-3 text-gray-400">
                <p>+91 91013 18307</p>
                <p className="break-all">lepharamchiary@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
          {/* Social icons */}
          <div className="flex items-center gap-5">
            <Linkedin size={18} className="hover:text-white transition cursor-pointer" />
            <Github   size={18} className="hover:text-white transition cursor-pointer" />
            <Twitter  size={18} className="hover:text-white transition cursor-pointer" />
            <Instagram size={18} className="hover:text-white transition cursor-pointer" />
            <Facebook size={18} className="hover:text-white transition cursor-pointer" />
          </div>

          {/* Copyright */}
          <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-right">
            Copyright {new Date().getFullYear()} &copy;{" "}
            <a href="/" className="hover:text-white transition">HMS</a>.{" "}
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}