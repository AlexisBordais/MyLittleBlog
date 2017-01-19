((app) => {
  'use strict';
  app.component('blogsList', {
    templateUrl: 'js/components/blogsList/blogsList.html',
    controller: ['$http', function($http) {

      this.blogs = []

      $http.get('blogsList.json').then((response) => {
          this.blogs = response.data
      })



    }]
  })
})(angular.module('app.blogsList'))
