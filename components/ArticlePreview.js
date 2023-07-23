import Link from "next/link";

export const ArticlePreview = (props) => {
  return (
    <div className='w-full mt-8 flex overflow-hidden min-h-[150px] h-[150px]'>
      <Link
        className='w-3/4 bg-[--headbg] p-4 rounded-md rounded-r-none shadow-sm font-sans'
        href={
          !props.meta.tutorial
            ? `/blog/${props.slug}`
            : `/tutorials/${props.meta.tutorial}/${props.slug}`
        }
        aria-label={props.meta.tutorial}>
        <div>
          <h2 className='capitalize font-medium text-xl hover:text-blue-400  text-[var(--head)] mb-4'>
            {props.meta.title}
          </h2>

          <p className='line-clamp-2 text-[var(--subhead)] '>{props.meta.description}</p>
        </div>
      </Link>
      <div className='flex justify-end w-1/4 h-full rounded-r-md bg-[var(--headbg)]'>
        {!props.meta.tutorial && (
          <div className='text-sm text-slate-200 md:m-5 mt-5'>
            {props.datestring}
          </div>
        )}
      </div>
    </div>
  );
};
