import React from "react"
import {Table} from "react-bootstrap";

class Summoner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      loading: true
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/Summoner/' + this.props.match.params.summoner)
      .then((res) => res.json())
      .then((summoner) => {
        this.setState({ data: summoner.data, loading: false });
      });
  }

  render() {
    if (this.state.loading) {
      return (
        <h1>Loading...</h1>
      )
    }
    if (!this.state.data) {
      return (
        <h1>No summoner found!</h1>
      )
    }
    return (
      <Table striped bordered size="sm" className="leaderboardsTable">
					<thead>
						<tr>
							<th>Queue</th>
							<th>Tier</th>
							<th>Rank</th>
							<th>LP</th>
							<th>Wins</th>
              <th>Losses</th>
						</tr>
					</thead>
					<tbody>{this.state.data.map(function (item, key) {
						return (
							<tr key={key}>
								<td>{item.queueType}</td>
								<td>{item.tier}</td>
								<td>{item.rank}</td>
                <td>{item.leaguePoints}</td>
								<td>{item.wins}</td>
								<td>{item.losses}</td>
							</tr>
						)
					})}</tbody>
				</Table>
    )
  }
}

export default Summoner