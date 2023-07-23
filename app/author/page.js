import { tools } from '@/data/constants';
// import Image from 'next/image'
import Link from 'next/link';
import React from 'react'


const page = () => {
  return (
    <>
      <div className='md:w-[80%] min-h-[300px] mx-auto flex md:flex-row flex-col'>
        <div className='md:w-[30%] md:py-10 p-5'>
          <div className='w-full'>
          <img
            className='mx-auto rounded-full drop-shadow-[0_0px_30px_rgba(32,211,238,0.5)] object-cover md:h-[300px] h-[250px] w-[250px] md:w-[300px]'
            height={100}
            width={100}
            alt='Jayanth-MKV'
            src='/author.jpg'
            />
            </div>
        </div>
        <div className='md:w-[70%] flex flex-col gap-10 justify-around md:p-10 p-5 font-mono'>
          <h1 className='text-4xl font-bold'>Jayanth MKV</h1>
          <p className='text-md'>
            As a versatile and experienced developer, I specialize in several
            programming languages including C++, JavaScript, and Python. With a
            strong background in web development and machine learning. Working
            on projects impacting the future of tech. I believe that inventory
            capabilities are gained by hard-work and perseverance.
          </p>
          <div className='flex gap-5'>
            <Link href={"https://www.linkedin.com/in/jayanth-mkv-685609207/"}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='40'
                height='40'
                fill='currentColor'
                class='bi bi-linkedin'
                viewBox='0 0 16 16'>
                <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z' />
              </svg>
            </Link>
            <Link href={"https://twitter.com/jayanthmkv"}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='40'
                height='40'
                fill='currentColor'
                class='bi bi-twitter'
                viewBox='0 0 16 16'>
                <path d='M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z' />
              </svg>
            </Link>
            <Link href={"https://github.com/Jayanth-MKV"}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='40'
                height='40'
                fill='currentColor'
                class='bi bi-github'
                viewBox='0 0 16 16'>
                <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
              </svg>
            </Link>
            <Link
              href={
                "https://stackoverflow.com/users/18834849/jayanth?tab=profile"
              }>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='40'
                height='40'
                fill='currentColor'
                class='bi bi-stack-overflow'
                viewBox='0 0 16 16'>
                <path d='M12.412 14.572V10.29h1.428V16H1v-5.71h1.428v4.282h9.984z' />
                <path d='M3.857 13.145h7.137v-1.428H3.857v1.428zM10.254 0 9.108.852l4.26 5.727 1.146-.852L10.254 0zm-3.54 3.377 5.484 4.567.913-1.097L7.627 2.28l-.914 1.097zM4.922 6.55l6.47 3.013.603-1.294-6.47-3.013-.603 1.294zm-.925 3.344 6.985 1.469.294-1.398-6.985-1.468-.294 1.397z' />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className='md:w-[80%] md:mx-auto  flex flex-col min-h-[400px] mt-10'>
        <div className='flex justify-between '>
          <h2 className='text-3xl w-1/2 md:text-3xl font-bold'>
            Our <span className='xc-color'>Tools</span>
          </h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 overflow-hidden py-10 '>
          {tools.map((tool) => (
            <div
              key={tool.name}
              className='justify-self-center rounded-lg drop-shadow-[0_0px_30px_rgba(32,211,238,0.5)] shadow-[--prim] bg-slate-900 flex p-5 justify-between flex-col h-[300px] w-[250px]'>
              <div className='flex flex-col gap-5'>
                <h1 className='text-3xl font-bold text-[--blue-heading]'>
                  {tool.name}
                </h1>
                <p className='line-clamp-4 text-lg font-medium'>
                  {tool.description}
                </p>
              </div>
              <div className='flex'>
                <Link href={tool.url} target='__blank'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='30'
                    height='30'
                    fill='currentColor'
                    class='bi bi-box-arrow-up-right'
                    viewBox='0 0 16 16'>
                    <path
                      fill-rule='evenodd'
                      d='M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z'
                    />
                    <path
                      fill-rule='evenodd'
                      d='M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z'
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default page

export async function generateMetadata() {
  let s = "";
  tools.forEach(element => {
    s+=((element.name)+" : "+element.description)
  });
  
  return {
    title: "Jayanth MKV - Author:Xplore Community Blog",
    description: `As a versatile and experienced developer, I specialize in several
            programming languages including C++, JavaScript, and Python. With a
            strong background in web development and machine learning. Working
            on projects impacting the future of tech. I believe that inventory
            capabilities are gained by hard-work and perseverance.`+s,
  };
}