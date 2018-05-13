const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const path = require('path');

it('add dotfiles file to package root', async () => {
  await helpers.run(path.join(__dirname, '../../generators/app'));

  const expectedDotFiles = [
    '.editorconfig',
    '.gitattributes',
    '.gitignore',
    '.nvmrc'
  ];

  assert.file(expectedDotFiles);
});
