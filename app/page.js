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
    return b.date - a.date;
  });

    const articlePreviews = allArticles.map((post) => (
      <ArticlePreview key={post.date} {...post} />
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
      <div className='justify-self-center flex flex-col justify-between mt-5 min-w-[200px] w-[60%] rounded-lg text-center  drop-shadow-[0_0px_30px_rgba(32,211,238,0.5)] shadow-[--prim] lg:max-w-sm  bg-slate-900 hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform'>
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
      <div className='justify-self-center flex flex-col justify-between mt-5 min-w-[200px] w-[60%] rounded-lg text-center  drop-shadow-[0_0px_30px_rgba(32,211,238,0.5)] shadow-[--prim] lg:max-w-sm  bg-slate-900 hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform'>
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
      <div className='md:w-[90%] md:mx-auto flex flex-col-reverse justify-between md:flex-row min-h-[400px] pt-10'>
        <div className='flex flex-col p-5 md:p-[3rem] md:w-[50%] justify-between space-y-5 animate__animated animate__jackInTheBox animate__slow'>
          <h1 className='text-3xl md:text-5xl font-bold'>
            <span class='xc-color'>Explore</span> Your Possibilities, Empower
            Your <span class='xc-color'>Future</span>
          </h1>
          <p className='text-md md:text-lg font-semibold '>
            A <span className='xc-color'>platform</span> that assists students
            in accessing resources for learning various domains and{" "}
            <span className='xc-color'>connecting</span> with internships and
            job opportunities. This is a{" "}
            <span className='xc-color'>non-profit community</span> provides
            valuable information and support to help students achieve their
            educational and professional goals.
          </p>
          <div className='flex items-center gap-5'>
            <Link
              href={"https://www.instagram.com/xplorecommunityblog/"}
              target='__blank'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='40'
                height='40'
                fill='#E4405F'
                class='bi bi-instagram'
                viewBox='0 0 16 16'>
                <path d='M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z' />
              </svg>
            </Link>
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
                xmlns='http://www.w3.org/2000/svg'
                width='40'
                height='40'
                fill='#0E76AB'
                class='bi bi-linkedin'
                viewBox='0 0 16 16'>
                <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z' />
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
        <div className='flex justify-end flex-col p-5 md:p-[3rem] md:w-[40%] items-center '>
          <Image
            className='animate-pulse animate__slow animate__animated animate__jackInTheBox rounded-2xl drop-shadow-[0_0px_50px_rgba(32,211,238,0.5)] shadow-[--prim] hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform'
            src={"/xplore.png"}
            height={"300"}
            width={"300"}
            alt='Xplore Community'
          />
          <div className='animate__animated animate__pulse font-mono hover:text-white hover:py-2 text-center xc-color py-[8px] px-5 md:text-2xl text-lg font-bold rounded-xl border-[3px] border-solid border-[--prim] mt-5'>
            <Link href={"https://discord.gg/9MxVqaeK7e"} target='__blank'>
              Join Us
            </Link>
          </div>
        </div>
      </div>
      <div className='animate__animated animate__slideInUp md:w-[90%] md:mx-auto flex p-3 px-5 md:p-[3rem] flex-col min-h-[400px] mt-10'>
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
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 overflow-hidden py-10 '>
          {articlePreviews}
        </div>
      </div>
      <div className='md:w-[90%] md:mx-auto  flex p-3 px-5 md:p-[3rem] flex-col min-h-[400px] mt-10'>
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
      <div className='md:w-[90%] md:mx-auto  flex p-3 px-5 md:p-[3rem] flex-col min-h-[400px] mt-10'>
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
      <div className='md:w-[90%] md:mx-auto  flex p-3 px-5 md:p-[3rem] flex-col-reverse md:flex-row min-h-[400px] mt-10'>
        <div className='flex flex-col justify-start md:w-2/5'>
          <h2 className='text-3xl w-1/2 md:text-3xl font-bold'>
            Contact<span className='xc-color'> Us</span>
          </h2>
          <div className='pt-10'>
            <Contact />
          </div>
        </div>
        <div className='flex flex-col justify-start md:w-3/5'>
          <h2 className='text-3xl w-1/2 md:pl-10 md:pb-10 md:text-3xl font-bold'>
            About<span className='xc-color'> Us</span>
          </h2>
          <div className='py-10 md:pl-10 flex h-max flex-col gap-10'>
            <div>
              <h1 className='text-2xl font-bold xc-color'>Moto:</h1>
              <h1 className='text-2xl font-bold '>
                Explore Your Possibilities, Empower Your Future
              </h1>
            </div>
            <div className='flex justify-between'>
              <h1 className='text-2xl font-bold xc-color'>Our tools</h1>
              <Link
                href='/author'
                className='font-bold border-solid border-2 border-blue-400 p-3'>
                View More
              </Link>
            </div>
            <div className='md:px-10 pt-5'>
              <RCarousel items={tools} />
            </div>
            {/* <div className='hidden md:grid grid-cols-1 md:grid-cols-2 gap-3 overflow-hidden p-5 '>
              {tools.slice(0, 2).map((tool) => (
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
