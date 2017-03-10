var gulp = require ('gulp');
gulp.task('jshint',function(){
        /*将默认代码丢入此 */
	gulp.src('app/srcrpts/**/*.js')
	    .pipe(jshint())
	    .pipe(jshint.reporter(stylish));
    });