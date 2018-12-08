var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('watch', function() {

    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });

    //leverage the gulp-watch plugin
    watch('./app/index.html', function() {
        browserSync.reload();
    });

    //  /**/ means hypothetical sub folder
    watch('./app/assets/styles/**/*.css', function() {
        // add this as cssInject dependency task
        // gulp.start('styles');
        gulp.start('cssInject');
    });

});

// ['styles'] is the dependency task
gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./app/temp/styles/styles.css').pipe(browserSync.stream());
});