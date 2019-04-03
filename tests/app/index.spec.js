const assert = require('yeoman-assert');
const { generators } = require('yeoman-generator');
const helpers = require('yeoman-test');
const path = require('path');
const rimraf = require('rimraf');

describe('Generator', () => {
  const tempFolder = path.join(__dirname, 'tmp');

  console.log(tempFolder);

  beforeEach(async () => {
    await helpers.run(path.join(__dirname, '../../generators/app'))
      .inDir(tempFolder);
  });

  afterEach(() => {
    rimraf.sync(`${tempFolder}/**/*`, {
      glob: {
        dot: true
      }
    });
  });

  test('add git dot files', () => {
    const expectedNewDotFiles = [
      '.gitattributes',
      '.gitignore'
    ];

    assert.file(expectedNewDotFiles);
  });

  test('add editor config', () => {
    const expectedNewDotFiles = [
      '.editorconfig',
    ];

    assert.file(expectedNewDotFiles);
  });

  test('add NVM config for Node JS consistency', () => {
    const expectedNewDotFiles = [
      '.nvmrc'
    ];

    assert.file(expectedNewDotFiles);
  });
});
