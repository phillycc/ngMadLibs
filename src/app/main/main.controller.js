'use strict';

angular.module('ngMadLibs')
  .controller('MainCtrl', function ($scope) {

    $scope.keywords = [
      {
        'name': 'femaleName',
        'placeholder': 'female name',
        'type': 'text'
      },
      {
        'name': 'jobTitle',
        'placeholder': 'job title',
        'type': 'text'
      },
      {
        'name': 'tediousTask',
        'placeholder': 'tedious task',
        'type': 'text'
      },
      {
        'name': 'dirtyTask',
        'placeholder': 'dirty task',
        'type': 'text'
      },
      {
        'name': 'celebrity',
        'placeholder': 'celebrity',
        'type': 'text'
      },
      {
        'name': 'uselessSkill',
        'placeholder': 'useless skill',
        'type': 'text'
      },
      {
        'name': 'obnoxiousCelebrity',
        'placeholder': 'obnoxious celebrity',
        'type': 'text'
      },
      {
        'name': 'hugeNumber',
        'placeholder': 'huge number',
        'type': 'number'
      },
      {
        'name': 'adjective',
        'placeholder': 'adjective',
        'type': 'text'
      }
    ];

    $scope.$this = $scope;

    angular.forEach($scope.keywords, function(keyword) {
      keyword.rank = Math.random();
    });

    $scope.submit = function(){
      $scope.showMadlibForm = false;
    }

  });
