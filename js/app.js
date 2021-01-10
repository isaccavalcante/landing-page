import angular from 'angular';
import ngResource from 'angular-resource';
import ngAnimate from 'angular-animate';
import toastr from 'angular-toastr';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../node_modules/angular-toastr/dist/angular-toastr.css';
import '../css/main.css';
import '../css/font-style.css';

import IndexCtrl from './indexCtrl';
import ApiResource from './api-resource';

angular
	.module('deploygram', [ngResource, ngAnimate, toastr])
	.factory('API', ApiResource)
	.controller('indexCtrl', IndexCtrl);