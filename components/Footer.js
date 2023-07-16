import { roadmaps } from '@/data/constants';
import { getTutorialNames } from '@/lib/articles';
import Link from 'next/link';
import React from 'react'

const Footer = async() => {
const tutorialnames= await  getTutorialNames();
  return (
    <div
      style={{ backgroundImage: 'url("/images/cover.png")' }}
      className=' bg-cover bg-center text-slate-300 p-5 md:p-10 border-solid border-slate-900 border-t-[5px]'>
      <div className='flex flex-col md:flex-row justify-between gap-5'>
        <div className='flex flex-col justify-around md:w-[40%]'>
          <h2 className='text-4xl'>Join Xplore Community</h2>
          <div className='md:w-[80%] hover:text-white hover:py-2 text-center xc-color py-[8px] px-5 md:text-2xl text-lg font-bold rounded-xl border-[3px] border-solid border-[--prim] mt-5'>
            <Link href={"https://discord.gg/9MxVqaeK7e"} target='__blank'>
              Join Us
            </Link>
          </div>
        </div>
        <div className='flex md:w-[50%] flex-col md:flex-row gap-5 justify-around'>
          <div className='flex flex-col'>
            <h1 className='text-xl font-semibold'>Tutorials</h1>
            {tutorialnames.map((name) => (
              <Link key={name} href={`/tutorials/${name}`}>
                <p className='my-2'>{name}</p>
              </Link>
            ))}
          </div>
          <div className='flex flex-col'>
            <h1 className='text-xl font-semibold'>Roadmaps</h1>
            {roadmaps.map((name, i) => (
              <Link key={i} href={`/roadmaps/${name.name}`}>
                <p className='my-2'>{name.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className='mt-5 flex flex-col md:flex-row justify-between'>
        <div className='text-md'>
          © Copyright 2023 with ♥ by Xplore Community
        </div>
        <div className='flex items-center gap-5'>
          <Link href={"https://discord.gg/9MxVqaeK7e"} target='__blank'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='40'
              height='40'
              fill='#5865F2'
              class='bi bi-discord'
              viewBox='0 0 16 16'>
              <path d='M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z' />
            </svg>
          </Link>
          <Link
            href={"https://www.linkedin.com/company/xplore-community/"}
            target='__blank'>
            <svg
              width='40px'
              height='40px'
              viewBox='0 0 32 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <rect x='2' y='2' width='28' height='28' rx='14' fill='#1275B1' />
              <path
                d='M12.6186 9.69215C12.6186 10.6267 11.8085 11.3843 10.8093 11.3843C9.81004 11.3843 9 10.6267 9 9.69215C9 8.7576 9.81004 8 10.8093 8C11.8085 8 12.6186 8.7576 12.6186 9.69215Z'
                fill='white'
              />
              <path
                d='M9.24742 12.6281H12.3402V22H9.24742V12.6281Z'
                fill='white'
              />
              <path
                d='M17.3196 12.6281H14.2268V22H17.3196C17.3196 22 17.3196 19.0496 17.3196 17.2049C17.3196 16.0976 17.6977 14.9855 19.2062 14.9855C20.911 14.9855 20.9008 16.4345 20.8928 17.5571C20.8824 19.0244 20.9072 20.5219 20.9072 22H24V17.0537C23.9738 13.8954 23.1508 12.4401 20.4433 12.4401C18.8354 12.4401 17.8387 13.1701 17.3196 13.8305V12.6281Z'
                fill='white'
              />
            </svg>
          </Link>
          <Link
            href={"https://www.youtube.com/@xplorecommunity"}
            target='__blank'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='40'
              height='40'
              fill='red'
              class='bi bi-youtube'
              viewBox='0 0 16 16'>
              <path d='M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z' />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer
