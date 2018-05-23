const Generator = require('yeoman-generator');


const semanticCommitMessagesLinterDependencies = {
  devDependencies: {
    '@commitlint/cli': '^6.2.0',
    '@commitlint/config-conventional': '^6.1.3',
    'eslint': '^4.19.1',
    'eslint-config-rodoabad': '^2.0.0',
    husky: '^0.14.3',
  },
  scripts: {
    commitmsg: 'commitlint -e $GIT_PARAMS'
  }
}

module.exports = class extends Generator {

  constructor(args, opts) {

    super(args, opts);

  }

  writing() {

    this.fs.copy(
      this.templatePath('dotfiles/.*'),
      this.destinationRoot()
    );

    this.fs.extendJSON(this.destinationPath('package.json'), semanticCommitMessagesLinterDependencies);

  }

  install() {
    this.npmInstall();
  }

};
