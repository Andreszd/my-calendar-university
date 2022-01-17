#!/usr/bin/env node

const fs = require('fs');
const inquirer = require('inquirer');
const lPath = require('path');

const contentIndexFile = (nameComponent) =>
  `export { default } from './${nameComponent}.js'`;
const contentJsFile = (nameFileStyle = 'styles') =>
  `import './${nameFileStyle}.css'`;

const lib = {
  'Type One': ({ path, nameComponent }) => {
    fs.writeFileSync(
      `${path}/${nameComponent}.js`,
      contentJsFile(nameComponent)
    );
    fs.writeFileSync(`${path}/${nameComponent}.css`, '');
    fs.writeFileSync(`${path}/index.js`, contentIndexFile(nameComponent));
  },
  /*
  'Type Two': ({ path, nameComponent }) => {
    fs.writeFileSync(`${path}/index.js`, contentJsFile());
    fs.writeFileSync(`${path}/styles.css`, '');
  },
  'Type Three': ({ path, nameComponent }) => {
    fs.writeFileSync(
      `${path}/${nameComponent}.js`,
      contentJsFile(nameComponent)
    );
    fs.writeFileSync(`${path}/styles.css`, '');
    fs.writeFileSync(`${path}/index.js`, contentIndexFile(nameComponent));
  },
  */
};

const options = [
  {
    name: 'nameComponent',
    type: 'input',
    message: 'Writte name component',
  },
  {
    name: 'path',
    type: 'input',
    message: 'Writte relative path',
  },
  {
    name: 'typeOf',
    type: 'list',
    message: 'Select type of component structure content',
    choices: Object.keys(lib),
  },
];

function createFiles({ nameComponent, path, typeOf }) {
  try {
    const dirPath = lPath.join(__dirname, '../');
    if (!fs.existsSync(path)) throw Error('Path not exist');
    if (lPath.isAbsolute(path)) throw Error('Path should be relative');
    const newPath = `${dirPath}/${nameComponent}`;
    fs.mkdirSync(newPath);
    lib[typeOf]({ path: newPath, nameComponent });
  } catch (err) {
    console.error(err);
  }
}

(async () => {
  const asw = await inquirer.prompt(options);
  createFiles(asw);
})();
