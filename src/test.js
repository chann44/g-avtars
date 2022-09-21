import axios from "axios";
import fs from "fs";

let url = `https://api.github.com/repos/chann44/g-avtars/git/trees/main?recursive=1`;

(async () => {
  const res = await axios.get(url);
  let tree = res.data.tree;
  let dbTree = [];
  tree.map((obj) => {
    if (obj.path.includes("avtardb/")) {
      dbTree.push(obj);
    }
  });

  dbTree = JSON.stringify(dbTree);
  fs.writeFileSync("./db.json", dbTree);
})();
