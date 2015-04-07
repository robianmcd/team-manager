var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(path.resolve(__dirname, 'src')));
app.use(bodyParser.json());       // to support JSON-encoded bodies

app.listen(3000, function () {
    console.log('listening');
});

app.get('/api/players', function (req, res) {
    res.send(players);
});

app.post('/api/players', function (req, res) {
    var newPlayer = req.body;
    newPlayer.ID = nextId;
    nextId++;
    players.push(newPlayer);
    res.sendStatus(200);
});

app.get('/api/players/:ID', function (req, res) {
    res.send(players.filter(function (player) {
        return player.ID.toString() === req.params.ID;
    })[0]);
});

app.get('/api/search/players', function (req, res) {
    console.log(req.query);
    if(req.query.query) {
        res.send(players.filter(function (player) {
            return player.FullName.toLowerCase().indexOf(req.query.query.toLowerCase()) !== -1;
        }));
    } else {
        res.send(players);
    }
});

app.post('/api/user/players', function (req, res) {
    userPlayers.push(req.body.ID);
    res.sendStatus(200);
});

app.get('/api/user/players', function (req, res) {
    res.send(userPlayers);
});

app.delete('/api/user/players/:ID', function (req, res) {
    userPlayers.splice(userPlayers.indexOf(parseInt(req.params.ID)), 1);
    res.sendStatus(200);
});

var userPlayers = [];

var players = [
    {
        ID: 1,
        FullName: 'Bryan Ruiz',
        PlayerDescription: 'Bryan Jafet Ruiz González is a Costa Rican footballer who plays for Dutch team PSV Eindhoven on loan from Fulham of the English Premier League. He is a left sided attacking midfielder who can play as a second striker, and is captain of the Costa Rica national team.',
        Age: 29,
        Pos: 'Attacker',
        Team: 'Fulham',
        MinsPlayed: 1569,
        Lineups: 19,
        Points: 4,
        Cards: 0,
        ImageUrl: 'http://us.cdn281.fansshare.com/photos/bryanruiz/bryan-ruiz-celebrity-502736575.jpg'
    },
    {
        ID: 2,
        FullName: 'Keylor Navas',
        PlayerDescription: 'Keylor Antonio Navas Gamboa is a Costa Rican professional footballer who plays for Levante UD in La Liga, as a goalkeeper.',
        Age: 28,
        Pos: 'Goalkeeper',
        Team: 'Real Madrid',
        MinsPlayed: 180,
        Lineups: 2,
        Points: 0,
        Cards: 0,
        ImageUrl: 'http://img.uefa.com/imgml/TP/players/1/2015/324x324/250031037.jpg'
    },
    {
        ID: 3,
        FullName: 'Joel Campbell',
        PlayerDescription: 'Joel Nathaniel Campbell Samuels is a Costa Rican footballer who plays for the Greek club Olympiacos on loan from English club Arsenal and the Costa Rica national football team. Campbell plays as a forward but can also be deployed on the wings.',
        Age: 22,
        Pos: 'Attacker',
        Team: 'Vilarreal',
        MinsPlayed: 382,
        Lineups: 5,
        Points: 0,
        Cards: 1,
        ImageUrl: 'http://i1.eurosport.com/2014/06/22/1264153-27274683-1600-900.jpg'
    },
    {
        ID: 4,
        FullName: 'Celso Borges',
        PlayerDescription: 'Celso Borges Mora is a Costa Rican professional footballer currently playing for AIK in Allsvenskan.',
        Age: 26,
        Pos: 'Midfielder',
        Team: 'Deportivo La Coruña',
        MinsPlayed: 535,
        Lineups: 6,
        Points: 2,
        Cards: 2,
        ImageUrl: 'http://img.thesun.co.uk/aidemitlum/archive/02003/Borges_2003042a.jpg'
    },
    {
        ID: 5,
        FullName: 'Júnior Díaz',
        PlayerDescription: 'Júnior Enrique Díaz Campbell is a Costa Rican professional footballer who plays for 1. FSV Mainz 05 and the Costa Rica national team. He is son of former Costa Rican national team footballer Enrique Díaz.',
        Age: 31,
        Pos: 'Defender',
        Team: 'Mainz 05',
        MinsPlayed: 1237,
        Lineups: 15,
        Points: 1,
        Cards: 4,
        ImageUrl: 'http://img.uefa.com/imgml/TP/players/14/2012/324x324/250002256.jpg'
    },
    {
        ID: 6,
        FullName: 'Roy Miller',
        PlayerDescription: 'Roy Miller Hernández is a Costa Rican footballer who currently plays for New York Red Bulls in Major League Soccer and the Costa Rica national football team.',
        Age: 30,
        Pos: 'Defender',
        Team: 'New York RB',
        MinsPlayed: 2200,
        Lineups: 25,
        Points: 0,
        Cards: 4,
        ImageUrl: 'http://www.newyorkredbulls.com/sites/newyork/files/players/head-shots/miller_roy.jpg'
    },
    {
        ID: 7,
        FullName: 'Álvaro Saborío',
        PlayerDescription: 'Álvaro Alberto Saborío Chacón is a Costa Rican footballer, who currently plays for Real Salt Lake in Major League Soccer and the Costa Rica national football team.',
        Age: 32,
        Pos: 'Attacker',
        Team: 'Real Salt Lake',
        MinsPlayed: 1331,
        Lineups: 15,
        Points: 8,
        Cards: 4,
        ImageUrl: 'http://fedefutbolcr.com/wp-content/uploads/2014/06/sabo.jpg'
    },
    {
        ID: 8,
        FullName: 'Claudio Jara',
        PlayerDescription: 'Claudio Miguel Jara Granados is a former Costa Rican football striker who played more than a decade for C.S. Herediano and participated in the 1990 FIFA World Cup finals.',
        Age: 19,
        Pos: 'Goalkeeper',
        Team: 'Costa Rica U21',
        MinsPlayed: 270,
        Lineups: 3,
        Points: 0,
        Cards: 0,
        ImageUrl: 'http://www.zerozero.pt/img/jogadores/01/190301_claudio_jara.jpg'
    },
    {
        ID: 9,
        FullName: 'Cristian Gamboa',
        PlayerDescription: 'Cristian Esteban Gamboa Luna, commonly known as Cristian Gamboa, is a Costa Rican footballer, who currently plays for Rosenborg.',
        Age: 25,
        Pos: 'Defender',
        Team: 'West Bromwich Albion',
        MinsPlayed: 233,
        Lineups: 1,
        Points: 0,
        Cards: 1,
        ImageUrl: 'http://img.uefa.com/imgml/TP/players/14/2013/324x324/250035615.jpg'
    },
    {
        ID: 10,
        FullName: 'Johan Venegas',
        PlayerDescription: 'Venegas started his career at Santos de Guápiles and had a short loan spell at Barrio México in 2011. He joined Puntarenas in 2012, only to move to Alajuelense in 2013.',
        Age: 26,
        Pos: 'Attacker',
        Team: 'Alajuelense',
        MinsPlayed: 2132,
        Lineups: 23,
        Points: 7,
        Cards: 5,
        ImageUrl: 'http://www.nacion.com/deportes/futbol-costa-rica/Johan-Venegas_LNCIMA20130715_0186_23.jpg'
    }
];

var nextId = 11;
