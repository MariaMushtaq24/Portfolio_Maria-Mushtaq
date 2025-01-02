import Link from "next/link";
import "@fontsource/dancing-script/500.css";

export default function Navbar(){
    return(
      <div className="bg-black border-b border-yellow-900 text-white py-4 px-4 sm:px-6 md:px-28 flex flex-col sm:flex-row sm:justify-between items-center">
      <div className="text-lg sm:text-xl font-bold mb-4 sm:mb-0">
      <a href="/" className="font-script text-yellow-600 hover:underline">
      MARIA MUSHTAQ
      </a>
      </div>
      <div className="flex flex-wrap justify-center sm:justify-between space-x-4 sm:space-x-6 md:space-x-10 text-sm sm:text-base font-thin">
            <a href="/AboutMe" className="hover:text-yellow-600 hover:underline">
              About Me
            </a>
            <a href="/Experience" className="hover:text-yellow-600 hover:underline">
              Experience
            </a>
            <a href="/SampleWork" className="hover:text-yellow-600 hover:underline">
              Sample Work
            </a>
            <a href="/Contact" className="hover:text-yellow-600 hover:underline">
              Contact
            </a>
        </div>
        <div className="mt-4 sm:mt-0">
          <a 
            href="/Maria Resume.pdf" 
            download
            className="bg-yellow-800 text-white px-4 py-2 hover:bg-yellow-600 text-sm sm:text-base">
            Download Resume
          </a>
        </div>
            </div>
    );
  };