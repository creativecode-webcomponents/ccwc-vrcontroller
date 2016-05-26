var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var ghPages = require('gulp-gh-pages');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('vrcontroller', function () {
    return browserify({
        entries: 'src/vrcontroller.es6',
        standalone: 'ccwc',
        extensions: ['es2015'], debug: true})
        .transform(babelify)
        .bundle()
        .pipe(source('vrcontroller.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('ccwc-sensortag-visualizer', function () {
    return browserify({
        entries: 'src/ccwc-sensortag-visualizer.es6',
        standalone: 'CCWCSensorTagVisualizer',
        extensions: ['es2015'], debug: true})
        .transform(babelify)
        .bundle()
        .pipe(source('ccwc-sensortag-visualizer.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./src'));
});


gulp.task('deploy', function() {
    return gulp.src(['./**', '!./node_modules/**'])
        .pipe(ghPages());
});



gulp.task('default', ['vrcontroller', 'ccwc-sensortag-visualizer']);