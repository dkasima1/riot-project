const express = require('express')
var request = require('request')

const app = express()
const port = 3002

const api_key_bannu = 'RGAPI-e0088f56-a81a-4f2e-acd9-1a7e496c4d2c'

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
			body = JSON.parse(body)
			request('https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/' + body.id + '?api_key=' + api_key_bannu, function (err, resp, bod) {
				if (!err && resp.statusCode == 200) {
					res.send(bod);
				}
			})
		}
	})
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))