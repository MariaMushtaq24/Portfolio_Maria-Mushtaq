import React from "react";
import Image from "next/image";
import Link from "next/link";
import "@fontsource/dancing-script/500.css";

export default function Hero(){
    return(
        <section className="bg-black bg-[url('/images/bb1.jpg')] bg-cover bg-center flex flex-col md:flex-row justify-between items-center px-8 sm:py-16 md:py-28 sm:px-12 md:px-28">
      <div className="w-full md:w-3/4 md:text-left text-center mb-8 md:mb-0">
        <h1 className="text-2xl lg:text-4xl font-script font-bold text-yellow-700 mb-8">
          Hello, I'm Maria Mushtaq!
        </h1>
        <p className="text-md lg:text-xl text-gray-200 mb-8">
        I'm a graduate and a passionate freelance writer dedicated to delivering quality work. Alongside my writing, I've been actively developing skills in the IT field to stay ahead of the latest trends and continuously upskill myself.
        Want to know more? Click the button below, and let's connect!
        I'd be delighted to assist you with my expertise.
        </p>

        <Link href= "/AboutMe">
        <button className="bg-yellow-800 w-[165px] text-white py-2 px-6 rounded-[8px] flex items-center gap-[20px] hover:bg-yellow-600 hover:underline mx-auto sm:mx-0">
            <span>About Me</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12h18M15 18l6-6-6-6"
              />
            </svg>
          </button>
          </Link>
      </div>

      <div className="w-full md:w-1/2 px-4">
        <Image
          src="/images/Profile.jpeg"
          alt="Profile"
          width={400}
          height={150}
          className="filter blur-sm shadow-lg rounded-lg"
        />
      </div>
    </section>
  )
};