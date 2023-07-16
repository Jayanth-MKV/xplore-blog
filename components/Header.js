"use client" 
import React from 'react'
import Link from "next/link";
import { Coda } from "next/font/google";
import { useState } from "react";
import Image from 'next/image';


const coda = Coda({
  weight: "400",
  subsets: ["latin"],
});

const Header = () => {
    const [open, setOpen] = useState(false);

  return (
    <>
      <main
        style={{ backgroundImage: 'url("/images/cover.png")' }}
        className='z-[995] relative bg-cover bg-center flex md:flex-col items-center justify-between md:p-20 md:pb-[8rem] py-7 px-5'>
        <MobileNav open={open} setOpen={setOpen} />
        <div>
          <Image
            className='mb-2'
            src={"/images/code-logo.png"}
            width={40}
            height={40}
            alt='Xplore Community'
          />
          <a
            href='/'
            className={`md:mt-5 mt-2 text-xl md:text-3xl uppercase font-extrabold text-[var(--blue-heading)] ${coda.className}`}>
            Xplore Community
          </a>
        </div>
        <div
          className='z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden'
          onClick={() => {
            setOpen(!open);
          }}>
          {/* hamburger button */}
          <span
            className={`h-1 w-full dark:bg-[var(--blue-heading)] bg-[var(--blue-heading)] rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full dark:bg-[var(--blue-heading)] bg-[var(--blue-heading)] rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0 hidden" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full dark:bg-[var(--blue-heading)] bg-[var(--blue-heading)] rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>
      </main>
      <nav className='z-[999] -mt-[6rem] md:inset-x-0 md:flex md:sticky md:top-0 items-center justify-center space-x-4 hidden h-[70px] py-2'>
        {[
          ["Home", "/"],
          ["Blog", "/blog"],
          ["Tutorials", "/tutorials"],
          ["Roadmaps", "/roadmaps"],
          ["Author", "/author"],
        ].map(([title, url]) => (
          <Link
            key={title}
            href={url}
            className='font-bold px-8 py-2 text-slate-300 rounded-lg hover:bg-slate-100 hover:text-slate-900'>
            {title}
          </Link>
        ))}
      </nav>
      <div className='z-[900] -mt-[6rem]  hidden md:block sticky top-0 bg-slate-900 border-[#3294F8] border-2  dark:bg-slate-500 h-[70px] py-2'></div>
    </>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`z-[100] absolute top-0 left-0 h-screen w-screen bg-[var(--headbg)] dark:bg-slate-900 transform ${
        open ? "-translate-x-1/4" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
      <div className='flex items-center justify-end filter dark:bg-[var(--headbg)] drop-shadow-md bg-slate-900 h-[128px] p-5 pr-8'>
        {/*logo container*/}
        <a
          href='/'>
          <Image
            className=''
            src={"/logo.png"}
            width={100}
            height={100}
            alt='Xplore Community'
          />
        </a>
      </div>
      <div className='flex items-end flex-col mt-5 pr-8'>
        {[
          ["Home", "/"],
          ["Blog", "/blog"],
          ["Tutorials", "/tutorials"],
          ["Roadmaps", "/roadmaps"],
          ["Author", "/author"],
        ].map(([title, url]) => (
          <Link
            onClick={() => {
              setOpen(!open);
            }}
            key={title}
            href={url}
            className='font-bold py-2 my-3 text-slate-300  rounded-lg hover:bg-slate-100 transform hover:px-8 hover:translate-x-3 transition-transform duration-300 ease-in-out hover:text-slate-900 '>
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Header
