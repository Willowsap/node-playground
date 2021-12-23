import fs from "fs";
import path from "path";
import Utils from "./services/util.service";

const startDir = path.join(__dirname, "pictures");
const files = Utils.getAllFiles(startDir);
for(let i = 0; i < files.length; i++) {
  const x = i;
  const ext = files[x].slice(-3);
  const oldName = `${startDir}/${files[x]}`;
  const newName = `${startDir}/ajax_${x}.${ext}`;
  fs.rename(oldName, newName, (err) => {
    if(err) {
      console.log(err)
    } else {
      console.log(`${x}:  ${oldName} => ${newName}`)
    }
  });
}