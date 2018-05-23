const Generator = require('yeoman-generator');

module.exports = class extends Generator {

  initializing() {

    this.composeWith(require.resolve('../linting'));

  }

  writing() {

    this.fs.copy(
      this.templatePath('dotfiles/.*'),
      this.destinationRoot()
    );

  }

};
