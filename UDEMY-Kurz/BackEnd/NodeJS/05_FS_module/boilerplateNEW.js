const fs = require('node:fs');
const FolderName = process.argv[2] || "Project_folder";

const data = "Hello NODEJS";

try{
    fs.mkdirSync(FolderName)
    fs.writeFileSync(`${FolderName}/index.html`, data)
    fs.writeFileSync(`${FolderName}/app.js`, data)
    fs.writeFileSync(`${FolderName}/style.css`, data)
} catch(err){
    console.log(`OOPS you've got an error => ${err}`)
}