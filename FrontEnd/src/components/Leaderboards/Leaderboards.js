import React from "react";
import {Table} from "react-bootstrap";

class Leaderboards extends React.Component {
	constructor() {
		super()
		this.state = {
			data: []
		}
	}
	
	componentDidMount() {
		fetch('http://localhost:3001/Challenger')
		.then((res) => res.json())
    .then((data) => {
			data.entries.sort((a, b) => b.leaguePoints - a.leaguePoints);
			this.setState({data: data.entries});
		});
	}

	render() {
		let i = 1
		return (
			<div>
				<br /><br />

				<Table striped bordered size="sm" className="leaderboardsTable">
					<thead>
						<tr>
							<th>Rank</th>
							<th>Name</th>
							<th>LP</th>
							<th>Wins</th>
							<th>Losses</th>
						</tr>
					</thead>
					<tbody>{this.state.data.map(function (item, key) {
						return (
							<tr key={key}>
								<td>{i++}</td>
								<td>{item.summonerName}</td>
								<td>{item.leaguePoints}</td>
								<td>{item.wins}</td>
								<td>{item.losses}</td>
							</tr>
						)
					})}</tbody>
				</Table>

			</div>
		)
	}
}

export default Leaderboards