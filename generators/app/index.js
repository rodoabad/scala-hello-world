const Generator = require('yeoman-generator');

module.exports = class extends Generator {

  initializing() {

    this.composeWith(require.resolve('../linting'));

  }

  writing() {

    this.fs.copy(
      this.templatePath('dotfiles/.editorconfig'),
      this.destinationPath('.editorconfig')
    );

    this.fs.copy(
      this.templatePath('dotfiles/.gitattributes'),
      this.destinationPath('.gitattributes')
    );

    this.fs.copy(
      this.templatePath('dotfiles/.gitignore'),
      this.destinationPath('.gitignore')
    );

    this.fs.copy(
      this.templatePath('dotfiles/.nvmrc'),
      this.destinationPath('.nvmrc')
    );

  }

};
