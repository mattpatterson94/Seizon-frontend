var gulp = require('gulp');

var es = require('event-stream');
var gutil = require('gulp-util');
var del = require('del');
var browserSync = require("browser-sync").create();
var reload = browserSync.reload;

// Autoload plugins from package.json
var plugins = require("gulp-load-plugins")({
	pattern: ['gulp-*', 'gulp.*'],
	replaceString: /\bgulp[\-.]/
});

// Allows gulp --dev to be run for a more verbose output
var isProduction = true;
var sassStyle = 'compressed';
var sourceMap = false;

if (gutil.env.dev === true) {
	sassStyle = 'expanded';
	sourceMap = true;
	isProduction = false;
}

var basePaths = {
	src: './',
	dest: './build/',
	bower: './bower_components/'
};

var paths = {
	styles: {
		src: basePaths.src + 'scss/**/*.scss',
		dest: basePaths.src + 'css'
	},
	scripts: {
		src: basePaths.src + 'js/**/*.js',
		dest: basePaths.dest + 'js/'
	},
	images: {
		dest: basePaths.src + 'img/**/*'
	}
};

var vendorFiles = {
	styles: [
		'bower_components/bourbon/app/assets/stylesheets',
		'bower_components/neat/app/assets/stylesheets'
	],
	scripts: [
		// 'bower_components/jquery/dist/jquery.min.js',
	]
};

// Gulp Tasks
// Clean
gulp.task('clean', function(cb) {
	del(['build'], cb);
});

// Sass
gulp.task('sass', function() {
	return gulp.src(paths.styles.src)
		.pipe(!isProduction ? plugins.newer(paths.styles.dest) : gutil.noop())
		.pipe(!isProduction ? plugins.sourcemaps.init() : gutil.noop())
		.pipe(plugins.sass({
			includePaths: vendorFiles.styles,
			outputStyle: sassStyle,
			errLogToConsole: true
		}))
		.pipe(!isProduction ? plugins.sourcemaps.write() : gutil.noop())
		.pipe(isProduction ? plugins.autoprefixer('last 2 versions', 'ie 8', 'ie 9') : gutil.noop())
		.pipe(gulp.dest(paths.styles.dest))
		.pipe(plugins.filter('**/*.css')) // Filtering stream to only css files
        .pipe(browserSync.reload({stream:true}));
});

// Scripts
gulp.task('scripts', function(){
	return gulp.src(vendorFiles.scripts.concat(paths.scripts.src))
		.pipe(!isProduction ? plugins.newer(paths.scripts.dest) : gutil.noop())
		.pipe(!isProduction ? plugins.sourcemaps.init() : gutil.noop())
		.pipe(plugins.concat('app.min.js'))
		.pipe(gulp.dest(paths.scripts.dest))
		.pipe(plugins.size())
		.pipe(isProduction ? plugins.uglify() : gutil.noop())
		.pipe(!isProduction ? plugins.sourcemaps.write() : gutil.noop())
		.pipe(gulp.dest(paths.scripts.dest))
		.pipe(plugins.size())
		.pipe(browserSync.reload({stream:true}));
});

// Watch
// Rerun the task when a file changes
gulp.task('watch', function() {
	// Don't watch if production
	if (isProduction) {
		gutil.log(gutil.colors.bgRed("Production Mode"), gutil.colors.underline("Hey you!"), "You're in production mode! Run `gulp --dev` if you want to run the `watch` task.");
		return;
	}

	browserSync.init({
		server: "./"
	});

	gulp.watch(paths.styles.src, ['sass']);
	gulp.watch(paths.scripts.src, ['scripts']);
	gulp.watch("*.html").on('change', reload);
});

gulp.task('default', ['watch', 'sass', 'scripts']);
