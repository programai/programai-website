module.exports = function( grunt ) {
    grunt.config('connect', {
        server: {
            options: {
                keepalive: true,
                livereload: true,
                port: 8000,
                base: 'dist'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect')
};
