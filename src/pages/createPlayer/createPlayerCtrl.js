(function(){
    function CreatePlayerCtrl($controller, api) {
        this.$controller = $controller;
        this.api = api;
        this.positions = ['Attacker', 'Midfielder', 'Defender', 'Goalkeeper'];
    }

    angular.module('teamManager').controller('CreatePlayerCtrl', CreatePlayerCtrl);

    CreatePlayerCtrl.prototype.addPlayer = function(valid) {
        if(valid) {
            var newPlayer = this.$controller('Player', {serializedPlayer: this.player});
            this.api.createPlayer(newPlayer);
        }
    };
})();