import React from 'react'
import { getTutorialNames } from '@/lib/articles'
import {CardComponent} from "@/components/CardComponent"

const page = async() => {
  const tutorials = await getTutorialNames();

  const TutCards = () => {
    return tutorials.map((name) => {
      return <>
      <CardComponent name={name} />
      </>
    })
  }

  return (
    <div className='md:mt-[8rem] mb-[8rem]'>
      <div className='capitalize text-center py-5 font-extrabold dark:text-slate-300 text-slate-900 text-2xl md:text-4xl'>
        Tutorials
      </div>
      <div className='grid grid-col-1 gap-4 md:grid-cols-3 py-5 md:p-5 bg-blue-2ww00 dark:bg-slate-900'>
        <TutCards />
      </div>
    </div>
  );
}

export default page;