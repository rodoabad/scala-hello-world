const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const path = require('path');
const rimraf = require('rimraf');

describe('Linting Generator', () => {
  const tempFolder = path.join(__dirname, 'tmp');

  beforeEach(async() => {
    await helpers.run(path.join(__dirname, '../../generators/linting'))
      .inDir(tempFolder);
  });

  afterEach(() => {
    rimraf.sync(`${tempFolder}/**/*`, {
      glob: {
        dot: true
      }
    });
  });

  test('add commit linting', () => {
    const expectedUpdatedPackageJson = {
      devDependencies: {
        '@commitlint/cli': '^8.1.0',
        '@commitlint/config-conventional': '^8.1.0',
        husky: '^0.14.3'
      },
      scripts: {
        commitmsg: 'commitlint -e $GIT_PARAMS'
      }
    };

    const expectedNewDotFiles = [
      `${tempFolder}/.commitlintrc.json`
    ];

    assert.jsonFileContent(`${tempFolder}/package.json`, expectedUpdatedPackageJson);
    assert.file(expectedNewDotFiles);
  });

  test('add JS linting', () => {
    const expectedUpdatedPackageJson = {
      devDependencies: {
        eslint: '^4.19.1',
        'eslint-config-rodoabad': '^2.0.0'
      }
    };

    const expectedNewDotFiles = [
      `${tempFolder}/.eslintrc.js`
    ];

    assert.jsonFileContent(`${tempFolder}/package.json`, expectedUpdatedPackageJson);
    assert.file(expectedNewDotFiles);
  });
});
