export default function TutorialLayout({
  children, // will be a page or nested layout
}){
  return (
    <div className='mx-5 md:mx-24'>
      <div className='md:h-[10rem] min-h-[5rem]'></div>
      {children}
    </div>
  );
}
