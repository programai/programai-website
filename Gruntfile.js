module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('./package.json')
    });

    require('./grunt/workflow.js')(grunt);
    require('./grunt/sass.js')(grunt);
    require('./grunt/watch.js')(grunt);
    require('./grunt/copy.js')(grunt);
    require('./grunt/uglify.js')(grunt);
    require('./grunt/jekyll.js')(grunt);
    require('./grunt/connect.js')(grunt);
    require('./grunt/concurrent.js')(grunt);
    require('./grunt/htmlmin.js')(grunt);

};
