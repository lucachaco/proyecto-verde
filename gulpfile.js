var gulp = require('gulp');

var less = require('gulp-less');
var path = require('path');

gulp.task('bootstrap', function () {
    return gulp.src('./assets/less/custom-bootstrap/custom-bootstrap.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('./assets/css/vendor'));
});

gulp.task('less', function () {
    return gulp.src('./assets/less/theme.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('./assets/css'));
});