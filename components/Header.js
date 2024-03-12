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
        id="home"
        style={{ backgroundImage: 'url("/images/cover.png")' }}
        className='z-[995] relative bg-cover bg-center flex md:flex-col items-center justify-between md:p-10 md:pb-[8rem] py-7 px-5'>
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
      <nav className='z-[996] -mt-[6rem] bg-transparent md:inset-x-0 md:flex md:sticky md:top-0 items-center justify-center space-x-4 hidden h-[80px] py-3'>
        {[
          ["Home", "/#home"],
          ["Blog", "/blog#iscroll"],
          ["Tutorials", "/tutorials#iscroll"],
          ["Roadmaps", "/roadmaps#iscroll"],
          ["Author", "/author#iscroll"],
        ].map(([title, url]) => (
          <Link
            key={title}
            href={url}
            className='font-bold px-8 py-2 text-slate-300 rounded-lg hover:bg-slate-100 hover:text-slate-900'>
            {title}
          </Link>
        ))}
      </nav>
      <div className='z-[900] -mt-[6rem]  hidden md:block sticky top-0 bg-slate-900 border-[#3294F8]   dark:bg-slate-500 dark:bg-opacity-50	bg-opacity-50 h-[80px] py-3'>
        <div className='flex justify-between w-full px-5'>
          <Image
            className=' rounded-2xl drop-shadow-[0_0px_50px_rgba(32,211,238,0.5)] shadow-[--prim]'
            src={"/xplore.png"}
            height={"60"}
            width={"60"}
            alt='Xplore Community'
          />
          {/* <div className='z-[997] animate-pulse hover:text-white hover:py-2 my-2 text-center xc-color py-2 px-4 md:text-xl text-lg font-bold rounded-xl border-[2px] border-solid border-[--prim]'>
            <Link href={"https://discord.gg/9MxVqaeK7e"} target='__blank'>
              Join Us
            </Link>
          </div> */}
        </div>
      </div>
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
        <a href='/'>
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
          ["Blog", "/blog#iscroll"],
          ["Tutorials", "/tutorials#iscroll"],
          ["Roadmaps", "/roadmaps#iscroll"],
          ["Author", "/author#iscroll"],
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
