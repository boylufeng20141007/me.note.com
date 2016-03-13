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
	views = require('co-views');

/*app.use(function *() {
	this.body = 'hello world';
});	*/

app
	.use(router.routes())
	.use(router.allowedMethods());
//app.use(router(app));

router.get('/test', function *(){
	//this.body = {'a': 'b'};
	//this.end();
	this.body = 'abc';
});
router.get('/user/:id', function *(){
	//this.body = this.params.id;
	this.body = yield render('index', {
		user: {
			name: 'lux',
			age: this.params.id
		}
	});
});

// global middlewares
var render = views('./views', {
	map: {
		html: 'ejs'
	}
});


app.listen(port);
console.log('listening on port ' + port);