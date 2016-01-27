module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            options: {
                livereload: true
            },
            files: [
                "public/**/*"
            ]
        },
        concat: {
            options: {
                separator: ';',
            },
            vendor: {
                src: 'public/assets/js/vendor/*.js',
                dest: 'public/assets/js/built/vendor.min.js'
            },
        },
        uglify: {
            src: {
                files: {
                    'public/assets/js/built/src.min.js': ['public/assets/js/scripts.js']
                }
            }
        }
    });

    // load NPM tasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('production', ['concat', 'uglify']);
};