(function(){

    function Player(serializedPlayer, $log) {
        $log.info('Creating a player');

        if(serializedPlayer.name) {
            angular.extend(this, serializedPlayer);
        } else {
            this.id = serializedPlayer.ID;
            this.name = serializedPlayer.FullName;
            this.bio = serializedPlayer.PlayerDescription;
            this.age = serializedPlayer.Age;
            this.position = serializedPlayer.Pos;
            this.team = serializedPlayer.Team;
            this.minutesPlayed = serializedPlayer.MinsPlayed;
            this.lineups = serializedPlayer.Lineups;
            this.goals = serializedPlayer.Points;
            this.cards = serializedPlayer.Cards;
            this.img = serializedPlayer.ImageUrl;
        }
    }

    Player.prototype.serialize = function() {
        return {
            ID: this.id,
            FullName: this.name,
            PlayerDescription: this.bio,
            Age: this.age,
            Pos: this.position,
            Team: this.team,
            MinsPlayed: this.minutesPlayed,
            Lineups: this.lineups,
            Points: this.goals,
            Cards: this.cards,
            ImageUrl: this.img
        }
    };

    var app = angular.module('teamManager');
    app.controller('Player', Player);
    app.factory('Player', function () {
        return Player;
    });

})();