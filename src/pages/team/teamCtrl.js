(function () {
    function TeamCtrl(api) {
        var self = this;

        api.getUserPlayers().then(function (players) {
            players.forEach(function (player) {
                player.onTeam = true;
            });

            self.players = players;
        });
    }

    angular.module('teamManager').controller('TeamCtrl', TeamCtrl);

})();