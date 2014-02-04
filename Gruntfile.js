module.exports = function(grunt) {

	grunt.initConfig({
	// Project configuration.
	 pkg: grunt.file.readJSON('package.json'),
	    uglify: {
	      options: {
	        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
	      },
	      build: {
	        src: 'src/<%= pkg.name %>.js',
	        dest: 'build/<%= pkg.name %>.min.js'
	      }
		},
			
		watch: {
				files: ['**/**/*'],
				tasks: ['jshint'],
				},
		jshint: {
		    options: {
		      curly: true,
		      eqeqeq: true,
		      eqnull: true,
		      browser: true,
		      globals: {
		        jQuery: true
		      },
		    },
		    uses_defaults: ['website/**/**/*.js'],
		    with_overrides: {
		      options: {
		        curly: false,
		        undef: true,
		      },
		      files: {
		        src: ['website/**/**/*.js']
		      },
		    }
		  }
	});

  	// Default task(s).
	grunt.loadNpmTasks('grunt-contrib-uglify');
  	//grunt.registerTask('default', ['uglify']);

	// A very basic default task.
	  grunt.registerTask('default', 'Starting Grunt Job', function() {
				
	    grunt.log.write('Starting some stuff...').ok();
	  });


	
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-contrib-clean');




};