## gulp　资料收集

1. gulp 事件监听
> gulp的任务系统是基于[orchestrator](https://github.com/orchestrator/orchestrator/blob/master/index.js)。提供了start,stop,err,task_start,task_stop,task_err,task_not_found,task_recursion几个事件。
可以像下面这样监听
>    var gulp = require('gulp');
    gulp.task('default',function(){
         return gulp.src('./**/*.*')
         .pipe()
    }).on('task_start',function(){
	    console.log('start');
	}).on('task_err',function(err){
	    console.log('error');
	}).on('task_stop',function(){
	    console.log('stop');
    });
> 也有现成的插件[gulp-plumber](https://www.npmjs.com/package/gulp-plumber)来监听任务异常。