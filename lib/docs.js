

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
  const date = new Date(data.date);
  const datestring = date.toDateString();
  return { slug: realSlug, meta: data,date:date,datestring:datestring, content };
});

export const getDocBySlugWithoutContent = cache((slug, r = "", path = docsDirectory) => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(path, r, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);
  const date = new Date(data.date);
  const datestring = date.toDateString();
  return { slug: realSlug, meta: data ,category: data?.category,date:date,datestring:datestring};
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
export function getTutorialData1(path_) {
  const path = join(docsDirectory, path_);
  const files = fs.readdirSync(path);
  const mdFiles = files.filter((file) => file.endsWith(".md"));

  // Get the details of the articles in the path
  const data = mdFiles.map((fileName) => getDocBySlugWithoutContent(fileName,"",path));
  
  return data;
}

// [{slug,meta,data}] path=".../tutorialname"
export function getTutorialData(path_) {
  const path = join(docsDirectory, path_);
  const files = fs.readdirSync(path);
  const mdFiles = files.filter((file) => file.endsWith(".md"));

  // Get the details of the articles in the path
  const data = mdFiles.map((fileName) => getDocBySlugWithoutContent(fileName,"",path));

  let res = {};
  data.forEach((article) => {
    const cat = article?.category;
    if (cat) { 
      if (res[cat]) {
        res[cat].push(article);
      }
      else {
        res[cat] = [article];
      }
    }
    else {
      if (res['Misc']) { 
        res['Misc'].push(article);
      }
      else {
        res['Misc'] = [article];
      }
    }
  })
  // console.log(res);

  let fres = [];
  for (let key in res) {
    //sorting based on the order
    const articles = res[key].sort((a, b) => {
      return a.meta.order - b.meta.order;
    });
    fres.push({ category: key, data: articles });
  }
  return fres;
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