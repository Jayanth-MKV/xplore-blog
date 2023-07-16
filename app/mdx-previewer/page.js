

"use client"
import { useState } from "react";
import Markdown from "markdown-to-jsx";

export default function Home() {
  
  const [text, settext] = useState("Wow I am so cool \n I'm a JavaScript haiku \n render my newlines")
  
  return (
    <div className='h-screen w-screen p-8 flex'>
      <textarea
        name='body'
        className="h-full w-1/2"
        onChange={(e)=>settext(e.target.value)}
        value={text}
      />
      <div className='h-full w-1/2 prose dark:prose-invert lg:prose-xl font-mono prose-a:text-blue-600 prose-a:no-underline p-2'  style={{ whiteSpace: "pre-wrap" }}>
        <Markdown>
        {text}
        </Markdown>
      </div>
    </div>
  );
}
