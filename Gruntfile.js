module.exports = function (grunt) {

  /*
    * connect      ローカルサーバを立てる
    * sass         sassのコンパイル
    * watch        html、scss、jsに変更があるとブラウザをオートリロードする
    * autoprefixer scss修正したタイミングで走らせる
                   sassのコンパイルと同時に走るイメージで、cssを対象にしてそのまま上書きをする
  */
  
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  
  grunt.initConfig({
    
    connect: {
      server: {
        options: {
          //open: true,
          port: 9000,
          livereload: true,
          hostname: '0.0.0.0',
          base: 'dist/'
        }
      }
    },
    
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: [{
          expand: true,
          cwd: 'src/scss/',
          src: ['**/*.scss'],
          dest: 'dist/css/',
          ext: '.css'
        }]
      }
    },
    
    autoprefixer: {
      options: {
        browsers: ['last 2 version', 'Explorer >= 8', 'Android >= 2.3']
      },
      files: {
        expand: true,
        flatten: true,
        src: 'dist/css/**/*.css',
        dest: 'dist/css/'
      }
    },
    
    watch: {
      options: {
        livereload: true,
        spawn: false
      },
      html: {
        files: 'dist/**/*.html'
      },
      css: {
        files: [ 'src/scss/**/*.scss' ],
        tasks: [ 'sass', 'autoprefixer' ]
      },
      js: {
        files: 'dist/**/*.js'
      },
      gruntfile: {
        files: 'Gruntfile.js'
      }
    }
    
  });
  
  grunt.registerTask('default', [ 'connect', 'watch' ]);
  
};