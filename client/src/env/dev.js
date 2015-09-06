angular.module('theDeskbook.config',[])
.constant('server', {
  domain: 'localhost',
  port: '3000',
  baseUrl: '//localhost:3000/'
})
.constant('apis', {
	register: 'register',
	feed:'fetchStatus'
})