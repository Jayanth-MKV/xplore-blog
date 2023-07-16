import { getArticlesForBlog } from "@/lib/articles";
import { NextResponse } from "next/server";


export async function GET(request) {
  // console.log(request)
  let data;
  const category = request.nextUrl.searchParams.get("category"); 
  console.log(category);
  if (category == "blog") {
    
    data = await getArticlesForBlog();
}
  // const urlData = new URL(request.url);
  // console.log(urlData);
  return NextResponse.json(data);
}
