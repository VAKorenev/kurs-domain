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
    when('/myhistory', {
        templateUrl: './_myhistory/history.html',
        controller: 'myhistoryCtrl'
    }).
    when('/news', {
        templateUrl: './_news/news.html',
        controller: 'newsCtrl'
    }).
    when('/myphoto', {
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
    when('/roman.h', {
        templateUrl: './_personalPage/roman.h.html',
        controller: 'authCtrl'
    }).
    otherwise({
        redirectTo: '/history'
    });
}]);

App.controller('historyCtrl',['$scope','$http', 'dataFctrl', function($scope, $http, dataFctrl){

    $scope.dataFctrl = dataFctrl;
    $http.get('./_history/history.json')
    .then(function(responce){
        $scope.historys = responce.data;
    });
    $scope.message = 'Истории СПВВИУС';
    console.log("Url", $scope.message);
}]);

App.controller('historyOf22kursCtrl',['$scope','$http','$location','dataFctrl', function($scope, $http, $location, dataFctrl){
    // $location.path("#history");
    console.log("Надо пройти регистрацию");
}]);

App.controller('myhistoryCtrl',['$scope','$http','$location','dataFctrl', function($scope, $http, $location, dataFctrl){

    if (!dataFctrl.auth){
        $location.path("#history");
        console.log("Надо пройти регистрацию");
    } else {
        $scope.dataFctrl = dataFctrl;
        $http.get('./_myhistory/history.json')
        .then(function(responce){
            $scope.historys = responce.data;
        });
    }
}]);

App.controller('newsCtrl',['$scope','$http', 'dataFctrl', function($scope, $http, dataFctrl){
    $scope.dataFctrl = dataFctrl;
    $scope.message = 'Новости';
}]);

App.controller('photoCtrl',['$scope','$http','$location','dataFctrl', function($scope, $http, $location, dataFctrl){
    if (!dataFctrl.auth){
        $location.path("#history");
        console.log("Надо пройти регистрацию");
    } else {
        $scope.dataFctrl = dataFctrl;
        $scope.message = 'Новости';
        console.log("Регистрация: ", dataFctrl.auth);
    }
}]);

App.controller('meetingsCtrl',['$scope','$http', 'dataFctrl', function($scope, $http, dataFctrl){
    $scope.dataFctrl = dataFctrl;
    $scope.message = 'Новости';
}]);

App.controller('authCtrl',['$scope','$http','$location','dataFctrl', function($scope, $http, $location, dataFctrl){
    $scope.dataFctrl = dataFctrl;
    $scope.auth = function(){
        // console.log("Логин: ", $scope.login, "Пароль: ", $scope.password, "Auth: ", dataFctrl.auth);
        dataFctrl.auth = !dataFctrl.auth;
        if (dataFctrl.auth){
            $location.path("#history");
            dataFctrl.showSecureForm = false;
        }        
    };
    // console.log("Сообщение: ",$scope.formName);
}]);
/*Конец блока отображения областей изменения данных*/

App.controller('menuCtrl',['$scope', 'dataFctrl', function($scope, dataFctrl){
    $scope.dataFctrl = dataFctrl;
    $scope.auth = dataFctrl.auth;
    $scope.showSecureForm = function(){
        dataFctrl.showSecureForm = true;
    };
    console.log("$scope.auth: ", $scope.auth);
}]);

/*Блок фабрика для обмена данными между контролами*/
App.factory('dataFctrl',['$http',function($http){
    return {
        visible: true,
        auth: false
    };
}]);
/*Конец блока фабрика для обмена данными между контролами*/
