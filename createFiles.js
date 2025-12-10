import { mkdir, writeFile } from "fs/promises";
for (let i = 1; i <= 16; i++) {
  await mkdir(`./${i}`);
  await writeFile(`./${i}/${i}.ts`, "");
}
