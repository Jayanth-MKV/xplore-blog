"use client";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ResponsiveCarousel({ items }) {
  return (
    <Carousel
      showArrows={true}
      showIndicators={true}
      infiniteLoop={true}
      dynamicHeight={false}
      showThumbs={false}>
      {items.map((item) => (
        <div key={item.id}>
          <CardComponent name={item.name} image={item.image} />
        </div>
      ))}
    </Carousel>
  );
}

function CardComponent({ name ,image}) {
  return (
    <div className='w-full flex justify-center items-center mb-10 md:w-[70%] md:mx-auto'>
      <div className='mt-5 w-[80%]  md:h-[350px] rounded-lg  drop-shadow-[0_0px_30px_rgba(32,211,238,0.5)] shadow-[--prim] lg:max-w-sm bg-slate-900'>
        <div
          className='w-full flex justify-center items-center h-48 rounded-full bg-blue-200 dark:bg-slate-900'
          dangerouslySetInnerHTML={{ __html: image }}></div>

        <div className='p-4 md:pb-5'>
          <h4 className='uppercase mb-5 text-xl font-semibold tracking-tight text-blue-600'>
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
    </div>
  );
}
