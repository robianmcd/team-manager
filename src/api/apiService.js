(function () {
    var PLAYERS_URL = '/api/players/{0}';
    var SEARCH_PLAYERS_URL = '/api/search/players?query={0}';
    var USER_PLAYERS_URL = '/api/user/players';

    function Api($http, $controller, $q) {
        this.$http = $http;
        this.$controller = $controller;
        this.$q = $q;
    }

    angular.module('teamManager').service('api', Api);


    Api.prototype.searchPlayers = function (query) {
        var self = this;

        return this.$http.get(SEARCH_PLAYERS_URL.format(query || ''))
            .then(function (response) {
                return response.data.map(function (player) {
                    return self.$controller('Player', {serializedPlayer: player});
                });
            });
    };

    Api.prototype.getAllPlayers = function () {
        var self = this;

        return this.$http.get(PLAYERS_URL.format('')).then(function (response) {
            return response.data.map(function (player) {
                return self.$controller('Player', {serializedPlayer: player});
            });
        });
    };

    Api.prototype.getPlayer = function(id) {
        return this.$http.get(PLAYERS_URL.format(id)).then(function (response) {
            return response.data;
        });
    };

    Api.prototype.addPlayer = function (player) {
        return this.$http.post(USER_PLAYERS_URL, player.serialize());
    };

    Api.prototype.getUserPlayers = function () {
        var self = this;

        return this.$http.get(USER_PLAYERS_URL)
            .then(function (response) {
                var playerIds = response.data;

                return self.$q.all(playerIds.map(function (id) {
                    return self.getPlayer(id);
                }));
            })
            .then(function (players) {
                return players.map(function (player) {
                    return self.$controller('Player', {serializedPlayer: player});
                });
            });
    };
})();