import Image from "next/image";
import Link from "next/link";

export function RoadmapComponent({ name,image }) {
  return (
    <div className='justify-self-center flex flex-col justify-between mt-5 min-w-[250px] w-[60%] rounded-lg  drop-shadow-[0_0px_30px_rgba(32,211,238,0.5)] shadow-[--prim] lg:max-w-sm bg-slate-900'>
      <div
        className='w-full flex justify-center items-center h-48 rounded-full bg-blue-200 dark:bg-slate-900'
        dangerouslySetInnerHTML={{ __html: image }}></div>
      <div className='p-4 md:pb-5'>
        <h4 className='capitalize font-mono mb-5 text-xl font-semibold tracking-tight text-blue-600'>
          {name}
        </h4>
        {/* <p className='mb-2 leading-normal'>
          react tailwind css card with image It is a long established fact that
          a reader will be distracted by the readable content.
        </p> */}
        <Link
          href={`/roadmaps/${name}`}
          className='px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow'
          aria-label={name}>
          Read more
        </Link>
      </div>
    </div>
  );
}
