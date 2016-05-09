angular.module('angularChromeExtension.controllers', [])

.controller('IndexCtrl', function(){

  this.submission = '';

  this.submitAction = function(){
    console.log("this is the input", this.submission);
  }

})
