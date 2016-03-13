"use strict";
/**
 * 项目启动文件 
 * @authors lux.lu (lf790960502@163.com)
 * @date    2016-03-09 23:23:42
 * @version 1.0 
 */
var port = 8899;

var app = require('koa')(),
	router = require('koa-router')(),
	views = require('co-views'),
	serve = require('koa-static');

/*app.use(function *() {
	this.body = 'hello world';
});	*/

app
	.use(router.routes())
	.use(router.allowedMethods())
	.use(serve(__dirname + '/lib'));
//app.use(router(app));

router.get('/test', function *(){
	//this.body = {'a': 'b'};
	//this.end();
	this.body = 'abc';
});
router.get('/', function *(){
	//this.body = this.params.id;
	this.body = yield render('index/index', {
		user: {
			name: 'lux',
			age: this.params.id
		},
		title: '日记一事'
	});
});

// global middlewares
var render = views('./views/components', {
	map: {
		html: 'ejs'
	}
});


app.listen(port);
console.log('listening on port ' + port);