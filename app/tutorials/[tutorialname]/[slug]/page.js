import { getTutorialNamesByName, getparamsfortutorial,findNextForTutorial } from "@/lib/articles";
import { getDocBySlug } from "@/lib/docs";
import Markdown from "markdown-to-jsx";
import Link from "next/link";

export default async function Doc(props) {
  const slug = props.params.slug;
  const realSlug = slug.replaceAll(/\%20/g, " ");
  const tutorial = props.params.tutorialname;
  const realTutorial = tutorial.replaceAll(/\%20/g, " ");
  const Article = await getDocBySlug(realSlug, realTutorial);
  const readmore = await getTutorialNamesByName(realTutorial);
  const { nextname, prevname } = await findNextForTutorial(realTutorial,realSlug);

  // console.log(Article)

  return (
    <div className='bg-slate-300 md:p-4 dark:bg-slate-900 flex w-full justify-between flex-col md:flex-row'>
      <article className=' md:min-w-[75%] h-fit prose dark:prose-invert lg:prose-xl font-mono p-2 prose-video:w-full prose-a:text-blue-600 prose-a:no-underline '>
        <div className='min-h-[3rem] mb-10 flex justify-between font-bold w-full'>
          <Link
            className='font-bold align-text-center px-6 py-2 md:py-1 text-slate-300 rounded-lg hover:bg-slate-100 hover:text-slate-900 border-solid border-slate-100 border-2'
            href={`/tutorials/${realTutorial}/${prevname}`}>
            Prev
          </Link>
          <Link
            className='font-bold align-text-center px-6 py-2 md:py-1 text-slate-300 rounded-lg hover:bg-slate-100 hover:text-slate-900 border-solid border-slate-100 border-2'
            href={`/tutorials/${realTutorial}/${nextname}`}>
            Next
          </Link>
        </div>
        <h1 className=''>
          Introduction to the most important topic in this century {realSlug}
        </h1>
        <Markdown>{Article.content}</Markdown>
      </article>
      <aside className='hidden p-2 md:w-[25%] md:flex items-start justify-center pt-5'>
        <div className='w-full h-fit'>
          <div className='pl-8 text-xl font-semibold text-red-500'>
            Read More
          </div>
          <div className="pl-8">
            {
              readmore.map((item) => {    
                return <ul key={item} className='p-4 pl-0 overflow-scroll no-scrollbar'>
                  <h1 className='text-lg font-bold'>{item.category}</h1>
                  {item.data.map((name) => (
                    <li className='text-md my-3 capitalize' key={name}>
                      <Link
                        href={`/tutorials/${realTutorial}/${name.slug}`}
                        className={name.slug == realSlug ? `text-blue-400` : ``}>
                        topic : {name.slug}
                      </Link>
                    </li>
                  ))}
                </ul>;
          })
      }
          </div>
        </div>
      </aside>
    </div>
  );
}




export async function generateStaticParams() {
  const data = await getparamsfortutorial();
  const returnData = data.map((element) => {
    return {
      params: element
    };
  });
  return returnData;
}

export async function generateMetadata({ params }) {
  const slug = params.slug;
  const realSlug = slug.replaceAll(/\%20/g, " ");
  const tutorial = params.tutorialname;
  const realTutorial = tutorial.replaceAll(/\%20/g, " ");
  const Article = await getDocBySlug(realSlug, realTutorial);
  return {
    title: "Complete " + params.tutorialname + "Tutorial"+" : "+params.slug,
    description: Article.meta.description+"Unlock the Power of Learning with Our Comprehensive Tutorial Site! From Beginner to Advanced, we've got you covered in every step of your journey.Take your learning experience to new heights with our user-friendly interface and engaging content. Start your learning adventure today and become a master in no time!",
  };
}
