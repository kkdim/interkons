//Required

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var browserSync = require("browser-sync");
var reload = browserSync.reload;

//Style Task
gulp.task("sass", function(){
	gulp.src("app/sass/**/*.scss")
		.pipe(plumber())
		.pipe(sass())
		.pipe(gulp.dest("app/assets/css"))
		.pipe(reload({stream:true}));
});

// Browser-Sync Task
gulp.task("browser-sync", function(){
  browserSync({
    ghostMode: false,
    server:{
      baseDir:"./app/"
    }
  })
});

//Watch Task
gulp.task("watch",function(){
  gulp.watch("app/sass/**/*.scss",['sass']);
  gulp.task("default",['sass' , 'watch']);
});

//Default
gulp.task("default",['scripts' , 'styles', 'html', 'browser-sync', 'watch']);