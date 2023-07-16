import { cache } from "react";
import fs from "fs";
import { join } from "path";
import { getDocBySlugWithoutContent, getTutorialData } from "./docs";

const docsDirectory = join(process.cwd(), "docs");

// returns [{slug:element},{...}]
export const getparamsforblog = cache(async () => {

  let resArr = [];
  const tutorialnames = await getTutorialNames();

  tutorialnames.map((path) => {
    const data = getFiles(join(docsDirectory, path));
    data.forEach((element) => {
      resArr.push({
        slug: element.replace(/\.md$/, ""),
      });
    });
  });

  const files = getFiles(docsDirectory);
  files.forEach((element) => {
    resArr.push({
      slug: element.replace(/\.md$/, ""),
    });
  });

  // console.log(resArr);

  return resArr;
});

// For generatestaticparams in blog and tutorial
// [{tutorialname:...,slug:...},{...}]
export const getparamsfortutorial = cache(async () => {
  return getslugswithtutorials();
});

export const nontutorialarticles = async() => {
  const files = getFiles(docsDirectory);
  const allfiles = files.map((file) => file.replace(/\.md$/, ""));
  return allfiles;
}


export const getTutorialNames = cache(async () => {
  return getDirectories(docsDirectory);
});

export const getTutorialNamesByName = cache(async (name) => {
  return getFiles(join(docsDirectory, name)).map((file) =>
    file.replace(/\.md$/, "")
  );
});


const getslugswithtutorials = cache(async () => {
  let resArr = [];
  const tutorialnames = await getTutorialNames();

  tutorialnames.map((path) => {
    const data = getFiles(join(docsDirectory, path));
    data.forEach((element) => {
      resArr.push({
        tutorialname: path,
        slug:element
      });
    });
  });
  return resArr;
});



// Get directories form the path, also check if they are directories
// [ 'nextjs-tutorial', 'reactjs-tutorial' ]
function getDirectories(path) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path + "/" + file).isDirectory();
  });
}


// Get files form the path, also check if they are files
// [ file1name , file2name ]
function getFiles(path) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path + "/" + file).isFile();
  });
}



// Used in getparamsfortutorial


// export function getAllTutorials() {
//   return getFiles(docsDirectory).map((path) => {
//     return getAllDocs(join(docsDirectory, path));
//   });
// }

// export const getAllArticles = cache(async () => {
//   if (fs.existsSync(join(jsonDirectory, "data.json"))) {
//     const example = JSON.parse(
//       fs.readFileSync(join(jsonDirectory, "data.json")).toString()
//     );
//     // console.log(example);
//     if (example.length != 0) {
//       console.log("---Cached Data---");
//       console.log(getDirectories(docsDirectory));
//       return example;
//     }
//   }
//   let resArr = [];
//   getDirectories(docsDirectory).map((path) => {
//     const data = getAllDocs(join(docsDirectory, path));
//     data.forEach((element) => {
//       resArr.push(element);
//     });
//   });

//   const files = fs.readdirSync(docsDirectory);
//   const mdfiles = files.filter((file) => file.endsWith(".md"));
//   const mdfilesData = mdfiles.map((fileName) =>
//     getDocBySlugWithoutContent(fileName, docsDirectory)
//   );

//   await writeToJson([...resArr, ...mdfilesData]);

//   return [...resArr, ...mdfilesData];
// });

export const getArticlesForBlog = cache(async () => {

  let resArr = [];
  getDirectories(docsDirectory).map((path) => {
    const data = getTutorialData(path);
    data.forEach((element) => {
      resArr.push(element);
    });
  });

  const files = fs.readdirSync(docsDirectory);
  const mdfiles = files.filter((file) => file.endsWith(".md"));
  const mdfilesData = mdfiles.map((fileName) =>
    getDocBySlugWithoutContent(fileName,"", docsDirectory)
  );

  return [...resArr, ...mdfilesData];
});