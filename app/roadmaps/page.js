import React from 'react'
import { RoadmapComponent } from "@/components/RoadmapComponent";
import { roadmaps } from '@/data/constants';

const page = () => {
  const RoadmapCards = () => {
    return roadmaps.map((name) => {
      return (
        <>
          <RoadmapComponent name={name.name} image={name.image} />
        </>
      );
    });
  };
  return (
    <>
      <div className='capitalize text-center py-5 font-extrabold dark:text-slate-300 text-slate-900 text-2xl md:text-4xl'>
        Roadmaps
      </div>
      <div className='grid grid-col-1 gap-4 md:grid-cols-3 py-5 md:p-5 dark:bg-slate-900 bg-blue-200'>
        <RoadmapCards />
      </div>
    </>
  );
}

export default page


export async function generateMetadata() {
return {
  title: "Complete Roadmaps",
  description: `Embark on Your Learning Journey with Our Diverse Roadmaps Page! Explore Roadmaps for Various Domains and Excel in Your Chosen Field. Whether you're a tech enthusiast, a creative mind, or a business enthusiast, we have tailored roadmaps to guide you from novices to experts. Unravel the mysteries of coding with our comprehensive Web Development Roadmap, delve into the world of design with our Graphic Design Roadmap, or conquer the digital landscape with our Digital Marketing Roadmap. Gain in-depth knowledge and hands-on experience through our thoughtfully curated paths, designed to optimize your learning efficiency and success. Get ready to chart your course to excellence with our domain-specific roadmaps, making your learning journey both rewarding and enjoyable!`,
};
}