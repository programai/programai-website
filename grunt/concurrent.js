module.exports = function( grunt ) {
    grunt.config('concurrent', {
        options: {
            logConcurrentOutput: true
        },
        dev: ['connect', 'watch']
    });

    grunt.loadNpmTasks('grunt-concurrent');
};
