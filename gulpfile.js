// Gulp
var gulp = require('gulp');

// Plugins
var autoprefix = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var cache = require('gulp-cache');
var cp = require('child_process');
var del = require('del');
var debug = require('gulp-debug');
var filter = require('gulp-filter');
var flatten = require('gulp-flatten');
var fs = require('fs');
var imagemin = require('gulp-imagemin');
var jshint = require('gulp-jshint');
var mainBowerFiles = require('gulp-main-bower-files');
var minifyCSS = require('gulp-clean-css');
var notify = require('gulp-notify'); // requires Growl on Windows
var path = require('path');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var sassIncl = require('sass-include-paths');

// Define our paths
var paths = {
	scripts: 'js/**/*.js',
	styles: ['style.scss', 'sass/**/*.scss'],
	fonts: '_sass/fonts/**/*',
	images: 'images/**/*.{png,jpg,jpeg,gif,svg}',
	html: ['_posts/*.{html,md}', '_includes/*.{html,md}', '_layouts/*.{html,md}', '*.{html,md}'],
	bowerDir: './bower_components'
};

var destPaths = {
	scripts1: '_site/build/js',
	scripts2: 'build/js',
	styles1: '_site/build/css',
	styles2: 'build/css',
	fonts1: '_site/build/fonts',
	fonts2: 'build/fonts',
	images1: '_site/build/images',
	images2: 'build/images'
};

// Error Handling
// Send error to notification center with gulp-notify
var handleErrors = function() {
	notify.onError({
		title: "Compile Error",
		message: "<%= error.message %>"
	}).apply(this, arguments);
	this.emit('end');
};

gulp.task('jekyll', function(done) {
	browserSync.notify('Compiling Jekyll');
	return cp.spawn('jekyll.bat', ['build'], {stdio:'inherit'})
		.on('close', done);
});

//Make any bower-installed css files scss to prevent extra requests
gulp.task('css-to-scss', function() {
	var sassPaths = sassIncl.bowerComponentsSync();
	return sassPaths.map(function(file) {
		var pieces = file.split("\\");
		var fileName = pieces.pop();
		fileName = fileName.replace('.min', '');
		var scssFileName = fileName.replace('.css', '.scss');
		var underscoreTest = pieces.join('\\')+'\\_'+scssFileName;
		var scssTest = pieces.join('\\')+'\\'+scssFileName;
		try {
			uStats = fs.lstatSync(underscoreTest);
		}
		catch(e) {
			try {
				sStats = fs.lstatSync(scssTest);
			}
			catch(e) {
				gulp.src(file)
					.pipe(rename(function(path) {
						path.basename = '_'+path.basename;
						path.basename = path.basename.replace('.min', '');
						path.extname = '.scss';
					}))
					.pipe(gulp.dest(path.dirname(file)));
			}
		}
	});
});

// Compile our Sass
gulp.task('styles', ['css-to-scss'], function() {
	var includePaths = sassIncl.bowerComponentsSync();
	return gulp.src(paths.styles)
		.pipe(plumber())
		.pipe(sass({
			includePaths: includePaths,
			errLogToConsole:true
		}))
		.on('error', handleErrors)
		.pipe(autoprefix())
		.pipe(rename('style.css'))
		.pipe(gulp.dest(destPaths.styles1))
		.pipe(gulp.dest(destPaths.styles2))
		.pipe(notify('Styles task complete!'));
});

gulp.task('build-styles', ['css-to-scss'], function() {
	var includePaths = sassIncl.bowerComponentsSync();
	return gulp.src(paths.styles)
		.pipe(plumber())
		.pipe(sass({
			includePaths: includePaths,
			errLogToConsole:true
		}))
		.on('error', handleErrors)
		.pipe(autoprefix({cascade:false}))
		.pipe(minifyCSS())
		.pipe(rename('style.css'))
		.pipe(gulp.dest(destPaths.styles1))
		.pipe(gulp.dest(destPaths.styles2))
		.pipe(notify('Styles task complete!'));
});

/**Scripts tasks not currently used**/
// Lint, minify, and concat our JS
gulp.task('scripts', function() {
	var filterJS = filter('**/*.js', { restore: true });
	return gulp.src('.bower.json')
		.pipe(mainBowerFiles())
		.pipe(plumber())
		.pipe(filterJs)
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest(destPaths.scripts1))
		.pipe(gulp.dest(destPaths.scripts2))
		.pipe(notify('Scripts tasks complete!'));
});

gulp.task('build-scripts', function() {
	var filterJS = filter('**/*.js', { restore: true });
	return gulp.src('.bower.json')
		.pipe(mainBowerFiles())
		.pipe(plumber())
		.pipe(filterJs)
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(uglify())
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest(destPaths.scripts1))
		.pipe(gulp.dest(destPaths.scripts2))
		.pipe(notify('Scripts tasks complete!'));
	});

/*gulp.task('clean-images', function(cb) {
	del([destPaths.images], cb);
});*/

// Compress Images
gulp.task('images', function() {
	return gulp.src(paths.images)
		.pipe(plumber())
		.pipe(gulp.dest(destPaths.images1))
		.pipe(gulp.dest(destPaths.images2))
});

// Compress Images for Build
gulp.task('build-images', function() {
	return gulp.src(paths.images)
		.pipe(plumber())
		.pipe(imagemin({
			progressive: true,
			interlaced: true
		}))
		.pipe(gulp.dest(destPaths.images1))
		.pipe(gulp.dest(destPaths.images2))
});

// Watch for changes made to files
gulp.task('watch', function() {
	gulp.watch(paths.scripts, ['scripts']);
	gulp.watch(paths.styles, ['styles']);
	gulp.watch(paths.images, ['images']);
	gulp.watch(paths.html, ['jekyll']);
});

// Browser Sync - autoreload the browser
// Additional Settings: http://www.browsersync.io/docs/options/
gulp.task('browser-sync', function () {
	var files = [
		'**/*'
	];
	browserSync.init(files, {
		server: {
			baseDir:'./_site'
		}
	});
});

gulp.task('clean', function(cb) {
	//return gulp.src('build').pipe(clean());
	del(['build']).then(cb());
});

gulp.task('clear-cache', function() {
	cache.clearAll();
});

gulp.task('move-fonts', function() {
	var filterFonts = filter('**/*.{eot,woff,woff2,svg,tff}', { restore: true });
	return gulp.src('.bower.json')
		.pipe(mainBowerFiles())
		.pipe(filterFonts)
		.pipe(flatten())
		.pipe(gulp.dest(destPaths.fonts1))
		.pipe(gulp.dest(destPaths.fonts2));
});

// Default Task
gulp.task('default', function(cb) {
	runSequence('jekyll', 'clean', 'clear-cache' ,'images', 'styles', 'move-fonts', 'browser-sync', 'watch', cb);
});

// Build Task
gulp.task('build', function(cb) {
	runSequence('jekyll', 'clean', 'clear-cache', 'build-images', 'build-styles', 'move-fonts', cb);
});
