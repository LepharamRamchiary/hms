import React from "react";
import Logo from "../../assets/hms-logo1.png";
import { Linkedin , Github , Twitter , Instagram, Facebook} from 'lucide-react';


export function Footer() {
  return (
    <footer className="px-6 bg-gray-950 pt-8 md:px-16 lg:px-36 w-full text-gray-300">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-10">
        <div className="md:max-w-96">
          <div className="flex gap-1 items-center">
            <img
            alt="logo"
            className="h-11 text-white"
            src={Logo}
          />
          <p>HMS</p>
          </div>
          <p className="mt-6 text-sm">
            Our Hospital Management System has been developed following
            industry-standard healthcare practices, ensuring reliable, secure,
            and efficient hospital operations.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/googlePlayBtnBlack.svg"
              alt="google play"
              className="h-10 w-auto border border-white rounded"
            />
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/appleStoreBtnBlack.svg"
              alt="app store"
              className="h-10 w-auto border border-white rounded"
            />
          </div>
        </div>
        <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
          <div>
            <h2 className="font-semibold mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Stories</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+91 91013 18307</p>
              <p>lepharamchiary@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-6 pt-4">
        <Linkedin className="hover:text-gray-400 transition cursor-pointer"/>
        <Github className="hover:text-gray-400 transition cursor-pointer"/>
        <Twitter className="hover:text-gray-400 transition cursor-pointer"/>
        <Instagram className="hover:text-gray-400 transition cursor-pointer"/>
        <Facebook className="hover:text-gray-400 transition cursor-pointer"/>
      </div>
      <p className="pt-4 text-center text-sm pb-5 flex-wrap">
        Copyright {new Date().getFullYear()} ©{" "}
        <a href="/">HMS</a>. All Right Reserved.
      </p>
    </footer>
  );
}
