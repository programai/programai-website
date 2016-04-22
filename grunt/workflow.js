module.exports = function(grunt) {
    grunt.registerTask('dev', ['jekyll', 'compass:dev', 'copy', 'concurrent']);
    grunt.registerTask('build', [ 'jekyll', 'compass:dist', 'copy:vendor', 'uglify', 'htmlmin']);
};
