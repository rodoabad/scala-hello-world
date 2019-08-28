const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const path = require('path');
const rimraf = require('rimraf');

describe('Generator', () => {
  const tempFolder = path.join(__dirname, 'tmp');

  beforeEach(async() => {
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
      `${tempFolder}/.editorconfig`
    ];

    assert.file(expectedNewDotFiles);
  });

  test('add NVM config for Node JS consistency', () => {
    const expectedNewDotFiles = [
      `${tempFolder}/.nvmrc`
    ];

    assert.file(expectedNewDotFiles);
  });
});
