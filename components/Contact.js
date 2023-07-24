"use client"
import { useRef } from "react";
import React from "react"


export default function Contact() {
    const fromref = useRef();
    const mref = useRef();
    const eref = useRef();

  async function handleSubmit(event) {
      event.preventDefault();
      
    const formData = new FormData(event.target);

    // formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
try {
    

//   console.log(process.env.NEXT_PUBLIC_API_ROUTE_SECRET);
  const response = await fetch("/api/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      API_ROUTE_SECRET: process.env.NEXT_PUBLIC_API_ROUTE_SECRET,
    },
    body: json,
  });
      const result = await response.json();
      if (result?.data.status == 200) {
        //   console.log(result);
          fromref.current.reset();
            eref.current.classList.add("hidden");
        mref.current.classList.remove("hidden");
        setInterval(() => {
            mref.current.classList.add("hidden");
        }, 5000);
      }
} catch (error) {
            mref.current.classList.add("hidden");
          eref.current.classList.remove("hidden");
          setInterval(() => {
            eref.current.classList.add("hidden");
          }, 3000);
      }
    }
    

  return (
    <>
      <form
        ref={fromref}
        onSubmit={handleSubmit}
        className='rounded-lg shadow-xl flex flex-col md:pl-0 md:pr-16 py-8 bg-slate-900 dark:px-0 px-5 '>
        <label
          htmlFor='fullname'
          className='text-gray-500 font-light mt-8 dark:text-gray-50'>
          Full name<span className='text-red-500 dark:text-gray-50'>*</span>
        </label>
        <input
          required={true}
          type='text'
          name='fullname'
          className='bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-blue-500 font-light text-gray-500'
        />

        <label
          htmlFor='email'
          className='text-gray-500 font-light mt-4 dark:text-gray-50'>
          E-mail<span className='text-red-500'>*</span>
        </label>
        <input
          required={true}
          type='email'
          name='email'
          className='bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-blue-500 font-light text-gray-500'
        />

        <label
          htmlFor='message'
          className='text-gray-500 font-light mt-4 dark:text-gray-50'>
          Message<span className='text-red-500'>*</span>
        </label>
        <textarea
          name='message'
          className='bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-blue-500 font-light text-gray-500'></textarea>
        <div className='flex flex-row items-center justify-start'>
          <button className='px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center'>
            Send
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              className='text-cyan-500 ml-2'
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z'
                fill='currentColor'
              />
            </svg>
          </button>
        </div>
        <div
          ref={mref}
          className='my-5 hidden text-green-300 font-semibold font-sans text-lg'>
          Data Successfully Sent{" "}
        </div>
        <div
          ref={eref}
          className='my-5 hidden text-red-300 font-semibold font-sans text-lg'>
          Something Went Wrong{" "}
        </div>
      </form>
    </>
  );
}
