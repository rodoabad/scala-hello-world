const Generator = require('yeoman-generator');

module.exports = class extends Generator {

  initializing() {

    this.composeWith(require.resolve('../linting'));

  }

  writing() {

    this.fs.copyTpl(
      this.templatePath('dotfiles/_editorconfig'),
      this.destinationPath('.editorconfig')
    );

    this.fs.copyTpl(
      this.templatePath('dotfiles/_gitattributes'),
      this.destinationPath('.gitattributes')
    );

    this.fs.copyTpl(
      this.templatePath('dotfiles/_gitignore'),
      this.destinationPath('.gitignore')
    );

    this.fs.copyTpl(
      this.templatePath('dotfiles/_nvmrc'),
      this.destinationPath('.nvmrc')
    );

  }

};
