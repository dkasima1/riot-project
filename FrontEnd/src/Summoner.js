import React from "react"

class Summoner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    console.log("meep!")
		fetch('http://localhost:3001/Summoner/' + this.props.summoner)
		.then((res) => res.json())
    .then((stats) => {
			this.setState({data: stats});
		});
	}

  render() {
    <div>
      <h1>{this.state.data.summonerName}</h1>
      <h3>Wins: {this.state.data.wins}</h3>
      <h3>Losses: {this.state.data.losses}</h3>
    </div>
  }
}