"use strict";angular.module("ngMadLibs",["ngAnimate","ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"app/main/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("ngMadLibs").controller("NavbarCtrl",["$scope",function(a){a.date=new Date}]),angular.module("ngMadLibs").controller("MainCtrl",["$scope",function(a){a.keywords=[{name:"femaleName",placeholder:"female name"},{name:"jobTitle",placeholder:"job title"},{name:"tediousTask",placeholder:"tedious task"},{name:"dirtyTask",placeholder:"dirty task"},{name:"celebrity",placeholder:"celebrity"},{name:"uselessSkill",placeholder:"useless skill"},{name:"obnoxiousCelebrity",placeholder:"obnoxious celebrity"},{name:"hugeNumber",placeholder:"huge number"},{name:"adjective",placeholder:"adjective"}],angular.forEach(a.keywords,function(a){a.rank=Math.random()})}]),angular.module("ngMadLibs").run(["$templateCache",function(a){a.put("app/main/main.html",'<div class="container"><div class="jumbotron text-center"><p><img src="assets/images/mad-lib-happy-face.png"></p><p><img src="assets/images/ng-mad-libs-logo.png"></p><h1>Automate This!</h1></div><div class="row"><form class="col-sm-12 reset" role="form" name="madLibForm"><div class="col-sm-6 col-md-4" ng-repeat="keyword in keywords | orderBy:\'rank\'"><input name="input" class="form-control" type="text" placeholder="{{ keyword.placeholder }}"><br><div></div></div></form><div><div class="footer"></div></div></div></div>'),a.put("components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse" ng-controller="NavbarCtrl"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="nav navbar-nav navbar-right"><li>Current date: {{ date | date:\'yyyy-MM-dd\' }}</li></ul></div></div></nav>')}]);