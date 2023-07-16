import { getparamsforblog, nontutorialarticles } from "@/lib/articles";
import { getDocBySlug } from "@/lib/docs";
import Markdown from "markdown-to-jsx";
import Link from "next/link";



export default async function Doc(props) {
  // console.log(props)
  const readmore = await nontutorialarticles();
  const slug = props.params.slug;
    const realSlug = slug.replace(/\%20/, " ");
  const Article = await getDocBySlug(realSlug)
  // const Article= Articles.filter((article) => article.slug == realSlug)[0];
  // console.log(Article);
  return (
    <div className='bg-slate-300 dark:bg-slate-900 flex w-full justify-between flex-col md:flex-row'>
      <article className='md:min-w-[75%] h-fit prose dark:prose-invert lg:prose-xl font-mono prose-a:text-blue-600 prose-video:w-full prose-a:no-underline p-2 md:p-6'>
        <h1 className='text-3xl'>
          Introduction to the most important topic in this century {realSlug}
        </h1>
        <Markdown>{Article.content}</Markdown>
      </article>
      <aside className='hidden mt-10 p-2 md:w-[25%] md:flex items-start justify-center pt-5'>
        <div className='w-full h-fit'>
          <div className='px-8 text-3xl font-semibold text-red-500'>
            Read More
          </div>
          <ul className='h-[400px] p-8 overflow-y-scroll no-scrollbar'>
            {readmore.map((name) => (
              <li className='text-lg my-5 capitalize' key={name}>
                <Link aria-label={name} href={`/blog/${name}`}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
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


