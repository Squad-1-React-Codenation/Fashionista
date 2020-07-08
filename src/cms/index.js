/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const languages = fs.readdirSync(path.join(process.cwd(), "./content/"));

languages.forEach((lang) => {
  const pages = fs.readdirSync(path.join(process.cwd(), `./content/${lang}`));

  pages.forEach((page) => {
    const file = matter.read(
      path.join(process.cwd(), `/content/${lang}/${page}`)
    );

    const output = { ...file.data, content: file.content };

    fs.writeFileSync(
      `../../public/content/${lang}-${page.replace(/\.md$/, "")}.json`,
      JSON.stringify(output)
    );
  });
});
