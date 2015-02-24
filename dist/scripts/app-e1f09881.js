"use strict";angular.module("ngMadLibs",["ngAnimate","ngRoute","ngMessages"]).config(["$routeProvider",function(e){e.when("/",{templateUrl:"app/main/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("ngMadLibs").controller("NavbarCtrl",["$scope",function(e){e.date=new Date}]),angular.module("ngMadLibs").controller("MainCtrl",["$scope",function(e){e.keywords=[{name:"femaleName",placeholder:"female name",type:"text"},{name:"jobTitle",placeholder:"job title",type:"text"},{name:"tediousTask",placeholder:"tedious task",type:"text"},{name:"dirtyTask",placeholder:"dirty task",type:"text"},{name:"celebrity",placeholder:"celebrity",type:"text"},{name:"uselessSkill",placeholder:"useless skill",type:"text"},{name:"obnoxiousCelebrity",placeholder:"obnoxious celebrity",type:"text"},{name:"hugeNumber",placeholder:"huge number",type:"number"},{name:"adjective",placeholder:"adjective",type:"text"}],e.$this=e,angular.forEach(e.keywords,function(e){e.rank=Math.random()}),e.submit=function(){console.log(e.madLibForm.length)}}]),angular.module("ngMadLibs").run(["$templateCache",function(e){e.put("app/main/main.html",'<div class="container" ng-controller="MainCtrl"><header class="row"><div class="col-sm-4"><img src="assets/images/mad-lib-happy-face.png"></div><div class="col-sm-8"><img class="img-responsive" src="assets/images/ng-mad-libs-logo.png"><h1>Automate This!</h1></div></header><div class="row" id="formML"><form class="col-sm-12 reset" role="form" name="madLibForm" ng-submit="submit()"><h3>Provide the following words:</h3><div class="col-sm-6 col-md-4" ng-repeat="keyword in keywords | orderBy:\'rank\'"><input type="{{ keyword.type }}" class="form-control" ng-model="$this[keyword.name]" placeholder="{{ keyword.placeholder }}" ng-minlength="3" required=""><br><div ng-messages="madLibForm.$this[keyword.name].$error"><div ng-message="required">This is a required field</div></div></div><button class="btn btn-default">Generate My Mad Lib</button></form><div><footer></footer></div></div></div>'),e.put("components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse" ng-controller="NavbarCtrl"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="nav navbar-nav navbar-right"><li>Current date: {{ date | date:\'yyyy-MM-dd\' }}</li></ul></div></div></nav>')}]);