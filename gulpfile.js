const gulp = require('gulp')
const minifycss = require('gulp-clean-css')
const uglify = require('gulp-uglify')
const htmlmin = require('gulp-htmlmin')
const cssnano = require('gulp-cssnano')
const htmlclean = require('gulp-htmlclean')
const del = require('del')
const babel = require('gulp-babel')
const autoprefixer = require('gulp-autoprefixer')
const connect = require('gulp-connect')
const pug = require('gulp-pug')
const less = require('gulp-less')

const config = require('./config.json')

gulp.task('clean', function () {
	return del(['./dist/css/', './dist/js/'])
})

// Development CSS task - fast compilation without minification
gulp.task('css:dev', function () {
	return gulp
		.src('./src/css/*.less')
		.pipe(less().on('error', function(err) {
			console.log(err);
			this.emit('end');
		}))
		.pipe(gulp.dest('./dist/css'))
		.pipe(connect.reload())
})

// Production CSS task - full optimization
gulp.task('css', function () {
	return gulp
		.src('./src/css/*.less')
		.pipe(less().on('error', function(err) {
			console.log(err);
			this.emit('end');
		}))
		.pipe(minifycss({ compatibility: 'ie8' }))
		.pipe(autoprefixer({ overrideBrowserslist: ['last 2 version'] }))
		.pipe(cssnano({ reduceIdents: false }))
		.pipe(gulp.dest('./dist/css'))
})

gulp.task('html', function () {
	return gulp
		.src('./dist/index.html')
		.pipe(htmlclean())
		.pipe(htmlmin())
		.pipe(gulp.dest('./dist'))
})

// Development JS task - simplified (no transpilation)
gulp.task('js:dev', function () {
	return gulp
		.src('./src/js/*.js')
		.pipe(gulp.dest('./dist/js'))
		.pipe(connect.reload())
})

// Production JS task - simplified (no transpilation to avoid hanging)
gulp.task('js', function () {
	return gulp
		.src('./src/js/*.js')
		.pipe(gulp.dest('./dist/js'))
})

// Development pug task with livereload
gulp.task('pug:dev', function () {
	return gulp
		.src('./src/index.pug')
		.pipe(pug({ data: config }))
		.pipe(gulp.dest('./dist'))
		.pipe(connect.reload())
})

// Production pug task
gulp.task('pug', function () {
	return gulp
		.src('./src/index.pug')
		.pipe(pug({ data: config }))
		.pipe(gulp.dest('./dist'))
})

gulp.task('assets', function () {
	return gulp
		.src(['./src/assets/**/*'])
		.pipe(gulp.dest('./dist/assets'));
})

// Development build - fast, no minification
gulp.task('build:dev', gulp.series('clean', 'assets', 'pug:dev', 'css:dev', 'js:dev'))

// Production build - full optimization
gulp.task('build', gulp.series('clean', 'assets', 'pug', 'css', 'js', 'html'))
gulp.task('default', gulp.series('build'))

gulp.task('watch', function () {
	// Start development server
	connect.server({
		root: 'dist',
		livereload: true,
		port: 3000
	})

	// Watch files and use dev tasks
	gulp.watch('./src/components/*.pug', gulp.parallel('pug:dev'))
	gulp.watch('./src/index.pug', gulp.parallel('pug:dev'))
	gulp.watch('./src/css/**/*.less', gulp.parallel('css:dev'))
	gulp.watch('./src/js/*.js', gulp.parallel('js:dev'))
	gulp.watch('./config.json', gulp.parallel('pug:dev'))
})
