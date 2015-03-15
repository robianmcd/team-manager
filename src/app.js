(function () {
    var app = angular.module('teamManager', ['ngRoute', 'ngMessages', 'ui.bootstrap']);

    app.config(function ($routeProvider) {

        $routeProvider
            .when('/team', {
                templateUrl: 'pages/team/team.html',
                controller: 'TeamCtrl as ctrl',
                resolve: {
                    players: function (api) {
                        return api.getUserPlayers();
                    }
                }
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
