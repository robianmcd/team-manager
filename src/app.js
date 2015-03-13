(function () {
    var app = angular.module('teamManager', ['ngRoute', 'ui.bootstrap']);

    app.config(function ($routeProvider) {

        $routeProvider
            .when('/team', {
                templateUrl: 'pages/team/team.html',
                controller: 'TeamCtrl as ctrl'
            })
            .when('/findPlayers', {
                templateUrl: 'pages/findPlayers/findPlayers.html',
                controller: 'FindPlayersCtrl as ctrl'
            })
            .when('/createPlayer', {
                templateUrl: 'pages/createPlayer/createPlayer.html',
                controller: 'CreatePlayerCtrl as ctrl'
            })
            .otherwise({
                redirectTo: '/team'
            });
    })
})();
