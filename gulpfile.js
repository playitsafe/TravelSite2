require('./gulp/tasks/styles');
require('./gulp/tasks/watch');


//==============================================================
// Original code

//import npm pkg
// var gulp = require('gulp'),
//     watch = require('gulp-watch'),

    //moved to styles.js
    // postcss = require('gulp-postcss'),
    // autoprefixer = require('autoprefixer'),
    // cssvars = require('postcss-simple-vars'),
    // nested = require('postcss-nested'),
    // cssImport = require('postcss-import')
    // browserSync = require('browser-sync').create();


//moved to styles.js
// gulp.task('styles', function() {
    
//     //return for asynchronize
//     return gulp.src('./app/assets/styles/styles.css')
//                 //use auto prefixer pkg with postcss func| PostCSS accepts an array
//                 //add cssImport at very begining
//                 .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
//                 .pipe(gulp.dest('./app/temp/styles'));
// });


//removed to the watch.js
// gulp.task('watch', function() {

//     browserSync.init({
//         notify: false,
//         server: {
//             baseDir: "app"
//         }
//     });

//     //leverage the gulp-watch plugin
//     watch('./app/index.html', function() {
//         browserSync.reload();
//     });

//     //  /**/ means hypothetical sub folder
//     watch('./app/assets/styles/**/*.css', function() {
//         // add this as cssInject dependency task
//         // gulp.start('styles');
//         gulp.start('cssInject');
//     });

// });

// ['styles'] is the dependency task
// gulp.task('cssInject', ['styles'], function() {
//     return gulp.src('./app/temp/styles/styles.css').pipe(browserSync.stream());
// });