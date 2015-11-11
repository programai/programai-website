module.exports = function(grunt) {
    grunt.config('htmlmin', {
        dist: {
            options: {
                removeComments: true,
                collapseWhitespace: true
            },

            files: [
                {
                    expand: true, 
                    cwd: './dist/',
                    src: ['**/*.html'], 
                    dest: './dist/'
                }
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
};

