const express = require('express')
var request = require('request')
var fs = require('fs');

const app = express()
const port = 3002

const api_key_bannu = 'RGAPI-102d55d0-c4a2-4354-a186-016f96b18101'

app.get('/Challenger', (req, res) => {
	request('https://na1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5?api_key=' + api_key_bannu, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			res.send(body);
		}
	})
});

app.get('/Summoner/:id', (req, res) => {
	request('https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + req.params.id + '?api_key=' + api_key_bannu, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			res.send(body);
		}
	})
});

app.get('/SummonerData/:encryptedId', (req, res) => {
	request('https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/' + req.params.encryptedId + '?api_key=' + api_key_bannu, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			res.send(body);
		}
	})
});

app.get('/SummonerMatches/:accountId', (req, res) => {
	request('https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/' + req.params.accountId + '?api_key=' + api_key_bannu, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			res.send(body);
		}
	})
});

app.get('/Match/:gameId', (req, res) => {
	request('https://na1.api.riotgames.com/lol/match/v4/matches/' + req.params.gameId + '?api_key=' + api_key_bannu, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			res.send(body);
		}
	})
});

/***** DO NOT DELETE THIS COMMENTED GET *******/

// app.get('/getChampionID', (req, res) => {
// 	request('http://ddragon.leagueoflegends.com/cdn/10.15.1/data/en_US/champion.json', function (error, response, body) {
// 		if (!error && response.statusCode == 200) {
//             body = JSON.parse(body).data
//             var championID = {};
//             Object.entries(body).forEach((entry) => {
//                 championID[entry[1].key] = entry[1].id;
//             });
//             console.log(JSON.stringify(championID));
//             res.send(JSON.stringify(championID));
//             // for (let i = 0; i < body.data.length; i++) {

//             // }
// 		}
// 	})
// });

/************************************************* */

app.get('/getChampionID', (req, res) => {
    var data = JSON.parse(fs.readFileSync('./championID.json', 'utf8'));
    // console.log(data);
    res.send(data);
});

/***** DO NOT DELETE THIS COMMENTED GET *******/

// app.get('/QueueID', (req, res) => {
// 	request('http://static.developer.riotgames.com/docs/lol/queues.json', function (error, response, body) {
// 		if (!error && response.statusCode == 200) {
//             body = JSON.parse(body)
//             // console.log(body);
//             var queue = {};
//             Object.entries(body).forEach((entry) => {
//                 console.log(entry[1].queueId, entry[1].map);
//                 queue[entry[1].queueId] = entry[1].map;
//             })
//             console.log(JSON.stringify(queue));
//         }
// 	})
// });

/************************************************* */

app.get('/QueueID', (req, res) => {
    var data = JSON.parse(fs.readFileSync('./queueID.json', 'utf8'));
    // console.log(data);
    res.send(data);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))