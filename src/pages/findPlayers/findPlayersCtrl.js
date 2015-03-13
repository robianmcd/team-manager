(function () {
    function FindPlayersCtrl(api) {
        var self = this;
        this.api = api;

        this.players = [];

        this.api.getAllPlayers().then(function (players) {
            self.players = players;
        });
    }

    angular.module('teamManager').controller('FindPlayersCtrl', FindPlayersCtrl);

    FindPlayersCtrl.prototype.search = function(query) {
        var self = this;

        this.getMatchingPlayers(query).then(function (players) {
            console.log(players);
            self.players = players;
        });
    };

    FindPlayersCtrl.prototype.getMatchingPlayers = function(query) {
        return this.api.searchPlayers(query);
    };

    FindPlayersCtrl.prototype.addPlayer = function(player) {
        player.onTeam = true;
        return this.api.addPlayer(player);
    };
})();