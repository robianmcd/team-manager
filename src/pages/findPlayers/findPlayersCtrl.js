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

    FindPlayersCtrl.prototype.searchChanged = function() {
        var self = this;
        this.getMatchingPlayers(this.searchText).then(function (matches) {
            self.typeaheadMatches = matches;
        });
    };

    FindPlayersCtrl.prototype.expandAll = function() {
        this.players.forEach(function (player) {
            player.expanded = true;
        });
    };

    FindPlayersCtrl.prototype.collapseAll = function() {
        this.players.forEach(function (player) {
            player.expanded = false;
        });
    };
})();