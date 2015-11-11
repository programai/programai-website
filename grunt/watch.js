module.exports = function( grunt ) {
    grunt.config('watch', {
        options: {
            event: ['added', 'changed', 'deleted']
        },

        styles: {
            files: './src/assets/_sass/**/*.scss',
            tasks: [ 'sass:dev' ]
        },

        scripts: {
            files: './src/assets/js/**/*.js',
            tasks: [ 'copy:scripts' ]
        },

        liveReload: {
            options: {
                livereload: true
            },

            files: [
                './dist/assets/css/**/*.css',
                './dist/assets/js/**/*.js',
                './dist/assets/img/**/*',
                './dist/assets/fonts/**/*',
                './dist/**/*.html',
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
};
