import React from "react";

class Leaderboards extends React.Component {

	componentDidMount() {
		fetch('./Challenger.json')
		.then((res) => res.json())
    .then((data) => {
			data.entries.sort((a, b) => a.leaguePoints - b.leaguePoints);
			this.setState({data: data});
    });
	}

	render() {
		return (
			<div>
				<br /><br />
				<br /><br />

				< table className="table">
					<th>Name</th>
					<th>LP</th>
					<tbody>{this.state.data.entries.map(function (item) {
						return (
							<tr>
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