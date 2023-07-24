import { getparamsforblog, nontutorialarticles,findNext } from "@/lib/articles";
import { getDocBySlug } from "@/lib/docs";
import Markdown from "markdown-to-jsx";
import Link from "next/link";

export default async function Doc(props) {
  // console.log(props)
  const slug = props.params.slug;
  const realSlug = slug.replaceAll(/\%20/g, " ");
  const readmore = await nontutorialarticles();
  const { nextname, prevname } = await findNext(readmore, realSlug);
  const Article = await getDocBySlug(realSlug);
  // const Article= Articles.filter((article) => article.slug == realSlug)[0];
  // console.log(Article);
  return (
    <>
      <div className='min-h-[3rem] mb-10 flex justify-between font-bold w-full'>
        <Link
          className='font-bold align-text-center px-6 py-2 md:py-2 dark:text-slate-300 rounded-lg hover:bg-slate-100 hover:text-slate-900 border-solid border-slate-900 dark:border-slate-100 border-2'
          href={`/blog/${prevname}`}>
          Prev
        </Link>
        <Link
          className='font-bold align-text-center px-6 py-2 md:py-2 dark:text-slate-300 rounded-lg hover:bg-slate-100 hover:text-slate-900 border-solid border-slate-900 dark:border-slate-100 border-2'
          href={`/blog/${nextname}`}>
          Next
        </Link>
      </div>
      <nav class='flex mb-10' aria-label='Breadcrumb'>
        <ol class='inline-flex items-center space-x-1 md:space-x-3'>
          <li class='inline-flex items-center'>
            <a
              href='/#iscroll'
              class='inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'>
              <svg
                class='w-3 h-3 mr-2.5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 20'>
                <path d='m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z' />
              </svg>
              Home
            </a>
          </li>
          <li>
            <div class='flex items-center'>
              <svg
                class='w-3 h-3 text-gray-400 mx-1'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 6 10'>
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='m1 9 4-4-4-4'
                />
              </svg>
              <a
                href='/blog#iscroll'
                class='ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white'>
                Blog
              </a>
            </div>
          </li>
          <li>
            <div class='flex items-center'>
              <svg
                class='w-3 h-3 text-gray-400 mx-1'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 6 10'>
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='m1 9 4-4-4-4'
                />
              </svg>
              <a
                href={`/blog/${realSlug}#iscroll`}
                class='ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white'>
                {realSlug}
              </a>
            </div>
          </li>
        </ol>
      </nav>
      <div className='bg-slate-300 dark:bg-slate-900 flex w-full justify-between flex-col md:flex-row'>
        <article className='md:min-w-[75%] h-fit prose dark:prose-invert md:prose-md font-mono prose-a:text-blue-600 prose-video:w-full prose-a:no-underline p-2 md:p-6'>
          <h1 className=' text-amber-500 animate__animated animate__zoomIn'>
            {realSlug}
          </h1>
          <Markdown>{Article.content}</Markdown>
        </article>
        <aside className='hidden p-2 md:w-[25%] md:flex items-start justify-center pt-5'>
          <div className='w-full h-fit'>
            <div className='pl-8 text-xl font-semibold text-red-500'>
              Read More
            </div>
            <ul className='h-[400px] p-8 overflow-y-scroll no-scrollbar'>
              {readmore.map((name) => (
                <li className='text-md my-3 capitalize' key={name}>
                  <Link
                    className={name == realSlug ? `text-blue-400` : ``}
                    aria-label={name}
                    href={`/blog/${name}`}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
      <div className='min-h-[3rem] mt-10 flex justify-between font-bold w-full'>
        <Link
          className='font-bold align-text-center px-6 py-2 md:py-2 dark:text-slate-300 rounded-lg hover:bg-slate-100 hover:text-slate-900 border-solid border-slate-900 dark:border-slate-100 border-2'
          href={`/blog/${prevname}`}>
          Prev
        </Link>
        <Link
          className='font-bold align-text-center px-6 py-2 md:py-2 dark:text-slate-300 rounded-lg hover:bg-slate-100 hover:text-slate-900 border-solid border-slate-900 dark:border-slate-100 border-2'
          href={`/blog/${nextname}`}>
          Next
        </Link>
      </div>
    </>
  );
}


export async function generateStaticParams() {
  const params = await getparamsforblog();
  // console.log(params)
  return params.map((param) => {
      return {
        params: param
      };
    })
  
}


export async function generateMetadata({ params }) {
  const slug = params.slug;
const realSlug = slug.replace(/\%20/, " ");
const Article = await getDocBySlug(realSlug);
  return {
    title: "Article On " + slug ,
    description:
      Article.meta.description +
      "Unlock the Power of Learning with Our Comprehensive Tutorial Site! From Beginner to Advanced, we've got you covered in every step of your journey.Take your learning experience to new heights with our user-friendly interface and engaging content. Start your learning adventure today and become a master in no time!",
  };
}


