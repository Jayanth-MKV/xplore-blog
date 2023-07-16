import fs from "fs";
import { join } from "path";

const mainDirectory = process.cwd();
const docsDirectory = join(process.cwd(), "docs");

// Write to Json
async function writeToJson(data) {
  fs.writeFileSync(join(mainDirectory, "data.json"), JSON.stringify(data));
}

export const createFile = async(path, filename, content) => {

  const dirConf = await createDir(path);
  if (dirConf.status == 404) {
    return dirConf;
  }
  return new Promise((resolve, reject) => {


    fs.writeFile(join(docsDirectory, path, `${filename}.md`), content, (error) => {
      if (error) {
        console.log(error);
        return resolve({
          message: error,
          status: 404,
        });
      } else {
        console.log("New File created successfully !!");
        return resolve({
          message: "New File created successfully !!",
          status: 200,
        });
      }

    });
  }); 
}

export const createDir = async (folderName) => {
  const path = join(docsDirectory, folderName);
  return new Promise((resolve, reject) => {
    fs.access(path, (error) => {
      // To check if the given directory
      // already exists or not
      if (error) {
        // If current directory does not exist
        // then create it
        fs.mkdir(path, (error) => {
          if (error) {
            console.log(error);
            return resolve({
              message: error,
              status: 404
            });
          } else {
            console.log("New Directory created successfully !!");
            return resolve({
              message: "New Directory created successfully !!",
              status: 200
            });
          }
        });
      } else {
        console.log("Given Directory already exists !!");
        return resolve({
          message: "Given Directory already exists !!",
          status: 400
        });
      }
    });
  });
}

export const deleteDir = async (folderName) => {
  const path = join(mainDirectory, folderName);
  return new Promise((resolve, reject) => {
    fs.access(path, (error) => {
      // To check if the given directory
      // already exists or not
      if (error) {
        console.log("Given Directory doesn't exists !!");
        return resolve({
          message: "Given Directory doesn't exists !!",
          status: 400
        });
      } else {
        // If current directory exist
        // then delete it
        fs.rmdir(path, (error) => {
          if (error) {
            console.log(error);
            return resolve({
              message: error,
              status: 400
            });
          } else {
            console.log("Directory deleted successfully !!");
            return resolve({
              message: "Directory deleted successfully !!",
              status: 200,
            });
          }
        });
      }
    });
  });
}

