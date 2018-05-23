const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const path = require('path');

describe('Generator', () => {
  beforeEach(async () => {
    await helpers.run(path.join(__dirname, '../../generators/app'));
  });

  test('add git dot files', () => {
    const expectedNewDotFiles = [
      '.editorconfig',
      '.gitattributes',
      '.gitignore',
      '.nvmrc'
    ];

    assert.file(expectedNewDotFiles);
  });

  test('add editor config', () => {
    const expectedNewDotFiles = [
      '.gitattributes',
      '.gitignore'
    ];

    assert.file(expectedNewDotFiles);
  });

  test('add NVM config for Node JS consistency', () => {
    const expectedNewDotFiles = [
      '.nvmrc'
    ];

    assert.file(expectedNewDotFiles);
  });

  test('add commit linting', () => {
    const expectedUpdatedPackageJson = {
      devDependencies: {
        '@commitlint/cli': '^6.2.0',
        '@commitlint/config-conventional': '^6.1.3',
        husky: '^0.14.3',
      },
      scripts: {
        commitmsg: 'commitlint -e $GIT_PARAMS'
      }
    };

    const expectedNewDotFiles = [
      '.commitlintrc.json',
    ];

    assert.jsonFileContent('package.json', expectedUpdatedPackageJson);
    assert.file(expectedNewDotFiles);
  });

  test('add JS linting', () => {
    const expectedLintDevDependencies = {
      devDependencies: {
        'eslint': '^4.19.1',
        'eslint-config-rodoabad': '^2.0.0'
      }
    }

    assert.jsonFileContent('package.json', expectedLintDevDependencies);
  });
});
