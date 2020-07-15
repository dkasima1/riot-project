import React from "react";

class Leaderboards extends React.Component {
	constructor() {
		super()
		this.state = {
			data: []
		}
	}

	componentDidMount() {
		
		console.log("omg mounted!!")

/*		const fetch = require('node-fetch');
		const https = require('https');
		
		const httpsAgent = new https.Agent({
					rejectUnauthorized: false,
				});
*/
		console.log("numba 2")

		fetch('http://localhost:3001/Challenger', {
//				agent: httpsAgent
		})
		.then((res) => res.json())
    .then((data) => {
			console.log("?")
			data.entries.sort((a, b) => a.leaguePoints - b.leaguePoints);
			this.setState({data: data.entries});
		});
		console.log("omg fining!!")
		console.log(this.state.data)
	}

	render() {
		return (
			<div>
				<br /><br />
				<br /><br />

				<table className="table">
					<thead>
						<tr>
							<th>Name</th>
							<th>LP</th>
						</tr>
					</thead>
					<tbody>{this.state.data.map(function (item, key) {
						return (
							<tr key={key}>
								<td>{item.summonerName}</td>
								<td>{item.leaguePoints}</td>
							</tr>
						)
					})}</tbody>
				</table>

			</div>
		)
	}
}

export default Leaderboards