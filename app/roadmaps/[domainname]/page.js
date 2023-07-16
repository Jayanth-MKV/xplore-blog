import { roadmaps } from "@/data/constants";

import React from 'react'

const page = (props) => {
    const domainname = props.params.domainname;
    const name = domainname.replace(/\%20/, " ");
  return (
    <div>
      
          <>
            <div className='flex text-center flex-col justify-center items-center min-h-[200px]:'>
              <div className='text-3xl'>
                {name}
              </div>
              <div className='text-2xl'>Coming Soon</div>
            </div>
          </>
        
    </div>
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
