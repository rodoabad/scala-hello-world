const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const path = require('path');

describe('Linting Generator', () => {
  beforeEach(async () => {
    await helpers.run(path.join(__dirname, '../../generators/linting'));
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
    const expectedUpdatedPackageJson = {
      devDependencies: {
        'eslint': '^4.19.1',
        'eslint-config-rodoabad': '^2.0.0'
      }
    }

    const expectedNewDotFiles = [
      '.eslintrc.js',
    ];

    assert.jsonFileContent('package.json', expectedUpdatedPackageJson);
    assert.file(expectedNewDotFiles);
  });
});
