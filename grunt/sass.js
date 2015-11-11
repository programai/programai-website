module.exports = function(grunt) {
    var files = {
        './dist/assets/css/programai.css': './src/assets/_sass/programai.scss'
    };

    grunt.config('sass', {
        options: {
            sourcemap: 'none'
        },

        dev: {                            
            options: {                       
                style: 'expanded'
            },

            files: files 
        },

        dist: {                            
            options: {                       
                style: 'compressed'
            },

            files: files 
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
};
