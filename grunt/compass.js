var src = './src/assets/_sass';
var dest = './dist/assets/css';

module.exports = function(grunt) {
  grunt.config('compass', {
    options: {
      force: true,
      noLineComments: true
    },

    dev: {                            
      options: {                       
        outputStyle: 'expanded',
        sassDir: src,
        cssDir: dest
      },
    },

    dist: {                            
      options: {                       
        outputStyle: 'compressed',
        sassDir: src,
        cssDir: dest
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
};
