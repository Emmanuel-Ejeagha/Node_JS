//  // path module
// const path = require("path");

// console.log("Directory name:", path.dirname(__filename));
// console.log("File name:", path.basename(__filename));
// console.log("File extension:", path.extname(__filename));

// const joinPath = path.join("/user", "documents", "node", "projects");
// console.log("Joined path", joinPath);

// // resolve
// const resolvePath = path.resolve("user", "documents", "node", "projects");
// console.log("Resolved path", resolvePath);

// //Normalize
// const normalizePath = path.normalize("/user/.documents/../node/projects");
// console.log("NormalizedPath", normalizePath);

// // FILE SYSTEM
const { error } = require("console");
const fs = require("fs");
const path = require("path");

const myFolder = path.join(__dirname, "data");

if (!fs.existsSync(myFolder)) {
  fs.mkdirSync(myFolder);
  console.log("Data folder created");
}

const filePath = path.join(myFolder, "example.txt");
// syn way of creating the file
fs.writeFileSync(filePath, "Hello world from NodeJS");
console.log("File created successfully");

const readContent = fs.readFileSync(filePath, "utf8");
console.log("File content:", readContent);

fs.appendFileSync(filePath, "\nThis is a new line added to the file");
console.log("new line added");

// Async way of creating the file
const asyncFile = path.join(myFolder, "async-example.txt");
fs.writeFile(asyncFile, "Hello, Async node js", (error) => {
  if (error) throw error;
  console.log("Async file is created successfully");
  fs.readFile(asyncFile, "utf8", (err, data) => {
    if (err) throw err;
    console.log("Async file content:", data);
    fs.appendFile(asyncFile, "\nAdded another line", (err) => {
      if (err) throw err;
      console.log("New line Added");
      fs.readFile(asyncFile, "utf8", (err, updatedData) => {
        if (err) throw err;
        console.log("Updated file content", updatedData);
      });
    });
  });
});
