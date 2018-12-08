var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins');


gulp.task('styles', function() {
    
    //return for asynchronize
    return gulp.src('./app/assets/styles/styles.css')
                //use auto prefixer pkg with postcss func| PostCSS accepts an array
                //add cssImport at very begining
                .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
                .on('error', function(errorInfo) {
                    console.log(errorInfo.toString());
                    this.emit('end');
                })
                .pipe(gulp.dest('./app/temp/styles'));
});