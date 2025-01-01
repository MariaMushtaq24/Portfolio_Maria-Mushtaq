import Link from "next/link";

export default function Navbar(){
    return(
      <div className="bg-black border-b-2 border-blue-700 text-white py-4 px-4 sm:px-6 md:px-28 flex flex-col sm:flex-row sm:justify-between items-center">
      <div className="text-lg sm:text-xl font-bold mb-4 sm:mb-0">
      <a href="/" className="hover:text-blue-700 transition duration-300">
      MARIA MUSHTAQ
      </a>
      </div>
      <div className="flex flex-wrap justify-center sm:justify-between space-x-4 sm:space-x-6 md:space-x-10 text-sm sm:text-base font-thin">
            <a href="/AboutMe" className="hover:text-blue-700 hover:underline">
              About Me
            </a>
            <a href="/Experience" className="hover:text-blue-700 hover:underline">
              Experience
            </a>
            <a href="/SampleWork" className="hover:text-blue-700 hover:underline">
              Sample Work
            </a>
            <a href="/Contact" className="hover:text-blue-700 hover:underline">
              Contact
            </a>
        </div>
        <div className="mt-4 sm:mt-0">
          <a 
            href="/Maria Resume.pdf" 
            download
            className="bg-blue-700 text-white px-4 py-2 hover:bg-blue-500 text-sm sm:text-base">
            Download Resume
          </a>
        </div>
            </div>
    );
  };