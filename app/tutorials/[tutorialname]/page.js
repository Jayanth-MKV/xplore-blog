import {getTutorialNames } from "@/lib/articles";
import { getTutorialData } from "@/lib/docs";

import React from 'react'

const Tutorial = async(props) => {
  let tutorialname = props.params.tutorialname;
  tutorialname=tutorialname.replaceAll(/\%20/g, " ");
  const allArticles = await getTutorialData(tutorialname);
  // console.log(allArticles);

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
                href='/tutorials#iscroll'
                class='ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white'>
                Tutorials
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
                href={`/tutorials/${tutorialname}#iscroll`}
                class='ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white'>
                {tutorialname}
              </a>
            </div>
          </li>
        </ol>
      </nav>

      <div className='capitalize text-center py-5 font-extrabold dark:text-slate-300 text-slate-900 text-2xl md:text-4xl'>
        {tutorialname}
      </div>

      <div class='bg-blue-200 dark:bg-slate-900 flex flex-col gap-4 py-10 items-center justify-center'>
        {allArticles.map((item) => {
          return (
            <div className=' w-full md:w-1/2 h-full mx-auto' key={item}>
              <h1 className='text-xl my-3 font-bold'>{item.category}</h1>
              {item.data.map((data) => {
                return (
                  <>
                    <Articleview data={data} />
                  </>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Tutorial;




const Articleview = ({data}) => {
  return (
    <a
      class='animate__animated animate__zoomIn font-sans rounded-sm w-full grid grid-cols-12 bg-white shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform'
      href={`/tutorials/${data.meta.tutorial}/${data.slug}#iscroll`}>
      <div class='col-span-12 md:col-span-1'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          class='h-8 w-8'
          fill='none'
          viewBox='0 0 24 24'
          stroke='#2563eb'>
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2'
          />
        </svg>
      </div>

      <div className=' col-span-12 md:col-span-10 '>
        <div class='w-full md:mt-5'>
          <p class='capitalize text-blue-600 text-md md:text-xl font-semibold'>
            {data.meta.title}{" "}
          </p>
        </div>

        <div class='w-full mt-3'>
          <p class='text-sm md:text-md text-gray-800 font-light line-clamp-2'>
            {" "}
            {data.meta.description}
          </p>
        </div>
      </div>
    </a>
  ); 
}


export async function generateMetadata({ params }) {
  return {
    title: "Complete " + params.tutorialname,
    description:
      "Unlock the Power of Learning with Our Comprehensive Tutorial Site! From Beginner to Advanced, we've got you covered in every step of your journey. Discover a vast array of tutorials on various subjects that cater to learners of all levels.Embrace the world of knowledge in " +
      params.tutorialname +
      " and skill-building as you explore our well-structured and easy-to-follow tutorials. Take your learning experience to new heights with our user-friendly interface and engaging content. Start your learning adventure today and become a master in no time!",
  };
}



export async function generateStaticParams() {
  const tutorialnames = await getTutorialNames();
  const returnData = tutorialnames.map((val) => {
    return {
      params: {
        tutorialname: val,
      },
    };
  });
  return returnData;
}
