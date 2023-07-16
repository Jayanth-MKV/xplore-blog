

import fs from "fs";
import { join } from "path";
import { cache } from 'react'; 
import matter from "gray-matter";


const docsDirectory = join(process.cwd(), "docs");

export const getDocBySlug = cache((slug, r = "", path = docsDirectory) => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(path, r, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { slug: realSlug, meta: data, content };
});

export const getDocBySlugWithoutContent = cache((slug, r = "", path = docsDirectory) => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(path, r, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);

  return { slug: realSlug, meta: data };
});

// Returns array of file data in path
// [{ slug: realSlug, meta: data }]
export function getAllDocs(path) {
  const files = fs.readdirSync(path);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  
  // Get the details of the articles in the path
  const posts = markdownPosts.map(
    (fileName) => getDocBySlug(fileName, path)
  );
    
  return posts;
};

// [{slug,meta,data}] path=".../tutorialname"
export function getTutorialData(path_) {
  const path = join(docsDirectory, path_);
  const files = fs.readdirSync(path);
  const mdFiles = files.filter((file) => file.endsWith(".md"));

  // Get the details of the articles in the path
  const data = mdFiles.map((fileName) => getDocBySlugWithoutContent(fileName,"",path));

  return data;
}


// Get gray-matter data from each file.
//     {
//     const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
//     const matterResult = matter(fileContents);
//     return {
//       title: matterResult.data.title,
//       date: matterResult.data.date,
//       subtitle: matterResult.data.subtitle,
//       slug: fileName.replace(".md", ""),
//     };
//   }