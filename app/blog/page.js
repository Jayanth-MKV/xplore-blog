import { getArticlesForBlog } from "@/lib/articles";
import { ArticlePreview } from "@/components/ArticlePreview";

export default async function Page() {
  const allArticle = await getArticlesForBlog();
  // console.log(allArticle.slice(0,4));
  const allArticles = allArticle.sort((a, b) => {
    return (b.date - a.date);
  })

    const articlePreviews = allArticles.map((post) => (
      <ArticlePreview key={post.date} {...post} />
    ));

  return (
    <>
      <nav class='flex' aria-label='Breadcrumb'>
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
        </ol>
      </nav>
      <div className='capitalize text-center py-5 font-extrabold dark:text-slate-300 text-slate-900 text-2xl md:text-4xl'>
        Blog Articles
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mx-5 md:mx-24 md:p-5'>
        {articlePreviews}
      </div>
    </>
  );

}

