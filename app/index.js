'use strict';
var util = require('util');
var path = require('path');
var fs = require('fs');
var ncp = require('ncp').ncp;
var yeoman = require('yeoman-generator');

var ExpressSwigGenerator = module.exports = function ExpressSwigGenerator() {
    yeoman.generators.Base.apply(this, arguments);

  // this.on('end', function () {
  //   this.installDependencies({ skipInstall: options['skip-install'] });
  // });

    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(ExpressSwigGenerator, yeoman.generators.Base);

ExpressSwigGenerator.prototype.projectfiles = function projectfiles() {
    this.copy('_bower.json', 'bower.json');
    this.copy('_gitignore', '.gitignore');
    this.copy('_package.json', 'package.json');
    this.copy('app.js', 'app.js');
    this.copy('gulpfile.js', 'gulpfile.js');

    this.directory('bin', 'bin');
    this.directory('public', 'public');
    this.directory('routes', 'routes');
    this.directory('views', 'views');

    // if (fs.existsSync('css')) {
    //     ncp('css', 'src/css', function (err) {
    //         if (err) {
    //             return console.error(err);
    //         }
    //     });
    // }
    // else {
    //     this.mkdir('css');
    // }
    //
    // if (fs.existsSync('images')) {
    // }
    // else {
    //     this.mkdir('images');
    // }
    //
    // if (fs.existsSync('js')) {
    //     ncp('js', 'src/js', function (err) {
    //         if (err) {
    //             return console.error(err);
    //         }
    //     });
    // }
    // else {
    //     this.mkdir('js');
    // }

    fs.symlink('/joeydata/yeoman-generators/express-swig/node_modules', 'node_modules');
};
