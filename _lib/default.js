'use strict';

var App = angular.module('App',['ngRoute']);

/*Блок отображения div'а областей изменения данных*/

App.config(['$routeProvider', function($routeProvider){
    $routeProvider.
    when('/history', {
        templateUrl: './_history/history.html',
        controller: 'historyCtrl'
    }).
    when('/historyOf22kurs', {
        templateUrl: './_history_22/history.html',
        controller: 'historyOf22kursCtrl'
    }).
    when('/news', {
        templateUrl: './_news/news.html',
        controller: 'newsCtrl'
    }).
    when('/photo', {
        templateUrl: './_photo/photos.html',
        controller: 'photoCtrl'
    }).
    when('/meetings', {
        templateUrl: './_meetings/meetings.html',
        controller: 'meetingsCtrl'
    }).
    when('/auth', {
        templateUrl: './_personalPage/auth.html',
        controller: 'authCtrl'
    }).
    otherwise({
        redirectTo: '/news'
    });
}]);

App.controller('historyCtrl',['$scope','$http', 'dataFctrl', function($scope, $http, dataFctrl){

    $scope.dataFctrl = dataFctrl;
    $http.get('./_history/history.json')
    .then(function(responce){
        $scope.historys = responce.data;
    });
    $scope.message = 'История СПВВИУС';
    console.log("Url", $scope.message);
}]);

App.controller('historyOf22kursCtrl',['$scope','dataFctrl', function($scope, dataFctrl){

    $scope.dataFctrl = dataFctrl;
    $scope.message = 'История 22 курса';
    // console.log("Url", $scope.message);
}]);

App.controller('newsCtrl',['$scope','$http', 'dataFctrl', function($scope, $http, dataFctrl){
    $scope.dataFctrl = dataFctrl;
    $scope.message = 'Новости';
}]);

App.controller('photoCtrl',['$scope','$http', 'dataFctrl', function($scope, $http, dataFctrl){
    $scope.dataFctrl = dataFctrl;
    $scope.message = 'Новости';
}]);

App.controller('meetingsCtrl',['$scope','$http', 'dataFctrl', function($scope, $http, dataFctrl){
    $scope.dataFctrl = dataFctrl;
    $scope.message = 'Новости';
}]);

App.controller('authCtrl',['$scope','$http', 'dataFctrl', function($scope, $http, dataFctrl){
    $scope.dataFctrl = dataFctrl;
    $scope.message = 'Новости';
}]);
/*Конец блока отображения областей изменения данных*/

App.controller('menuCtrl',['$scope', 'dataFctrl', function($scope, dataFctrl){
    $scope.dataFctrl = dataFctrl;
    $scope.message = 'Персональная информация';
}]);

/*Блок фабрика для обмена данными между контролами*/
App.factory('dataFctrl',['$http',function($http){
    return {
        visible: true
    };
}]);
/*Конец блока фабрика для обмена данными между контролами*/
