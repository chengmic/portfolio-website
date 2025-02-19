"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Michelle',
                1000, // wait 1s
                'Michelle',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />

          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Computer Science Graduate and Aspiring Software Developer
          </p>
          <div>
            <a href="https://www.linkedin.com/in/chengmic/" target="_blank" rel="noopener noreferrer">
              <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-sky-500 via-blue-500 to-blue-600 hover:bg-slate-200 text-white mr-4">
                LinkedIn
              </button>
            </a>
            <a href="/documents/01_2025_michellecheng.pdf" target="_blank" rel="noopener noreferrer">
              <button className="px-1 py-1 w-full sm:w-fit rounded-full  bg-gradient-to-br from-sky-500 via-blue-500 to-blue-600 hover:bg-slate-800">
                <span className="block bg-[#121212] hover:bg-slate-800 text-white rounded-full px-5 py-2">
                  Resume
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="relative">
            <Image 
              src="/images/portrait.png"
              alt="profile picture"
              className="rounded-full"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection