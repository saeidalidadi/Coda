var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect',function(a){
	connect.server({
		root: 'demo',
		livereload: true
	});
});

gulp.task('all', function(){
	gulp.src('demo/*.html')
		.pipe(connect.reload());
})

gulp.task('default',['connect', 'all']);