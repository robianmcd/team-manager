(function () {
    var PLAYERS_URL = '/api/players/{0}';
    var SEARCH_PLAYERS_URL = '/api/search/players?query={0}';
    var USER_PLAYERS_URL = '/api/user/players';
    var USER_PLAYER_URL = '/api/user/players/{0}';

    function Api($http, $controller, $q, Player) {
        this.$http = $http;
        this.$controller = $controller;
        this.$q = $q;
        this.Player = Player;
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

    Api.prototype.getPlayer = function (id) {
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
            //convert ids to players
            .then(function (responce) {
                var playerIds = responce.data;

                return self.$q.all(playerIds.map(function (id) {
                    return self.getPlayer(id);
                }))
            })
            //convert server players to client players
            .then(function (players) {
                if(players === undefined) {
                    return self.$q.reject('some reason');
                }

                return players.map(function (player) {
                    return self.$controller('Player', {serializedPlayer: player});
                });
            })
            .finally(function () {
                this.loading = false;
            });
    };

    Api.prototype.deleteUserPlayer = function (player) {
        return this.$http.delete(USER_PLAYER_URL.format(player.id));
    };

    Api.prototype.createPlayer = function (player) {
        return this.$http.post(PLAYERS_URL.format(''), player.serialize());
    };
})();