import { getTutorialNamesByName, getparamsfortutorial } from "@/lib/articles";
import { getDocBySlug } from "@/lib/docs";
import Markdown from "markdown-to-jsx";
import Link from "next/link";

export default async function Doc(props) {
  const slug = props.params.slug;
  const realSlug = slug.replace(/\%20/, " ");
  const tutorial = props.params.tutorialname;
  const realTutorial = tutorial.replace(/\%20/, " ");
  const Article = await getDocBySlug(realSlug, realTutorial);
  const readmore = await getTutorialNamesByName(realTutorial);

  // console.log(Article)

  return (
    <div className='bg-slate-300 md:p-4 dark:bg-slate-900 flex w-full justify-between flex-col md:flex-row'>
      <article className=' md:min-w-[75%] h-fit prose dark:prose-invert lg:prose-xl font-mono p-2 prose-video:w-full prose-a:text-blue-600 prose-a:no-underline '>
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
          <ul className='h-[400px] p-8 overflow-scroll no-scrollbar'>
            {readmore.map((name) => (
              <li className='text-lg my-5 capitalize' key={name}>
                <Link href={`/tutorials/${realTutorial}/${name}`}>
                  Introduction to the most important topic in this century{name}
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
  const realSlug = slug.replace(/\%20/, " ");
  const tutorial = params.tutorialname;
  const realTutorial = tutorial.replace(/\%20/, " ");
  const Article = await getDocBySlug(realSlug, realTutorial);
  return {
    title: "Complete " + params.tutorialname + "Tutorial"+" : "+params.slug,
    description: Article.meta.description+"Unlock the Power of Learning with Our Comprehensive Tutorial Site! From Beginner to Advanced, we've got you covered in every step of your journey.Take your learning experience to new heights with our user-friendly interface and engaging content. Start your learning adventure today and become a master in no time!",
  };
}
