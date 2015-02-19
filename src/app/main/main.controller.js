'use strict';

angular.module('ngMadLibs')
  .controller('MainCtrl', function ($scope) {
    $scope.keywords = {};
    $scope.keywords = [
      {
        'name': 'femaleName',
        'placeholder': 'female name'
      },
      {
        'name': 'jobTitle',
        'placeholder': 'job title'
      },
      {
        'name': 'tediousTask',
        'placeholder': 'tedious task'
      },
      {
        'name': 'dirtyTask',
        'placeholder': 'dirty task'
      },
      {
        'name': 'celebrity',
        'placeholder': 'celebrity'
      },
      {
        'name': 'uselessSkill',
        'placeholder': 'useless skill'
      },
      {
        'name': 'obnoxiousCelebrity',
        'placeholder': 'obnoxious celebrity'
      },
      {
        'name': 'hugeNumber',
        'placeholder': 'huge number'
      },
      {
        'name': 'adjective',
        'placeholder': 'adjective'
      }
    ];
    angular.forEach($scope.keywords, function(keyword) {
      keyword.rank = Math.random();
    });
  });
