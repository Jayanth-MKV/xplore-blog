import { roadmaps } from "@/data/constants";

import React from 'react'

const page = (props) => {
    const domainname = props.params.domainname;
    const name = domainname.replaceAll(/\%20/g, " ");
  return (
    <>
      <nav class='flex' aria-label='Breadcrumb'>
        <ol class='inline-flex items-center space-x-1 md:space-x-3'>
          <li class='inline-flex items-center'>
            <a
              href='/#iscroll'
              class='inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'>
              <svg
                class='w-3 h-3 mr-2.5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 20'>
                <path d='m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z' />
              </svg>
              Home
            </a>
          </li>
          <li>
            <div class='flex items-center'>
              <svg
                class='w-3 h-3 text-gray-400 mx-1'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 6 10'>
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='m1 9 4-4-4-4'
                />
              </svg>
              <a
                href='/roadmaps#iscroll'
                class='ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white'>
                Roadmaps
              </a>
            </div>
          </li>
          <li>
            <div class='flex items-center'>
              <svg
                class='w-3 h-3 text-gray-400 mx-1'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 6 10'>
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='m1 9 4-4-4-4'
                />
              </svg>
              <a
                href={`/roadmaps/${domainname}#iscroll`}
                class='ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white'>
                {name}
              </a>
            </div>
          </li>
        </ol>
      </nav>
      <div className='flex text-center flex-col justify-center items-center min-h-[200px]:'>
        <h1 className='text-3xl'>{name}</h1>
        <div className='text-2xl'>Coming Soon</div>
      </div>
    </>
  );
};

export default page


export async function generateStaticParams() {
  const domainnames = roadmaps;
  const returnData = domainnames.map((val) => {
    return {
      params: {
        domainname: val.name,
      },
    };
  });
  return returnData;
}


export async function generateMetadata({ params }) {
  const dname = params.domainname;
  return {
    title: "Complete " + dname + " Roadmap",
    description:"Embark on Your Learning Journey with Our Diverse Roadmaps Page!  Unravel the mysteries of coding with our comprehensive Web Development Roadmap, delve into the world of design with our " +
      dname +
      " Gain in-depth knowledge and hands-on experience through our thoughtfully curated paths, designed to optimize your learning efficiency and success. Get ready to chart your course to excellence with our domain-specific roadmaps, making your learning journey both rewarding and enjoyable!",
  };
}
