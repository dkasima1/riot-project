import React from "react"
import axios from "axios"

class Match extends React.Component {
  
  constructor() {
    super()
    this.state = {
      gameId: 0,
      gameData: [],
      loading: true
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    if (this.state.loading) {
      return (
        <h1>Loading...</h1>
      )
    }
    if (!this.state.gameData) {
      return (
        <h1>Game not found!</h1>
      )
    }
    return (
      <div>
        gameId is {this.state.gameData.gameId}
      </div>
    )
  }


  fetchData() {
    axios.get('/Match/' + this.props.match.params.gameId) // summoner info
      .then((gameData) => {
        console.log(gameData.data);
        this.setState({ gameData: gameData.data, loading: false });
      })
  }
  /*this.props.match.params.gameId ? 
      this.setState({gameId: this.props.match.params.gameId}) : 
      this.setState({gameId: null})*/
}

export default Match