export default function RoadMapLayout({
  children, // will be a page or nested layout
}){
  return <div className=' md:mx-24'>
    <div className="md:h-[10rem] min-h-[5rem]"></div>
        {children}
    </div>;
}
