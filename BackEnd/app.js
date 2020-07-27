const express = require('express')
var request = require('request')

const app = express()
const port = 3002

const api_key_bannu = 'RGAPI-adf9a066-6f4f-4eea-88cf-0e4011335902'

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

app.listen(port, () => console.log(`Example app listening on port ${port}!`))