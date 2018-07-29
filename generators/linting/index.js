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

console.log(this.templatePath('_commitlintrc_json'));


    this.fs.copyTpl(
      this.templatePath('dotfiles/_commitlintrc_json'),
      this.destinationPath('.commitlintrc.json')
    );

    this.fs.copyTpl(
      this.templatePath('dotfiles/_eslintrc_js'),
      this.destinationPath('.eslintrc.js')
    );

    this.fs.extendJSON(this.destinationPath('package.json'), updatedPackageJson);

  }

  install() {

    this.npmInstall();

  }

};
