import React from "react"
import { Table } from "react-bootstrap";
import axios from "axios";
import Match from "./Match"

class Summoner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      summonerInfo: [],
      summonerData: [],
      matches: [],
      loading: true
    }

    this.fetchData = this.fetchData.bind(this)
  }

  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.summoner !== this.props.match.params.summoner) {
      this.fetchData()
    }
  }

  render() {
    if (this.state.loading) {
      return (
        <h1>Loading...</h1>
      )
    }
    if (!this.state.summonerInfo) {
      return (
        <h1>No summoner found!</h1>
      )
    }
    return (
      <div>
        <Table striped bordered size="sm" className="leaderboardsTable" key={this.state.summonerInfo.name}>
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
          <tbody>{this.state.summonerData.map(function (item, key) {
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

        <Table striped bordered size="sm" className="leaderboardsTable">
          <thead>
            <tr>
              <th>gameId</th>
              <th>champion</th>
              <th>queue</th>
              <th>lane</th>
            </tr>
          </thead>
          <tbody>{this.state.matches.map(function (item, key) {
            return (
              /*<Match 
                gameId={item.gameId} 
                champion={item.champion} 
                queue={item.queue}
                lane={item.lane}
              />*/
              <tr key={key}>
                <td>{item.gameId}</td>
                <td>{item.champion}</td>
                <td>{item.queue}</td>
                <td>{item.lane}</td>
              </tr>
            )
          })}</tbody>
        </Table>

      </div>
    )
  }

  fetchData() {
    axios.get('/Summoner/' + this.props.match.params.summoner) // summoner info
      .then((summonerInfo) => {
        console.log(summonerInfo.data);
        this.setState({ summonerInfo: summonerInfo.data });
      })
      .then(() => {
        axios.get('/SummonerData/' + this.state.summonerInfo.id) // summoner info
          .then((summonerData) => {
            console.log(summonerData.data);
            this.setState({ summonerData: summonerData.data });
          });
        axios.get('/SummonerMatches/' + this.state.summonerInfo.accountId) // summoner info
          .then((summonerMatches) => {
            console.log(summonerMatches);
            this.setState({ matches: summonerMatches.data.matches, loading: false });
            console.log(this.state.matches)
          });
      })
  }
  /*
  fetchData() {
    fetch('http://localhost:3001/Summoner/' + this.props.match.params.summoner)
      .then((res) => res.json())
      .then((summoner) => {
        this.setState({ data: summoner.data, loading: false });
      });
  }
  */
}

export default Summoner