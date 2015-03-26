(function () {
    function TeamCtrl(api) {
        var self = this;
        self.api = api;

        /*self.players.forEach(function (player) {
            player.onTeam = true;
        });*/
    }

    angular.module('teamManager').controller('TeamCtrl', TeamCtrl);

    TeamCtrl.prototype.removePlayer = function (player) {
        this.players.splice(this.players.indexOf(player), 1);
        this.api.deleteUserPlayer(player);
    };

})();