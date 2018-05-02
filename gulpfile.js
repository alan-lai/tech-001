const gulp = require('gulp');
const bower = require('gulp-bower');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const vueify = require('gulp-vueify');

gulp.task('bower', () => {
    return bower()
        .pipe(gulp.dest('./bower_components'))
});

gulp.task('sass', function () {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:watch', () => {
    gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('fonts', () => {
    return gulp.src([
        './bower_components/font-awesome/web-fonts-with-css/webfonts/**.*',
        './bower_components/lato/font/lato-black/**.*',
        './bower_components/lato/font/lato-bold/**.*',
        './bower_components/lato/font/lato-regular/**.*',
        './bower_components/playfair-webfont/fonts/PlayfairDisplay-Regular.*',
        './bower_components/material-icons/iconfont/MaterialIcons-Regular.*'
    ])
    .pipe(gulp.dest('./dist/webfonts/'));
});

gulp.task('load-js-libs', () => {
    return gulp.src([
        './bower_components/vue/dist/vue.min.js'
    ])
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('minify-js', () => {
    return gulp.src(
        [
            './src/js/*.js'
        ]
    )
    .pipe(babel({ 
        presets: ['env']
    }))
    .pipe(concat('global.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('js:watch', () => {
    gulp.watch('./src/js/**/*.js', ['minify-js']);
});

// gulp.task('vueify', function () {
//     return gulp.src('/src/components/**/*.vue')
//         .pipe(vueify())
//         .pipe(gulp.dest('./dist/js/'));
// });

gulp.task('default', ['bower', 'fonts', 'sass', 'load-js-libs', 'minify-js', 'sass:watch', 'js:watch']);