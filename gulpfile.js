/**
 * @author lux.lu
 * @date 2016-03-19
 */

 var gulp = require('gulp'),
     liveReload = require('gulp-livereload');

 //设置任务
//liveReload({start: true});
gulp.task('reload', function(){
	liveReload();
});
gulp.task('watch-reload', function () {
	liveReload.listen();
	gulp.watch('views/components/index/index.html', ['reload']);
});

//默认任务
//gulp 的事件监听 https://segmentfault.com/q/1010000002945034
gulp.task('default', ['watch-reload'])
    .on('task_start', function(){
    	console.log('----gulp task start----');
    })
    .on('task_err', function(){
    	console.log('----gulp task err----');
    })
    .on('task_stop', function (){
    	console.log('----gulp taks stop----');
    });