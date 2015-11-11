module.exports = function( grunt ) {

    grunt.config('uglify', {
        dist: {
            files: {
                './dist/assets/js/programai.js': ['./src/assets/js/programai.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
};
