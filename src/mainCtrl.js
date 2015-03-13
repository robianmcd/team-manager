(function(){
    function MainCtrl($location) {
        this.$location = $location;
    }

    angular.module('teamManager').controller('MainCtrl', MainCtrl);

    MainCtrl.prototype.loadTeam = function () {
        this.$location.path('/team');
    };

    MainCtrl.prototype.loadFindPlayers = function () {
        this.$location.path('/findPlayers');
    };

    MainCtrl.prototype.loadCreatePlayer = function () {
        this.$location.path('/createPlayer');
    };

    MainCtrl.prototype.navClass = function (page) {
        var currentRoute = this.$location.path().substring(1) || 'home';
        return page === currentRoute ? 'active' : '';
    };

})();