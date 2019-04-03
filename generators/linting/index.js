const Generator = require('yeoman-generator');

const devDependencies = {
  '@commitlint/cli': '^6.2.0',
  '@commitlint/config-conventional': '^6.1.3',
  eslint: '^4.19.1',
  'eslint-config-rodoabad': '^2.0.0',
  husky: '^0.14.3'
};

const scripts = {
  commitmsg: 'commitlint -e $GIT_PARAMS'
};

const updatedPackageJson = {
  devDependencies,
  scripts
};

module.exports = class extends Generator {

  writing() {

    this.fs.copy(
      this.templatePath('dotfiles/.commitlintrc.json'),
      this.destinationPath('.commitlintrc.json')
    );

    this.fs.copy(
      this.templatePath('dotfiles/.eslintrc.js'),
      this.destinationPath('.eslintrc.js')
    );

    this.fs.extendJSON(this.destinationPath('package.json'), updatedPackageJson);

  }

  install() {

    this.npmInstall();

  }

};
