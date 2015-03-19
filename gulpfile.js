var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    templateCache = require('gulp-angular-templatecache'),
    ngAnnotate = require('gulp-ng-annotate');


gulp.task('templateCache', function () {
    return gulp.src(['src/**/*.html', '!src/index.html']);
});

gulp.task('build', function () {
    return gulp.src('src/**/*.js')
        .pipe(gulp.dest('build'));
});

