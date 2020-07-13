import React from "react";

class Leaderboards extends React.Component {
	constructor() {
		super()
		this.state = {
			data: []
		}
	}

	componentDidMount() {
		fetch('./Challenger.json')
		.then((res) => res.json())
    .then((data) => {
			data.entries.sort((a, b) => a.leaguePoints - b.leaguePoints);
			this.setState({data: data.entries});
    });
	}

	render() {
		return (
			<div>
				<br /><br />
				<br /><br />

				<table className="table">
					<th>Name</th>
					<th>LP</th>
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