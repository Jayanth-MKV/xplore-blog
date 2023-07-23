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
      <div className='capitalize text-center py-5 font-extrabold dark:text-slate-300 text-slate-900 text-2xl md:text-4xl'>
        Blog Articles
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mx-5 md:mx-24 md:p-5'>
        {articlePreviews}
      </div>
    </>
  );

}

