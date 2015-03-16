(function () {
    function TeamCtrl(api, players) {
        var self = this;
        self.api = api;

        players.forEach(function (player) {
            player.onTeam = true;
        });

        self.players = players;
    }

    angular.module('teamManager').controller('TeamCtrl', TeamCtrl);

    TeamCtrl.prototype.removePlayer = function (player) {
        this.players.splice(this.players.indexOf(player), 1);
        this.api.deleteUserPlayer(player);
    };

})();