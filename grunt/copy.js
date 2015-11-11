module.exports = function( grunt ) {
    grunt.config('copy', {
        vendor: {
            files: [
                {
                    expand: true, 
                    cwd: './bower_components/font-awesome/css',
                    src: ['font-awesome.min.css'], 
                    dest: './dist/assets/css/'
                },

                {
                    expand: true, 
                    cwd: './bower_components/font-awesome/fonts',
                    src: ['*'], 
                    dest: './dist/assets/fonts/'
                }
            ]
        },

        scripts: {
            files: [
                {
                    expand: true, 
                    cwd: './src/assets/js',
                    src: ['*.js'], 
                    dest: './dist/assets/js'
                }
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
};
