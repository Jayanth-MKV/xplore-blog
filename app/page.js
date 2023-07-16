import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArticlePreview } from "@/components/ArticlePreview";
import { getArticlesForBlog } from "@/lib/articles";
import { getTutorialNames } from "@/lib/articles";
import { CardComponent } from "@/components/CardComponent";
import Carousel from "@/components/Carousel";
import RCarousel from "@/components/RoadmapCarousel";
import { roadmaps } from "@/data/constants";
import { RoadmapComponent } from "@/components/RoadmapComponent";
import Contact from "@/components/Contact";
import { tools } from '@/data/constants';

const page = async() => {
  const allArticle = await getArticlesForBlog();
  // console.log(allArticle.slice(0,4));
  const allArticles = allArticle.slice(0, 4).sort((a, b) => {
    return b.meta.blogorder - a.meta.blogorder;
  });

    const articlePreviews = allArticles.map((post) => (
      <ArticlePreview key={post.meta.blogorder} {...post} />
    ));
  
  const tutorials = await getTutorialNames();
  const TutCards = () => {
    const tutorialz = tutorials.slice(0, 3).map((name) => {
        return (
          <>
            <CardComponent name={name} />
          </>
        );
    });
    tutorialz.push(
      <div className='justify-self-center flex flex-col justify-between mt-5 min-w-[200px] w-[60%] rounded-lg text-center  drop-shadow-[0_0px_30px_rgba(32,211,238,0.5)] shadow-[--prim] lg:max-w-sm  bg-slate-900'>
        <div className='h-full flex flex-col items-center justify-center'>
          <Link
            href={`/tutorials`}
            className='px-4 py-10 text-sm text-blue-100 bg-blue-500 rounded-full shadow'>
            View more
          </Link>
        </div>
      </div>
    );
    return tutorialz;
  };

  const RoadmapCards = () => {

    const arr = roadmaps.slice(0, 3).map((name) => {
      return (
        <>
          <RoadmapComponent name={name.name} image={name.image} />
        </>
      );
    });
    arr.push(
      <div className='justify-self-center flex flex-col justify-between mt-5 min-w-[200px] w-[60%] rounded-lg text-center  drop-shadow-[0_0px_30px_rgba(32,211,238,0.5)] shadow-[--prim] lg:max-w-sm  bg-slate-900'>
        <div className='h-full flex flex-col items-center justify-center'>
          <Link
            href={`/roadmaps`}
            className='px-4 py-10 text-sm text-blue-100 bg-blue-500 rounded-full shadow'>
            View more
          </Link>
        </div>
      </div>
    );
    return arr;
  };
  
  return (
    <div className='dark:bg-slate-900 bg-blue-200'>
      <div className='md:w-[90%] md:mx-auto flex flex-col-reverse justify-around md:flex-row min-h-[400px] pt-10'>
        <div className='flex flex-col p-5 md:p-10 md:w-[50%] justify-around space-y-5'>
          <h1 className='text-5xl font-bold'>
            <span class='xc-color'>Explore</span> Your Possibilities, Empower
            Your <span class='xc-color'>Future</span>
          </h1>
          <p className='text-lg font-semibold'>
            A <span className='xc-color'>platform</span> that assists students
            in accessing resources for learning various domains and{" "}
            <span className='xc-color'>connecting</span> with internships and
            job opportunities. This is a{" "}
            <span className='xc-color'>non-profit community</span> provides
            valuable information and support to help students achieve their
            educational and professional goals.
          </p>
          <div className='flex items-center gap-5'>
            <Link href={"https://discord.gg/9MxVqaeK7e"} target='__blank'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='40'
                height='40'
                fill='#5865F2'
                class='bi bi-discord'
                viewBox='0 0 16 16'>
                <path d='M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z' />
              </svg>
            </Link>
            <Link
              href={"https://www.linkedin.com/company/xplore-community/"}
              target='__blank'>
              <svg
                width='40px'
                height='40px'
                viewBox='0 0 32 32'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <rect
                  x='2'
                  y='2'
                  width='28'
                  height='28'
                  rx='14'
                  fill='#1275B1'
                />
                <path
                  d='M12.6186 9.69215C12.6186 10.6267 11.8085 11.3843 10.8093 11.3843C9.81004 11.3843 9 10.6267 9 9.69215C9 8.7576 9.81004 8 10.8093 8C11.8085 8 12.6186 8.7576 12.6186 9.69215Z'
                  fill='white'
                />
                <path
                  d='M9.24742 12.6281H12.3402V22H9.24742V12.6281Z'
                  fill='white'
                />
                <path
                  d='M17.3196 12.6281H14.2268V22H17.3196C17.3196 22 17.3196 19.0496 17.3196 17.2049C17.3196 16.0976 17.6977 14.9855 19.2062 14.9855C20.911 14.9855 20.9008 16.4345 20.8928 17.5571C20.8824 19.0244 20.9072 20.5219 20.9072 22H24V17.0537C23.9738 13.8954 23.1508 12.4401 20.4433 12.4401C18.8354 12.4401 17.8387 13.1701 17.3196 13.8305V12.6281Z'
                  fill='white'
                />
              </svg>
            </Link>
            <Link
              href={"https://www.youtube.com/@xplorecommunity"}
              target='__blank'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='40'
                height='40'
                fill='red'
                class='bi bi-youtube'
                viewBox='0 0 16 16'>
                <path d='M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z' />
              </svg>
            </Link>
          </div>
        </div>
        <div className='flex justify-around flex-col p-5 md:p-10 md:w-[40%] items-center '>
          <Image
            className='rounded-2xl drop-shadow-[0_0px_50px_rgba(32,211,238,0.5)] shadow-[--prim]'
            src={"/xplore.png"}
            height={"300"}
            width={"300"}
            alt='Xplore Community'
          />
          <div className=' hover:text-white hover:py-2 text-center xc-color py-[8px] px-5 md:text-2xl text-lg font-bold rounded-xl border-[3px] border-solid border-[--prim] mt-5'>
            <Link href={"https://discord.gg/9MxVqaeK7e"} target='__blank'>
              Join Us
            </Link>
          </div>
        </div>
      </div>
      <div className='md:w-[90%] md:mx-auto  flex p-3 md:p-[3rem] flex-col min-h-[400px] mt-10'>
        <div className='flex justify-between '>
          <h2 className='text-3xl w-1/2 md:text-3xl font-bold'>
            Featured <span className='xc-color'>Articles</span>
          </h2>
          <div className='flex w-1/2 items-center gap-3 justify-end md:min-w-[200px]'>
            <p className='text-sm'>View All Articles</p>
            <Link href={"/blog"}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='35'
                height='35'
                fill='#51DCF2'
                class='bi bi-arrow-right-circle'
                viewBox='0 0 16 16'>
                <path
                  fill-rule='evenodd'
                  d='M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z'
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-5 overflow-hidden py-10 '>
          {articlePreviews}
        </div>
      </div>
      <div className='md:w-[90%] md:mx-auto  flex p-3 md:p-[3rem] flex-col min-h-[400px] mt-10'>
        <div className='flex justify-between'>
          <h2 className='text-3xl w-1/2 md:text-3xl font-bold'>
            Popular <span className='xc-color'>Tutorials</span>
          </h2>
          <div className='flex w-1/2 items-center gap-3 justify-end md:min-w-[200px]'>
            <p className='text-sm'>View All Tutorials</p>
            <Link href={"/tutorials"}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='35'
                height='35'
                fill='#51DCF2'
                class='bi bi-arrow-right-circle'
                viewBox='0 0 16 16'>
                <path
                  fill-rule='evenodd'
                  d='M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z'
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className='md:hidden pt-5'>
          <Carousel items={tutorials} />
        </div>
        <div className='hidden md:grid grid-cols-4 justify-between overflow-hidden py-10'>
          <TutCards />
        </div>
      </div>
      <div className='md:w-[90%] md:mx-auto  flex p-3 md:p-[3rem] flex-col min-h-[400px] mt-10'>
        <div className='flex justify-between'>
          <h2 className='text-3xl w-1/2 md:text-3xl font-bold'>
            Get Your <span className='xc-color'>RoadMaps</span>
          </h2>
          <div className='flex w-1/2 items-center gap-3 justify-end md:min-w-[200px]'>
            <p className='text-sm'>View All RoadMaps</p>
            <Link href={"/roadmaps"}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='35'
                height='35'
                fill='#51DCF2'
                class='bi bi-arrow-right-circle'
                viewBox='0 0 16 16'>
                <path
                  fill-rule='evenodd'
                  d='M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z'
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className='md:hidden pt-5'>
          <RCarousel items={roadmaps} />
        </div>
        <div className='hidden md:grid grid-cols-4 overflow-hidden py-10'>
          <RoadmapCards />
        </div>
      </div>
      <div className='md:w-[90%] md:mx-auto  flex p-3 md:p-[3rem] flex-col-reverse md:flex-row min-h-[400px] mt-10'>
        <div className='flex flex-col justify-start md:w-2/5'>
          <h2 className='text-3xl w-1/2 md:text-3xl font-bold'>
            Contact<span className='xc-color'> Us</span>
          </h2>
          <div className='pt-5'>
            <Contact />
          </div>
        </div>
        <div className='flex flex-col justify-start md:w-3/5'>
          <h2 className='text-3xl w-1/2 md:text-3xl font-bold'>
            About<span className='xc-color'> Us</span>
          </h2>
          <div className='pt-5 p-10 flex h-max flex-col gap-10'>
            <div>
              <h1 className='text-2xl font-bold xc-color'>Moto:</h1>
              <h1 className='text-2xl font-bold '>
                Explore Your Possibilities, Empower Your Future
              </h1>
            </div>
            <div className="flex justify-between">
            <h1 className='text-2xl font-bold xc-color'>Our tools</h1>
              <Link href="/author" className="font-bold border-solid border-2 border-blue-400 p-3">View More</Link>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 overflow-hidden p-5 '>
              {tools.slice(0,2).map((tool) => (
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
