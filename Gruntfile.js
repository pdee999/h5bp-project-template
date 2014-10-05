module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // 2. Configuration for specific packages goes here

        bower: {
            dev: {
                dest: 'dev',
                css_dest: 'dev/css',
                js_dest: 'dev/js/lib',
                less_dest: 'dev/less/bootstrap',
                otf_dest: 'dev/fonts',
                eot_dest: 'dev/fonts',
                svg_dest: 'dev/fonts',
                ttf_dest: 'dev/fonts',
                woff_dest: 'dev/fonts'
            }
        },

        lesslint: {
            src: ['dev/less/desktop.less', 'dev/less/global.less', 'dev/less/mixins.less', 'dev/less/screens.less', 'dev/less/large-screens.less', 'dev/less/tablet.less', 'dev/less/variables.less', 'dev/less/mobile.less', 'dev/less/print.less', 'dev/less/retina.less'],
            options: {
                csslint:{
                    'known-properties': false
                }
            }
        },

        less: {
            dev: {
                files: {
                    "dev/css/main-compiled.css": "dev/less/main.less"
                }
            }
        },

        autoprefixer: {
            dev: {
                expand: true,
                cwd: 'dev',
                src: [ 'css/*.css' ],
                dest: 'dev'
            }
        },

        clean: {
            build: {
                src: [ 'build' ]
            },
            postbuild: {
                src: [ 'build/js/prod.js' ]
            }
        },

        copy: {
            build: {
                cwd: 'dev',
                src: [
                    'fonts/**',
                    'img/**',
                    '*.{html,png,ico,txt,php}'
                ],
                dest: 'build',
                expand: true
            }
        },

        concat: {
            build: {
                src: [
                    'dev/js/plugins.js',
                    'dev/js/main.js'
                ],
                dest: 'build/js/prod.js'
            }
        },

        uglify: {
            prod: {
                src: 'build/js/prod.js',
                dest: 'build/js/prod.min.js'
            },
            modernizr: {
                src: 'dev/js/lib/modernizr.js',
                dest: 'build/js/modernizr.min.js'
            },
            jquery: {
                src: 'dev/js/lib/jquery.js',
                dest: 'build/js/jquery.min.js'
            },
            bootstrap: {
                src: 'dev/js/lib/bootstrap.js',
                dest: 'build/js/bootstrap.min.js'
            }
        },

        cssmin: {
            less: {
                files: {
                    'build/css/main-compiled.min.css': ['dev/css/normalize.css', 'dev/css/main-compiled.css']
                }
            },
            css: {
                files: {
                    'build/css/normalize.min.css': ['dev/css/normalize.css'],
                    'build/css/bootstrap.min.css': ['dev/css/bootstrap.css'],
                    'build/css/font-awesome.min.css': ['dev/css/font-awesome.css'],
                    'build/css/bootstrap-theme.min.css': ['dev/css/bootstrap-theme.css'],
                    'build/css/html5-base.min.css': ['dev/css/html5-base.css'],
                    'build/css/main.min.css': ['dev/css/main.css'],
                    'build/css/html5-helper.min.css': ['dev/css/html5-helper.css']
                }
            }
        },

        processhtml: {
            options: {
                // Task-specific options go here.
            },
            your_target: {
                files: {
                    'build/index.html': ['build/index.html']
                }
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'dev/img',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'build/img/'
                }]
            }
        },

        htmlmin: {
            build: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    preserveLineBreaks: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true

                },
                files: [{
                    expand: true,
                    cwd: 'build/',
                    src: ['**/*.{html,php}'],
                    dest: 'build/'
                }]
            }
        },

        jshint: {
            dev: ['dev/Gruntfile.js', 'dev/js/*.js'],
            build: ['build/js/prod.js']
        },

        csslint: {
            dev: {
                options: {
                    import: false
                },
                src: ['dev/css/main.css']
            }
        },

        qunit: {
            local: ['dev/**/*.{html,php}'],
            serve: {
                options: {
                    urls: ['http://localhost:8000']
                }
            }
        },

        connect: {
            dev: {
                options: {
                    port: 8000,
                    hostname: 'localhost',
                    livereload: true,
                    useAvailablePort: true,
                    base: 'dev',
                    open: true
                }
            },
            build: {
                options: {
                    port: 8000,
                    hostname: 'localhost',
                    livereload: true,
                    useAvailablePort: true,
                    base: 'build',
                    open: true
                }
            }
        },

        watch: {
            dev: {
                files: ['dev/**/*.{html,php}', 'dev/Gruntfile.js', 'dev/js/*.js', 'dev/less/*.less', 'dev/css/*.css'],
                tasks: ['lesslint', 'less', 'autoprefixer', 'csslint', 'jshint:dev'],
                options: {
                    reload: true,
                    livereload: true
                }
            },
            build: {
                files: ['build/**/**'],
                tasks: [],
                options: {
                    reload: true,
                    livereload: true
                }
            }
        },

    compress: {
            main: {
                options: {
                    archive: 'archive.zip'
                },
                files: [
                    {expand: true, cwd: 'build/**/**', src: ['**'], dest: '.'}
                ]
            }
        },

        styleguide: {
            build: {
                files: {
                    'Styleguide': 'dev/css/*.css'
                }
            }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-bower');
    grunt.loadNpmTasks('grunt-lesslint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-styleguide');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['bower', 'lesslint', 'less', 'autoprefixer', 'csslint', 'jshint:dev']);
    grunt.registerTask('serve', ['bower', 'lesslint', 'less', 'autoprefixer', 'csslint', 'jshint:dev', 'connect:dev', 'watch:dev', 'qunit:serve']);
    grunt.registerTask('build', ['bower', 'lesslint', 'less', 'autoprefixer', 'csslint', 'clean:build', 'copy', 'concat', 'jshint:build', 'uglify', 'newer:imagemin', 'cssmin', 'processhtml', 'processhtml', 'htmlmin', 'clean:postbuild', 'compress', 'styleguide']);
    grunt.registerTask('buildserve', ['bower', 'lesslint', 'less', 'autoprefixer', 'csslint', 'clean:build', 'copy', 'concat', 'jshint:build', 'uglify', 'newer:imagemin', 'cssmin', 'processhtml', 'processhtml', 'htmlmin', 'clean:postbuild', 'connect:build', 'watch:build', 'qunit:serve', 'compress', 'styleguide']);


};