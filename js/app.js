angular.module('angularChromeExtension', ['ui.router', 'angularChromeExtension.controllers'])
  .config(function($stateProvider){

  $stateProvider

  .state('index', {
    url:'/index',
    templateUrl: './index.html',
    controller: 'IndexCtrl'
  })

  })
