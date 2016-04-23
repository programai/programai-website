module.exports = function( grunt ) {
  grunt.config('jekyll', {
    dist: {                             
      options: {                        
        dest: './dist',
        src : './src'
      }
    }
  });

  grunt.loadNpmTasks('grunt-jekyll');
};
