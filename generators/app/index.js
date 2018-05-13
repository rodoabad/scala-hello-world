const Generator = require('yeoman-generator');

module.exports = class extends Generator {

  constructor(args, opts) {

    super(args, opts);

  }

  writing() {

    this.fs.copy(
      this.templatePath('dotfiles/.*'),
      this.destinationRoot()
    );

  }

};
