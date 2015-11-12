module.exports = function(grunt) {
    grunt.registerTask('dev', ['jekyll', 'sass:dev', 'copy', 'concurrent']);
    grunt.registerTask('build', [ 'jekyll', 'sass:dist', 'copy:vendor', 'uglify', 'htmlmin']);
};
