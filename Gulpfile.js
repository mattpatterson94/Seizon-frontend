var gulp = require("gulp");
var shell = require('gulp-shell');
var elixir = require('laravel-elixir');
var themeInfo = require('./theme.json');

elixir.extend("stylistPublish", function() {
    gulp.task("stylistPublish", function() {
        gulp.src("").pipe(shell("php ../../artisan stylist:publish "+themeInfo.name));
    });

    this.registerWatcher("stylistPublish", ["**/*.css", "./assets/js/**/*.js"]);

    return this.queueTask("stylistPublish");
});

var basePaths = {
    src: './resources/',
    dest: './assets/',
    bower: './resources/vendor/'
};
 
var paths = {
    styles: {
        src: basePaths.src + 'scss/**/*.scss',
        dest: basePaths.dest + 'css'
    },
    scripts: {
        src: basePaths.src + 'js/app.js',
        dest: basePaths.dest + 'js/'
    },
    images: {
        src: basePaths.dest + 'img/**/*',
        dest: basePaths.dest + 'img/'
    }
};
 
var vendorFiles = {
    styles: [
        basePaths.bower + 'bourbon/app/assets/stylesheets',
        basePaths.bower + 'neat/app/assets/stylesheets'
    ],
    scripts: [
        basePaths.bower + 'jquery/dist/jquery.min.js'
    ]
};
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function (mix) {

    /**
     * Compile sass
     */
    mix.sass("app.scss", null, {includePaths: vendorFiles.styles})
        .stylistPublish();

    /**
     * Concat scripts
     */
    mix.scripts([
        '/vendor/jquery/dist/jquery.js',
        '/js/app.js'
    ], null, 'resources');

    /**
     * Copy Fontawesome fonts
     */
    mix.copy(
        'resources/vendor/font-awesome/fonts',
        'assets/fonts'
    );
});
