'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
//
//some performance optimization
//have no sense render bootstrap each time
//

gulp.task('build-sass', () => {
    gulp.src('sass/app.sass')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});