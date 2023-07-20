

"use client"
import { useState } from "react";
import Markdown from "markdown-to-jsx";

export default function Home() {
  
  const [text, settext] = useState("Type Here")
  
  return (
    <div className='min-h-fit h-fit w-screen p-8 flex md:flex-row gap-5 flex-col'>
      <div className='min-h-screen  md:h-fit h-[500px] md:w-1/2'>
        Write Your Markdown Text Here
        <textarea
          name='body'
          className='min-h-[600px] md:min-h-screen w-full  outline-none p-3 border-blue-400 border-solid border-2 '
          onChange={(e) => settext(e.target.value)}
          value={text}
        />
      </div>
      <div className='min-h-screen md:w-1/2'>
        Markdown Preview
        <div
          className=' prose dark:prose-invert lg:prose-xl font-mono prose-a:text-blue-600 prose-a:no-underline border-blue-400 border-solid border-2 p-2'
          style={{ whiteSpace: "pre-wrap" }}>
          <Markdown>{text}</Markdown>
        </div>
      </div>
    </div>
  );
}
