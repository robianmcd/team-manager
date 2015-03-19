(function(){
    angular.module('teamManager').directive('kgPlayerTile', function () {
        return {
            restrict: 'E',
            templateUrl: 'components/playerTileDirective.html',
            controller: PlayerTileCtrl,
            controllerAs: 'ctrl',
            bindToController: true,
            scope: {
                player: '='
            }
        };
    });

    function PlayerTileCtrl() {

    }

    PlayerTileCtrl.prototype.addClicked = function() {

    };

    PlayerTileCtrl.prototype.removeClicked = function() {

    };
})();