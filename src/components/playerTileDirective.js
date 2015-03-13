(function(){
    angular.module('teamManager').directive('kgPlayerTile', function () {
        return {
            restrict: 'E',
            templateUrl: 'components/playerTileDirective.html',
            controller: PlayerTileCtrl,
            controllerAs: 'ctrl',
            bindToController: true,
            scope: {
                player: '=',
                expanded: '=',
                addPlayer: '&',
                removePlayer: '&'
            }
        };
    });

    function PlayerTileCtrl() {

    }

    PlayerTileCtrl.prototype.addClicked = function() {
        this.addPlayer({$player: this.player});
    };

    PlayerTileCtrl.prototype.removeClicked = function() {
        this.removePlayer({$player: this.player});
    };
})();