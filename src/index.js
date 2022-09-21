import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/adventurer";
import fse from "fs-extra";
import { faker } from "@faker-js/faker";

const names = [];

for (let i = 0; i < 1000; i++) {
  let randomname = faker.name.firstName();
  names.push(randomname);
}

let svg;
for (let i = 0; i < names.length; i++) {
  svg = createAvatar(style, {
    seed: names[i],
    // ... and other options
  });
  await fse.outputFile(`./avtardb/${i}.svg`, svg);
}

console.log(svg);
